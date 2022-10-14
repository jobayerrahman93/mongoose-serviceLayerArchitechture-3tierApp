const Employee = require('../models/employee');

const getEmployeeService=async()=>{
    const result = await Employee.find({});
    return result
}
const createEmployeeService=async(data)=>{
    const employee = new Employee(data);
    await employee.save();

}





module.exports={
    getEmployeeService,
    createEmployeeService
}