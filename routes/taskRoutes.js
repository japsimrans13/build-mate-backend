const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/create-task', taskController.createTask);
// created as well as assigned tasks
router.get('/all-tasks', taskController.getAllTasks);
router.get('/assigned-tasks', taskController.getAssignedTasks);
router.get('/created-tasks', taskController.getCreatedTasks);


module.exports = router;