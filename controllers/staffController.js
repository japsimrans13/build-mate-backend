// This module will be used in the controllers/staffController.js file to create, read, update, and delete staff members.
const User = require("../models/UserModel");

// Only the owner can create a staff member
exports.createStaff = async (req, res) => {
  try {
    if (req.user.role !== "owner") {
      return res
        .status(401)
        .json({ message: "You are not authorized to perform this action" });
    }
    const { name, email, password, phoneNumber, projects } = req.body;
    const companyName = req.user.companyName;
    const domainName = req.user.domainName;
    const staff = await User.create({
      name,
      email,
      password,
      phoneNumber,
      companyName,
      domainName,
      role: "staff",
      projects,
      owner: req.user._id,
    });
    await staff.save();
    const owner = await User.findById(req.user._id);
    owner.staff.push(staff._id);
    // console.log(owner);
    await owner.save();
    return res
      .status(201)
      .json({ message: "Staff created successfully", staff });
  } catch (error) {
    return res.status(500).json({ error: error, message: error?.message });
  }
};

exports.getStaff = async (req, res) => {
  try {
    // Only the owner can get the staff members
    if (req.user.role !== "owner") {
      return res
        .status(401)
        .json({ message: "You are not authorized to perform this action" });
    }
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;

    // Get owner from mongoose rather than req.user
    const owner = await User.findById(req.user._id);
    // TODO: get it from USer.find({'owner': req.user._id, 'role': 'staff'})
    let staff = owner.staff;
    if (staff.length === 0) {
      return res.status(200).json({ staff: [] });
    }
    // Get the staff data with pagination
    staff = staff.slice(startIndex, startIndex + limit);
    let staffData = [];
    for (let i = 0; i < staff.length; i++) {
      const user = await User.findById(staff[i]);
      staffData.push(user);
    }
    return res.status(200).json({ staffData, totalStaff: owner.staff.length });
  } catch (error) {
    return res.status(500).json({ error: error, message: error?.message });
  }
};
