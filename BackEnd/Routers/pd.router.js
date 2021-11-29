const express = require('express');
const router = express.Router();
const pdController = require('../Controllers/pd.controller')

router.get('/:id', pdController.getAllByOrderName)
router.get('/getPd/:id', pdController.getBySeri)
router.get('/', pdController.getAllInStock)
router.post('/:id', pdController.updateProductOrder)
router.post('/delete/:id', pdController.deleleProductOrder)

module.exports = router;