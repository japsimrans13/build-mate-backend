const Task = require("../models/TaskModel");

// Task APIs
exports.createTask = async (req, res) => {
  try {
    const { name, description, project, dueDate, assignedTo } = req.body;
    
    const taskCount = await Task.countDocuments({ 
      domainName: req.user.domainName,
    });
    const task_id = `TSK-${req.user.domainName}-${taskCount}`;
    const task = await Task.create({
      name,
      domainName: req.user.domainName,
      task_id,
      description,
      status: "todo",
      dueDate,
      project,
      createdBy: req.user._id,
      assignedTo,
    });
    return res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    return res.status(500).json({ error: error, message: error?.message });
  }
};

// Get all tasks created by the user or assigned to the users, and all tasks in an org for the owner
exports.getAllTasks = async (req, res) => {
  // tasks API with pagination
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    // Get all the tasks
    let tasks;
    if (req.user.role === "owner") {
      tasks = await Task.find({domainName: req.user.domainName, isTrash: false})
        .populate("project")
        .populate("createdBy")
        .populate("assignedTo")
        .limit(limit)
        .skip(startIndex);
    } else {
    tasks = await Task.find({$or: [{ createdBy: req.user._id }, { assignedTo: req.user._id }], isTrash: false})
      .populate('project', 'project_id name description')
      .populate('createdBy', 'email name')
      .populate('assignedTo', 'email name')
      .limit(limit)
      .skip(startIndex);
    }
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ error: error, message: error?.message });
  }
};

// Get trash tasks by a user or all the trash tasks for the owner
exports.getTrashTasks = async (req, res) => {
  // tasks API with pagination
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    // Get all the tasks
    let tasks;
    if (req.user.role === "owner") {
      tasks = await Task.find({domainName: req.user.domainName, isTrash: true})
        .populate("project")
        .populate("createdBy")
        .populate("assignedTo")
        .limit(limit)
        .skip(startIndex);
    } else {
      tasks = await Task.find({$or: [{ createdBy: req.user._id }, { assignedTo: req.user._id }], isTrash: true})
        .populate("project")
        .populate("createdBy")
        .populate("assignedTo")
        .limit(limit)
        .skip(startIndex);
    }
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ error: error, message: error?.message });
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
    return res.status(500).json({ error: error, message: error?.message });
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
    return res.status(500).json({ error: error, message: error?.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    // check if the user has created the task or user is in assignedTo array
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    if (task.createdBy.toString() !== req.user._id.toString() || !task.assignedTo.includes(req.user._id)) {
      // TODO: add a logger with hacking attempt and save the user id and task id and time
      return res.status(401).json({ message: "You are not authorized to perform this action" });
    }
    const { name, description, status, dueDate, assignedTo } = req.body;
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.name = name;
    task.description = description;
    task.status = status;
    task.dueDate = dueDate;
    task.assignedTo = assignedTo;
    await task.save();
    return res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    return res.status(500).json({ error: error, message: error?.message });
  }
}

exports.deleteTask = async (req, res) => {
  try {
    // delete the task if user has created the task

    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(400).json({ message: "Task not found" });
    }
    if (task.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "You are not authorized to perform this action" });
    }
    task.isTrash = true;
    await task.save();
    return res.status(200).json({ message: "Task deleted successfully" });
  }
  catch (error) {
    return res.status(500).json({ error: error, message: error?.message });
  }
}
    