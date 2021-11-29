const express = require('express');
const router = express.Router();
const duocxulyController = require('../Controllers/duocxuly.controller')

router.get('/:id', duocxulyController.getByName)
router.post('/:id', duocxulyController.insertOne)
router.post('/update/:id', duocxulyController.updateOne)
module.exports = router;