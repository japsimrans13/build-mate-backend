// this module has all the user routes which are common for all the users.
// 1. login: This route is used to login the user. The user needs to provide the email and password to login.
// 2. updateProfile: This route is used to update the user profile. The user can update the name, email, and phone number.
// 3. changePassword: This route is used to change the user password. The user needs to provide the old password and the new password.
// 4. getProfile: This route is used to get the user profile. The user can view its profile details.

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const origin = req.headers.origin;
    const domainName = origin.split('//')[1].split(':')[0];
    const subDomain = domainName.split('.')[0];
    let user;
    if (subDomain == 'localhost'){
      user = await User.findOne({ email });
    }
    else {
      user = await User.findOne({ email: email, domainName: subDomain});
    }
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // Saving the token in DB for SSO
    user.token = token;
    user.lastLogin = new Date();
    await user.save();
    // res.cookie('token', token, { httpOnly: false, secure: false, sameSite: 'none',  expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)});
    return res.status(200).json({ message: "Logged in successfully", token , user});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error, message: error?.message });
  }
};

exports.updateProfile = async (req, res) => {
    try {
        const name = req.body.name || req.user.name;
        const email = req.body.email || req.user.email;
        const phoneNumber = req.body.phoneNumber || req.user.phoneNumber;
        // update only the fields that are provided, if the field is not provided, it will remain the same
        const user = await User.findByIdAndUpdate(req.user._id, { name, email, phoneNumber }, { new: true});
        return res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
        return res.status(500).json({ error: error, message: error?.message });
    }
}

// 2. changePassword: This route is used to change the user password. The user needs to provide the old password and the new password.
exports.changePassword = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        console.log(user);
        const { oldPassword, newPassword } = req.body;
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid old password" });
        }
        user.password = newPassword;
        await user.save();
        return res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        return res.status(500).json({ error: error, message: error?.message });
    }
}

// 3. getProfile: This route is used to get the user profile. The user can view its profile details.
exports.getProfile = async (req, res) => {
    try {
        // TODO: populate necessary fields
        // TODO: remove sensitive fields
        const user = await User.findById(req.user._id);
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error, message: error?.message });
    }
}

// TODO: add forgot password API