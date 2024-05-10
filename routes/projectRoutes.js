const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/create-project', projectController.crateProject);
router.get('/get-projects', projectController.getProjects);





module.exports = router;