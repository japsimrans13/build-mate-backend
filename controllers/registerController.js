// This module will APIs for new Users(Owners) registration to the platform
const User = require('../models/UserModel');
const Domain = require('../models/DomainModel');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, dob, password, phoneNumber, companyName, domainName} = req.body;
    // TODO: Validate the domainName
    const restrictedDomains = ['admin', 'www', 'api', 'app', 'auth', 'cloud'];
    if (restrictedDomains.includes(domainName.toLowerCase())) {
      return res.status(400).json({ message: "Invalid domain name" });
    }    
    // Save the user in DB
    const user = await User.create({ name, email, dob, password, phoneNumber, companyName, domainName, role: 'owner'})
    const domain = await Domain.create({ subDomain: domainName, owner: user._id });
    // create a token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // Saving the token in DB for SSO
    user.token = token;
    user.lastLogin = new Date();
    // Saving the Domain in DB
    await user.save();

    return res.status(201).json({ message: "User created successfully",token, user });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
};

// TODO: add supportive APIs for registration
// 1. Check if the domain is available
// 2. check if phone number is not already registered
// 3. check if email is not already registered
// 4. Send an email to the user for verification
// 5. Verify the email
// 6. Resend the verification email

