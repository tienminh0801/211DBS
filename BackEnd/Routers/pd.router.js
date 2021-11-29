const express = require('express');
const router = express.Router();
const pdController = require('../Controllers/pd.controller')

router.get('/:id', pdController.getAllByOrderName)

module.exports = router;