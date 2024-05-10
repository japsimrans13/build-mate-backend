const Project = require('../models/ProjectModel');

// Projects APIs
exports.crateProject = async (req, res) => {
    try {
      const { name, description, staff, client, task} = req.body;
      // TODO: add a project capping to eg: 100 or 1000 according to their plan
      const domain = req.user.domainName;
      const projectCount = await Project.countDocuments({ owner: req.user._id });
      const project_id = `PROJ-${domain}-${projectCount}`;
      const project = await Project.create({ project_id, name, description, owner: req.user._id, staff, client, task});
      return res.status(201).json({ message: "Project created successfully", project });
    } catch (error) {
      console.log(error);
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
  