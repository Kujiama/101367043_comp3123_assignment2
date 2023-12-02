const mongoose = require("mongoose");

var EmployeeSchema = new mongoose.Schema({

    firstName: {type:String,maxLength:100,required: true},
    lastName:{type: String,maxLength:50,required: true},
    email:{type: String,maxLength:50,required: true,unique:true},

    //enum is used to restrict the values of the field
    gender:{type: String,maxLength:25,lowercase:true,required: true,enum:["male","female","other"]},
    
    password: {type: String,maxLength:50, required: true,encrypted:true},

    salary:{type: Number,required: true}
    
});

module.exports = mongoose.model("Employee", EmployeeSchema);