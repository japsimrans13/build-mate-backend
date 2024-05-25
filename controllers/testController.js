const {sendEmail} = require("../services/awsSes");
const welcomeEmailTemplate = require("../services/email-templates/welcome");
const formidable = require("formidable");
const ClientOnboarding = require("../models/ClientOnboardingModel");
exports.welcomeEmail = async (req, res) => {
  try {
    const { name, domainName} = req.body;

    sendEmail({
        recipients: ['japsimrans13@gmail.com'],
        subject: 'Welcome to Build Mate!', 
        template: welcomeEmailTemplate({ name, domainName})
    });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error:error, message: error?.message });
  }
};

exports.fileUpload = async (req, res) => {
  try {
      const form = new formidable.IncomingForm();
      
      form.parse(req, async (error, fields, files) => {
        if (error) {
          res.status(400);
          res.send(error);
        }
        console.log(files);
      });
    return res.status(201).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error:error, message: error?.message });
  }
}

exports.clientOnboardingData = async (req, res) => {

  try {
    const clientOnboardingData = await ClientOnboarding.find();
    return res.status(200).json({ clientOnboardingData });
  } catch (error) {
    return res.status(500).json({ error:error, message: error?.message });
  }
}