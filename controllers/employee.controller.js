const Employee = require('../models/employee');
const { getEmployeeService } = require('../service/employee.service');


const getAllEmployee=async(req,res)=>{

   try {
    const result = await getEmployeeService();
    console.log(result);
    res.status(200).json({
        success:true,
        data:result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message: 'Data is not getting',
        error: err.message
    })
   }
}
const saveEmployee=async(req,res)=>{
  
    try {


const employee = new Employee(req.body);
await employee.save();

    res.status(200).json({
        success:true,
        message:`Successfully data inserted`
    })
    
    
    } catch (err) {

        res.status(400).json({
            success: false,
            message: 'Data is not saved properly',
            error: err.message
        })
        
    }

}




module.exports ={
    getAllEmployee,
    saveEmployee
}