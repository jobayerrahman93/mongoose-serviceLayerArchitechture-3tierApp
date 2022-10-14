const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const {Schema}=mongoose;

const commonType={
    type: String,
    required: true
  }


const employeeSchema = new Schema({
    name: commonType, 
    designation: commonType,
    about:commonType,
    salary: commonType,
    presentAddress: commonType,
    permanentAddress: commonType,
  },Timestamp);


//   model

  const Employee = mongoose.model('Employee', employeeSchema);

  module.exports=Employee;