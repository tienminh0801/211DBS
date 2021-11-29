const express = require('express');
const router = express.Router();
const branchController = require('../Controllers/branch.controller')


router.get('/', branchController.getAll)
module.exports = router;