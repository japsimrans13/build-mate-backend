const {sendEmail} = require("../services/awsSes");
const welcomeEmailTemplate = require("../services/email-templates/welcome");

exports.welcomeEmail = async (req, res) => {
  try {
    const { name, domainName} = req.body;

    sendEmail({
        recipients: ['japsimrans13@gmail.com'],
        subject: 'Welcome to Build Mate!', 
        template: welcomeEmailTemplate({ name, domainName})
    });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
};
