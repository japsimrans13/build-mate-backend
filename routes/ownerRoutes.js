const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');


// Staff routes
router.post('/create-staff', ownerController.createStaff);
router.get('/get-staff', ownerController.getStaff);

// Client routes
router.post('/create-client', ownerController.createClient);
router.get('/get-clients', ownerController.getClients);

// Project routes
router.post('/create-project', ownerController.crateProject);
router.get('/get-projects', ownerController.getProjects);
module.exports = router;