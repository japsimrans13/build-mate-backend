const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

router.post('/create-staff', staffController.createStaff);
router.get('/get-staff', staffController.getStaff);


module.exports = router;