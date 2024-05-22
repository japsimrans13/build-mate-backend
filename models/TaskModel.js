const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    // task_id will be used to show readable project id to the user, will use _id for transaction
    task_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dueDate: { type: Date },
    status: {
      type: String,
      enum: ["todo", "in-progress", "on-hold", "completed"],
      default: "todo",
    },
    description: { type: String },
    files: [
      {
        name: { type: String },
        url: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
