const express = require('express');
const router = express.Router();
const domainController = require('../controllers/domainController');

router.get('/is-domain-active', domainController.isDomainActive);

module.exports = router;