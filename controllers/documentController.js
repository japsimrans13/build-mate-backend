const mongoose = require("mongoose");
const Document = require("../models/DocumentModel");
const net = require('net');
const clients = new Set(); // Set to store all connected clients
const findDocument = async (id) => {
  if (id == null) return;
  // TODO check if its a valid owner or a valid user
  try {
    const document = await Document.findById(mongoose.Types.ObjectId(id));
    return document;
  } catch (error) {
    console.log(error);
    return;
  }
};

// Socket Connection for Realtime Documents
exports.documentSocket = (io) => {
  io.on("connection", (socket) => {
    // TODO: check if the user has access to the document
    // TODO: if the user is already connected, do not connect again

    if (clients.has(socket)) {
      console.log("User already connected");
    }else{
      // clients.add(socket);
    console.log("Socket ID ", socket.id);

    socket.on("get-document", async (documentId) => {
      const document = await findDocument(documentId);
      if (document == null) {
        socket.emit("document-not-found");
      } else {
      // console.log("Document ", document);
      socket.join(documentId);
      socket.emit("load-document", document.content);
      }
  
      socket.on("send-changes", (delta) => {
        // Boadcast changes to all users in the room except the sender
        // console.log("Delta ", delta);

        // socket.broadcast.to(documentId).emit("receive-changes", delta);
        // broadcast to the clients in the room
        socket.to(documentId).emit("receive-changes", delta);


        // socket.broadcast.to(documentId).emit("receive-changes", delta);
        // socket.to(documentId).emit("receive-changes", delta);
      });
  
      socket.on("save-document", async (content) => {
        // console.log("Save Content ", content); 
        // TODO: make this abstract
        await Document.findByIdAndUpdate(documentId, { content });
      });
    });
  }
});
  
  io.on("disconnect", (socket) => {
    console.log("User disconnected");
    clients.delete(socket);
  });
  }
// Rest APIs

exports.createDocument = async (req, res) => {
  try {
    const { title, content,readUsers, writeUsers } = req.body;
    const document = await Document.create({
      owner: req.user._id,
      title: title,
      content: content,
      readUsers: readUsers,
      writeUsers: writeUsers,
    });
    return res.status(201).json({ document, message: "Document created successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "There was an error while creating Document" });
  }
};

exports.getDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await Document.findById(mongoose.Types.ObjectId(id));
    if (document == null) {
      return res.status(404).json({ message: "Document not found" });
    }
    return res.status(200).json({ document });
  } catch (error) {
    // Case: where the id is not a valid ObjectId
    return res.status(404).json({ message: "Document not found" });
  }
};

// Get all owned and shared documents
exports.getAllDocuments = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    // get documents owned by the user or user in readUsers or writeUsers
    let results = await OrderModel.find().populate([{path: 'user', select: 'firstname'}, {path: 'meal', select: 'name'}]);

    const documents = await Document.find({
      $or: [
        { owner: req.user._id },
        // TODO: test this code
        { readUsers: req.user._id },
        { writeUsers: req.user._id },
      ],
    }).populate([{path:"readUsers", select: 'email name'}, {path:"writeUsers", select: 'email name'}]).limit(limit).skip(startIndex);
    return res.status(200).json({ documents });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "There was an error while fetching Documents" });
  }
}