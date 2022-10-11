const { getAllEmployee } = require('../../controllers/employee.controller');

const router = require('express').Router();


router
.route('/')
.get(getAllEmployee);











module.exports = router;