require("dotenv").config();
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const registerRoutes = require("./routes/registerRoutes");
const userRoutes = require("./routes/userRoutes");
const ownerRoutes = require("./routes/ownerRoutes");
const staffRoutes = require("./routes/staffRoutes");
const taskRoutes = require("./routes/taskRoutes");
const clientRoutes = require("./routes/clientRoutes");
const projectRoutes = require("./routes/projectRoutes.js");
const documentRoutes = require("./routes/documentRoutes");
const domainRoutes = require("./routes/domainRoutes");
const testRoutes = require("./routes/testRoutes");
const { findDocument } = require("./controllers/documentController");
const { authMiddleware } = require("./middlewares/authMiddleware");
const Document = require("./models/Document");
// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    createIndexes: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/register", registerRoutes);
app.use("/api/user", userRoutes);
app.use("/api/owner", authMiddleware, ownerRoutes);
app.use("/api/staff", authMiddleware, staffRoutes);
app.use("/api/client", authMiddleware, clientRoutes);
app.use("/api/project", authMiddleware, projectRoutes);
app.use("/api/task", authMiddleware, taskRoutes);
app.use("/api/document", authMiddleware, documentRoutes);
app.use("/api/domain", domainRoutes);
app.use("/test", testRoutes);

const io = require("socket.io")(8001, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});



io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await findDocument(documentId);
    if (document == null) {
      socket.emit("document-not-found");
    } else {
    socket.join(documentId);
    socket.emit("load-document", document.content);
    }

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (content) => {
      console.log("Content ", content);
      // TODO: make this abstract
      await Document.findByIdAndUpdate(documentId, { content });
    });
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export app for unit testing
module.exports = app;
