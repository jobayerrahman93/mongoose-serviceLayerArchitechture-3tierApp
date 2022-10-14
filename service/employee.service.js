const Employee = require('../models/employee');

const getEmployeeService=async()=>{
    const result = await Employee.find({});
    return result
}





module.exports={
    getEmployeeService
}