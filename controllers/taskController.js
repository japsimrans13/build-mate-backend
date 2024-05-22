const Task = require("../models/TaskModel");

// Task APIs
exports.createTask = async (req, res) => {
  try {
    const { name, description, project, dueDate, assignedTo } = req.body;
    const task = await Task.create({
      name,
      description,
      status: "todo",
      dueDate,
      project,
      createdBy: req.user._id,
      assignedTo,
    });
    return res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    return res.status(500).json({ error: error, message: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  // tasks API with pagination
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    // Get all the tasks
    const tasks = await Task.find({$or: [{ createdBy: req.user._id }, { assignedTo: req.user._id }]})
      .populate('project', 'project_id name description')
      .populate('createdBy', 'email name')
      .populate('assignedTo', 'email name')
      .limit(limit)
      .skip(startIndex);
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ error: error, message: error.message });
  }
};

// Get all tasks created by the user
exports.getCreatedTasks = async (req, res) => {
  // tasks API with pagination
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    // Get all the task created by the user
    const tasks = await Task.find({ createdBy: req.user._id })
      .populate("project")
      .populate("assignedTo")
      .limit(limit)
      .skip(startIndex);
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ error: error, message: error.message });
  }
};

// Get all tasks assigned to the user
exports.getAssignedTasks = async (req, res) => {
    // tasks API with pagination
    try {
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 10; // Default limit to 10
      // Calculate the starting index of pagination
      const startIndex = (page - 1) * limit;
      // Get all the task assigned to the user
      const tasks = await Task.find({ assignedTo: req.user._id })
        .populate("project")
        .populate("assignedTo")
        .limit(limit)
        .skip(startIndex);
      return res.status(200).json({ tasks });
    } catch (error) {
      return res.status(500).json({ error: error, message: error.message });
    }
  };