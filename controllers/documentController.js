const mongoose = require("mongoose");
const Document = require("../models/DocumentModel");

exports.findDocument = async (id) => {
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