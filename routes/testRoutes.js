const express = require('express');
const router = express.Router();
const test = require('../controllers/testController');

router.post('/welcome-email', test.welcomeEmail);

module.exports = router;