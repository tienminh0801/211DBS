const express = require('express');
const router = express.Router();
const productController = require('../Controllers/product.controller')

router.get('/:id', productController.getByName)
router.get('/', productController.getAll)
router.get('/search/:id', productController.searchProduct)
router.post('/remove/:id', productController.removeProduct)
router.post('/:id', productController.updateProduct)
router.post('/', productController.insertProduct)

module.exports = router;