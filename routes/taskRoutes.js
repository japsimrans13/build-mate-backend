const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/create-task', taskController.createTask);
// Get all tasks created by the user or assigned to the users, and all tasks in an org for the owner
router.get('/all-tasks', taskController.getAllTasks);
router.get('/assigned-tasks', taskController.getAssignedTasks);
router.get('/created-tasks', taskController.getCreatedTasks);
// Update Task routes
router.put('/update-task/:id', taskController.updateTask);
// Trash Tasks routes
router.delete('/delete-task/:id', taskController.deleteTask);
router.post('/restore-task/:id', taskController.restoreTask);
router.get('/get-trash-tasks', taskController.getTrashTasks);


module.exports = router;