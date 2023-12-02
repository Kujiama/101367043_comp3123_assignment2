const express = require('express');
const router = express.Router();

// Import employee schema
const Employee = require("../models/Employee");

//Get all employees
router.get("/emp/employees", async (req,res) => {
    
    try{
        const employees = await Employee.find() // find all employees 
        res.status(200).json(employees);
    }catch(e){
        res.status(500).json({message:e.message});
    }

});

/*
    Adding Employee Request Payload: 
        { 
            "firstName": "Tam",
            "lastName": "Harrow",
            "email":tam@example.com,
            "gender":"Female",
            "salary":125000.00
        }
*/
router.post("/emp/employees", async (req,res) => {
    
    try{
        //destructure emp info
        const {firstName,lastName,email,gender,salary} = req.body;
        const validGenders = ["male","female","other"];

        if(!validGenders.includes(req.body.gender.toLowerCase())){
            res.status(400).json({message:`Gender must be one of the following: ${validGenders}`})
        }else{
            const newEmp = new Employee({
                firstName:firstName,
                lastName:lastName,
                email:email,
                gender:gender,
                salary:salary
            });
    
            let savedEmp = await newEmp.save(); // save employee to database
            let msg = {message:`Employee ${firstName} ${lastName} has been added`, EmployeeDetails:savedEmp}
    
            res.status(201).json(msg)
        }

    }catch(e){
        res.status(500).json({message:`There is a problem with adding new employee`});
    }
});

// get specific employee
router.get("/emp/employees/:eid", async (req,res) => {
    const empId = req.params.eid;

    try{
        const employee = await Employee.findById(empId)
        if(!employee){
            res.status(404).json({message:`Employee:${empId} does not exist`})
        }else{
            // display emp info
            res.status(200).json(employee);
        }
        
    }catch(e){
        res.status(500).json({message:e.message})
    }
});

// update employee
router.put("/emp/employees/:eid" , async (req,res) => {

    const validGenders = ["male","female","other"];
    const empId = req.params.eid;
    try{
        if(!validGenders.includes(req.body.gender.toLowerCase())){
            res.status(400).json({message:`Gender must be one of the following: ${validGenders}`})
        }else{
            const employee = await Employee.findByIdAndUpdate(empId,req.body)
            res.status(200)
            .json({
                message:`employee ${empId} information has been updated`,
                Prev_Details: employee
            })
        }
    }catch(e){
        res.status(500).json({message:`There was trouble editing employee:${empId}`})
    }
});

/* 
    using string query delete employee
    /emp/remove/employee?eid=
*/
router.delete("/emp/remove/employee" , async (req,res) => {

    const empId = req.query.eid;
    try{
        // find employee and delete
        await Employee.findOneAndDelete({_id:empId});
        res.status(204).json();
    }catch(e){
        res.status(500).json({message:`There was trouble deleting employee with id:${empId}`})
    }

});


module.exports = router;