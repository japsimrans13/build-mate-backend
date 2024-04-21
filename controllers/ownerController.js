const User = require('../models/UserModel');
const Project = require('../models/ProjectModel');
const Task = require('../models/TaskModel');

// Staff APIs
exports.createStaff = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, projects, } = req.body;
    const companyName = req.user.companyName;
    const domainName = req.user.domainName;
    const user = await User.create({ name, email, password, phoneNumber, companyName, domainName, role: 'staff', projects, owner: req.user._id});
    await user.save();
    const owner = await User.findById(req.user._id);
    owner.staff.push(user._id);
    // console.log(owner);
    await owner.save();
    return res.status(201).json({ message: "Staff created successfully", user });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
};

exports.getStaff = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    
    // Get the fresh owner from mongoose rather than req.user
    const owner = await User.findById(req.user._id);
    let staff = owner.staff;
    if (staff.length === 0) {
      return res.status(200).json({ staff: [] });
    }
    // Get the staff data with pagination
    staff = staff.slice(startIndex, startIndex + limit);
    let staffData=[];
    // staff.forEach(async (id) => {
    //   const user = await User.findById(id);
    //   console.log(user);
    //   staffData.push(user);
    // });
    for (let i = 0; i < staff.length; i++) {
      const user = await User.findById(staff[i]);
      staffData.push(user);
    }

    // console.log(staffData);
    return res.status(200).json({ staffData });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
}

// Client APIs
exports.createClient = async (req, res) => {
try {
    const { name, email, phoneNumber, password, project} = req.body;
    const companyName = req.user.companyName;
    const domainName = req.user.domainName;
    const user = await User.create({ name, email, phoneNumber, password, companyName, domainName, role: 'client', project, owner: req.user._id});
    await user.save();
    const owner = await User.findById(req.user._id);
    owner.client.push(user._id);
    // console.log(owner);
    await owner.save();
    return res.status(201).json({ message: "Client created successfully", user });
} catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
};

exports.getClients = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    
    // Get the fresh owner from mongoose rather than req.user
    const owner = await User.findById(req.user._id);
    let clients = owner.client;
    if (clients.length === 0) {
      return res.status(200).json({ clients: [] });
    }
    // Get the staff data with pagination
    clients = clients.slice(startIndex, startIndex + limit);
    let clientData=[];
    // staff.forEach(async (id) => {
    //   const user = await User.findById(id);
    //   console.log(user);
    //   staffData.push(user);
    // });
    for (let i = 0; i < clients.length; i++) {
      const user = await User.findById(clients[i]);
      clientData.push(user);
    }

    // console.log(staffData);
    return res.status(200).json({ clientData });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
}


// Projects APIs
exports.crateProject = async (req, res) => {
  try {
    const { name, description, staff, client, task} = req.body;
    const project = await Project.create({ name, description, owner: req.user._id, staff, client, task});
    return res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
}

// Get all projects for the owner
exports.getProjects = async (req, res) => {
  // projects API with pagination
  try { 
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    const projects = await Project.find({ owner: req.user._id }).populate('staff').populate('client').populate('task').limit(limit).skip(startIndex);
    return res.status(200).json({ projects });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
}



// Task APIs
exports.createTask = async (req, res) => {
  try {
    const {name, description, project, dueDate, assignedTo} = req.body;
    const task = await Task.create({ name, description, status:'todo', dueDate, project, createdBy: req.user._id, assignedTo});
    return res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
}

// Get all tasks created by the owner
exports.getTasks = async (req, res) => {
  // tasks API with pagination
  try { 
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    const tasks = await Task.find({ createdBy: req.user._id }).populate('project').populate('assignedTo').populate('staff').limit(limit).skip(startIndex);
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ error:error, message: error.message });
  }
}
