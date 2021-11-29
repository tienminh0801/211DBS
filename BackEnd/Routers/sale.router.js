const express = require('express');
const router = express.Router();
const saleController = require('../Controllers/sale.controller')

router.get('/', saleController.getAll)

module.exports = router;