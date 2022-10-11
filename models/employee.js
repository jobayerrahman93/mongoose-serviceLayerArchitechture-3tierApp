const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const {Schema}=mongoose;

const employeeSchema = new Schema({
    name: {
      type: String,
      required: true
    }, 
    designation: {
      type: String,
      required: true
    },
    about: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    presentAddress: {
      type: String,
      required: true
    },
    permanentAddress: {
      type: String,
      required: true
    },
  },Timestamp);


//   model

  const Employee = mongoose.model('Employee', employeeSchema);

  module.exports=Employee;