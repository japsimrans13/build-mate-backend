const Project = require('../models/ProjectModel');
const Task = require('../models/TaskModel');
// Projects APIs
exports.createProject = async (req, res) => {
  try {
    const { name, description, staff, client, task} = req.body;
    // TODO: add a project capping to eg: 100 or 1000 according to their plan
    const domain = req.user.domainName;
    const projectCount = await Project.countDocuments({ owner: req.user._id });
    const project_id = `PROJ-${domain}-${projectCount}`;
    const project = await Project.create({ project_id, name, description, owner: req.user._id, staff, client, task});
    // Add this project to the staff
    if (staff) {
      staff.forEach(async (staffId) => {
        const staffData = await User.findById(staffId);
        if (!staffData) {
          // TODO: if the staff is not found, the ID must not be shown to the user
          // This should not happen, log this as a bug
          console.log("Staff not found");
        }
        staffData.projects.push(project._id);
        await staffData.save();
      });
    }
    // Add this project to the client
    if (client) {
      client.forEach(async (clientId) => {
        const clientData = await User.findById(clientId);
        if (!clientData) {
          // TODO: if the client is not found, the ID must not be shown to the user
          // This should not happen, log this as a bug
          console.log("Client not found");
        }
        clientData.projects.push(project._id);
        await clientData.save();
      });
    }

    return res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error:error, message: error?.message });
  }
}

// Get all projects for the owner
// TODO: make this API to get all the projects for the staff and client as well
exports.getProjects = async (req, res) => {
  // projects API with pagination
  try { 
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    const projects = await Project.find({ owner: req.user._id, isTrash: false }).populate('owner', 'name email').populate('staff', 'name email').populate('client', 'name email').populate('tasks', 'task_id name').limit(limit).skip(startIndex).sort({ updatedAt: -1 });
    const totalProjects = await Project.countDocuments({ owner: req.user._id, isTrash: false });
    const projectsWithTaskMeta = projectsWithTaskCounts(projects);
    return res.status(200).json({ projects: projectsWithTaskMeta, totalProjects});
  } catch (error) {
    // TODO: add error logging
    console.log(error);
    return res.status(500).json({ error:error, message: error?.message });
  }
}

// function to get task counts for each project
const projectsWithTaskCounts = (projects) => { 
  return projects.map(project => {
    const todoCount = project.tasks.filter(task => task.status === 'todo').length;
    const inProgressCount = project.tasks.filter(task => task.status === 'in-progress').length;
    const onHoldCount = project.tasks.filter(task => task.status === 'on-hold').length;
    const completedCount = project.tasks.filter(task => task.status === 'completed').length;
    return {
      ...project.toObject(),
      tasksMeta: {
      todoCount,
      inProgressCount,
      onHoldCount,
      completedCount,
      totalTasks: project.tasks.length
      }
    };
})};

// This controller will soft delete the project and all the tasks associated with it
exports.deleteProject = async (req, res) => {
  // only owner can delete the project
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(400).json({ message: "Project not found" });
    }
    if (project.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You are not authorized to perform this action" });
    }
    project.isTrash = true;
    await project.save();
    // soft delete all the tasks associated with the project
    await Task.updateMany({ project: req.params.id }, { isTrash: true });
    return res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error:error, message: error?.message });
  }
}

exports.getTrashProjects = async (req, res) => {
  try {
    // Check if the user has role owner
    if (req.user.role !== 'owner') {
      return res.status(403).json({ message: "You are not authorized to perform this action" });
    }
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    // Calculate the starting index of pagination
    const startIndex = (page - 1) * limit;
    const projects = await Project.find({ isTrash: true, owner: req.user._id })
      .populate('owner', 'name email').populate('staff', 'name email').populate('client', 'name email').populate('task', 'task_id name')
      .limit(limit)
      .skip(startIndex)
      .sort({ updatedAt: -1 });
    const totalTrashProjects = await Project.countDocuments({ isTrash: true, owner: req.user._id });
    return res.status(200).json({ projects, totalTrashProjects });
  } catch (error) {
    return res.status(500).json({ error: error, message: error?.message });
  }
}