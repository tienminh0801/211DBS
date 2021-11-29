const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/order.controller')

router.get('/', orderController.getAll)
router.get('/:id', orderController.getByName)
router.post('/', orderController.insertOrder)
router.post('/remove/:id', orderController.removeOrder)
router.post('/:id', orderController.updateOrder)
router.get('/search/:id', orderController.searchOrder)


module.exports = router;