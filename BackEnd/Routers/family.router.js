const express = require('express');
const router = express.Router();
const familyController = require('../Controllers/family.controller')


router.get('/', familyController.getAll)

module.exports = router;