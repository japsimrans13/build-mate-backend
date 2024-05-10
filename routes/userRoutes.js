const express = require('express');
const router = express.Router();
const {authMiddleware} = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

router.post('/login', userController.login);
router.post('/update-profile', authMiddleware, userController.updateProfile);
router.post('/change-password', authMiddleware, userController.changePassword);
router.get('/get-profile', authMiddleware, userController.getProfile);

module.exports = router;