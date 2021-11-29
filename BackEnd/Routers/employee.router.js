const express = require('express');
const router = express.Router();
const employeeController = require('../Controllers/employee.controller')


router.get('/', employeeController.getAll)
router.get('/:id', employeeController.getByCccd)
router.get('/mgr', employeeController.getMgr)
router.get('/search/:id', employeeController.searchEmployee)
router.post('/remove/:id', employeeController.removeEmployee)
router.post('/:id', employeeController.updateEmployee)
router.post('/', employeeController.insertEmployee)
module.exports = router;