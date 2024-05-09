const { Textract } = require("aws-sdk");
const mongoose = require("mongoose");

const invoicesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    amount: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    dueDate: { type: Date },

    // An invoice can have multiple tasks and it will be generated automatically
    // tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
