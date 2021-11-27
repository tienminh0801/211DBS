const express = require('express');
const router = express.Router();
const factoryController = require('../Controllers/manufactory.controller')


router.get('/', factoryController.getAll)

module.exports = router;