const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/create-project', projectController.createProject);
router.get('/get-projects', projectController.getProjects);

// Trash Project routes
router.delete('/delete-project/:id', projectController.deleteProject);
router.get('/get-trash-projects', projectController.getTrashProjects);



module.exports = router;