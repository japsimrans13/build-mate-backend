require("dotenv").config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
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
const writerRoutes = require("./routes/writerRoutes.js");
const domainRoutes = require("./routes/domainRoutes");
const testRoutes = require("./routes/testRoutes");
const {documentSocket} = require("./controllers/writerController.js");
const { authMiddleware, socketAuthMiddleware } = require("./middlewares/authMiddleware");

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
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // origin: "http://localhost:5173",
    origin: "*",
    methods: ["GET", "POST"],
  },

});
io.use(socketAuthMiddleware);
documentSocket(io);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
documentSocket(io);
// Routes
app.use("/api/register", registerRoutes);
app.use("/api/user", userRoutes);
app.use("/api/owner", authMiddleware, ownerRoutes);
app.use("/api/staff", authMiddleware, staffRoutes);
app.use("/api/client", authMiddleware, clientRoutes);
app.use("/api/project", authMiddleware, projectRoutes);
app.use("/api/task", authMiddleware, taskRoutes);
app.use("/api/writer", authMiddleware, writerRoutes);
app.use("/api/domain", domainRoutes);
app.use("/api/test", testRoutes);
app.use("/ping", (req, res) => {
  return res.status(200).json({ message: "pong" });
});




const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export app for unit testing
module.exports = server;
