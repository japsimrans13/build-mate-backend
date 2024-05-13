const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

router.get('/:id', documentController.getDocument);
router.get('/get-all', documentController.getAllDocuments);
router.post('/create', documentController.createDocument);

module.exports = router;