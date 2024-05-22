const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    // project_id will be used to show readable project id to the user, will use _id for transaction
    project_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    staff: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    client: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
