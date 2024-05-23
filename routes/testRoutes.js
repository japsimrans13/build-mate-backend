const express = require('express');
const router = express.Router();
const test = require('../controllers/testController');

router.post('/welcome-email', test.welcomeEmail);
router.post('/file-upload', test.fileUpload);
router.get('/client-onboarding-data', test.clientOnboardingData);

module.exports = router;