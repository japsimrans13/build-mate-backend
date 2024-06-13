const express = require('express');
const router = express.Router();
const writerController = require('../controllers/writerController.js');

router.get('/:id', writerController.getWriter);
router.get('/', writerController.getWriters);
router.post('/create', writerController.createWriter);

module.exports = router;