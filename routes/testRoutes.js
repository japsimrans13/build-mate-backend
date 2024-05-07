const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/welcome-email', emailController.welcomeEmail);

module.exports = router;