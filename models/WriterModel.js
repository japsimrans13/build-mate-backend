const mongoose = require("mongoose");

const writerSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    // Users which have read access to the document
    readUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // Users which have write access to the document
    writeUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // The document title
    title: { type: String},
    // The document content
    content: { type: Object},
    // TODO add tags to the document
  },
  { timestamps: true }
);

module.exports = mongoose.model("Writer", writerSchema);
