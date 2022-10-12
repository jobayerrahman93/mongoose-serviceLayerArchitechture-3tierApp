const { getAllEmployee, saveEmployee } = require('../../controllers/employee.controller');

const router = require('express').Router();


router
.route('/')
.get(getAllEmployee)
.post(saveEmployee)











module.exports = router;