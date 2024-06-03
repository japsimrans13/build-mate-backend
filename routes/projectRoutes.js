const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/create-project', projectController.createProject);
router.get('/get-projects', projectController.getProjects);
router.put('/update-project/:id', projectController.updateProject);

// Trash Project routes
router.delete('/delete-project/:id', projectController.deleteProject);
router.post('/restore-project/:id', projectController.restoreProject);
router.get('/get-trash-projects', projectController.getTrashProjects);



module.exports = router;