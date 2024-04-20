const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, companyName, domainName} = req.body;
    const user = await User.create({ name, email, password, phoneNumber, companyName, domainName, role: 'owner'});
    // create a token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // Saving the token in DB for SSO
    user.token = token;
    user.lastLogin = new Date();
    await user.save();
    // return res.status(201).json({ message: "User created successfully", user });
    // expire token after 15
    res.cookie('token', token, { httpOnly: false, secure: false, sameSite: 'none', expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)});
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    // TODO: check from where the request is coming (domain)
    const { email, password, domainName } = req.body;
    let user;
    // if (domainName == 'localhost'){
    //   user = await User.findOne({ email });
    // }
    // else {
      user = await User.findOne({ email });
    // }
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // Saving the token in DB for SSO
    user.token = token;
    user.lastLogin = new Date();
    await user.save();
    //   set cookies
    res.cookie('token', token, { httpOnly: false, secure: false, sameSite: 'none',  expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)});
    return res.status(200).json({ message: "Logged in successfully", token , user});
  } catch (error) {

    return res.status(500).json({ error: error, message: error.message });
  }
};
