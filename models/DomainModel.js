const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema(
  {
    subDomain: { type: String, required: true, unique: true},
    // If isOnHold is true, then the project is on hold, no one can login to the project
    isOnHold: { type: Boolean, default: false },
    // In future we might add a custom domain feature
    externalDomain: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Domain", domainSchema);
