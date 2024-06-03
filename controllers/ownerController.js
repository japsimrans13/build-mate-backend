// This module will have routes specific to the owner.
const User = require('../models/UserModel');

exports.updateUser = async (req, res) => {
// owner can update any user profile
// NOTE: This is a sensitive API, to be only used by the owner
try {
  const { id } = req.query;
  const data = req.body;
  // Update only if the owner is req.user._id
  if (req.user.role !== "owner") {
    return res
      .status(403)
      .json({ message: "You are not authorized to perform this action" });
  }
  // TODO: test this API
  const result = await User.updateOne({ _id: id, owner:req.user._id }, data, { new: true});
  if (result.nModified === 0) {
    return res.status(400).json({ message: "User not found" });
  }
  return res
    .status(200)
    .json({ message: "User updated successfully" });
} catch (error) {
  return res.status(500).json({ error: error, message: error?.message });
}
};

// TODO: Transaction History (money spent for build-mate services)