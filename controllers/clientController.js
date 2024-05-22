const User = require("../models/UserModel");

// Client APIs
exports.createClient = async (req, res) => {
  try {
    const { name, email, companyName, phoneNumber, password, projects } = req.body;
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
    await client.save();
    const owner = await User.findById(req.user._id);
    owner.client.push(client._id);
    await owner.save();
    return res
      .status(201)
      .json({ message: "Client created successfully", client });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error, message: error.message });
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
      const user = await User.findById(clients[i]);
      clientData.push(user);
    }
    return res.status(200).json({ clientData });
  } catch (error) {
    return res.status(500).json({ error: error, message: error.message });
  }
};
