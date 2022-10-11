const Employee = require('../models/employee');


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
    
    saveEmployee
}