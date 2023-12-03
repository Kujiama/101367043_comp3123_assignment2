const mongoose = require("mongoose");

var EmployeeSchema = new mongoose.Schema({

    firstName: {type:String,maxLength:100,required: true},
    lastName:{type: String,maxLength:50,required: true},
    email:{type: String,maxLength:50,required: true,unique:true},
    // password: {type: String,maxLength:50, required: true,encrypted:true},
        
});

module.exports = mongoose.model("Employee", EmployeeSchema);