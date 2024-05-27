const User = require("../models/UserModel");
const ClientOnboarding = require("../models/ClientOnboardingModel");
const { v4: uuidv4 } = require("uuid");
const { uploadFileS3 } = require("../services/awsS3FileUpload");
const formidable = require("formidable");
const fs = require("fs");
// Client APIs
exports.createClient = async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      if (error) {
        res.status(400).send(error);
      }
      // console.log(fields);
      // console.log(files);
      const { name, email, companyName, phoneNumber, password } = fields;
      if (!name || !email || !companyName || !phoneNumber || !password) {
        return res.status(400).json({ message: "Please fill all required fields" });
      }
      let projects;
      if (fields.projects) {
      // Split the projects string into an array
      projects = fields.projects.split(",");
      }
      
      // create a new client
      const domainName = req.user.domainName;
      const client = await User.create({
        name,
        email,
        phoneNumber,
        password,
        companyName,
        domainName,
        role: "client",
        projects,
        owner: req.user._id,
      });
      const owner = await User.findById(req.user._id);
      owner.client.push(client._id);
      await owner.save();
      // create a new client onboarding document
      const clientOnboarding = await ClientOnboarding.create({
        createdBy: req.user._id,
        client: client._id,
      });
      // save the clientOnboarding id in the client document
      client.clientOnboarding = clientOnboarding._id;
      await client.save();
      // Handle all the files
      const filesMeta = JSON.parse(fields.filesMeta);
      // console.log(filesMeta, "filesMeta");
      filesMeta.forEach((element) => {
        const fileName = uuidv4();
        fs.readFile(
          files[element.fileKey].filepath,
          async function (err, data) {
            let filePayload = {
              fileName: fileName,
              buffer: data,
              fileType: files[element.fileKey].mimetype,
            };
            // Upload the file to S3
            const uploadData = await uploadFileS3(filePayload);
            console.log(uploadData);
            // TODO: append the file to the clientOnboarding document list
            clientOnboarding.files.push({
              title: element.title,
              description: element.description,
              url: uploadData.Location,
            });
            await clientOnboarding.save();
            fs.unlink(files[element.fileKey].filepath, function (err) {
              if (err) {
                console.error(err);
              }
            });
          }
        );
      });
      return res
        .status(201)
        .json({ message: "Client Onboard Successful", client });
    });
  } catch (error) {
    console.log(error);
    //TODO: save the error in a log file
    return res.status(500).json({ error: error, message: error?.message });
  }
};

exports.getClients = async (req, res) => {
  try {
    // Only the owner can get the clients
    if (req.user.role !== "owner") {
      return res
        .status(401)
        .json({ message: "You are not authorized to perform this action" });
    }
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;

    // Get the fresh owner from mongoose rather than req.user
    const owner = await User.findById(req.user._id);
    // console.log(owner);
    let clients = owner.client;
    if (clients.length === 0) {
      return res.status(200).json({ clients: [] });
    }
    // Get the staff data with pagination
    clients = clients.slice(startIndex, startIndex + limit);
    let clientData = [];
    for (let i = 0; i < clients.length; i++) {
      const user = await User.findById(clients[i]).populate([
        {
          path: "projects",
          select: "name project_id",
        },
        {
          path: "clientOnboarding",
        },
      ]);
      clientData.push(user);
    }
    return res.status(200).json({ clientData , totalClients: owner.client.length });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error, message: error?.message });
  }
};
