const mongoose = require("mongoose");
// This schema is to store all the files and documents related to the client onboarding process
const clientOnboardingSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    // There can be only one client onboarding model for a client, if we need to add more files, we can update the existing client onboarding model
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true, required: true,},
    files: [
      {
        title: { type: String, required: true },
        description: { type: String },
        url: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClientOnboarding", clientOnboardingSchema);
