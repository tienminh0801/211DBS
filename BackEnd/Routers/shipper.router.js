const express = require('express');
const router = express.Router();
const shipperController = require('../Controllers/shipper.controller')

router.get('/', shipperController.getAll)

module.exports = router;