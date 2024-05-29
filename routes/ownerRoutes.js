const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');

router.put('/update-user', ownerController.updateUser);
module.exports = router;