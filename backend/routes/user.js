const express = require("express");
const router = express.Router();


const User = require("../models/User")

/*
    password hashing: (other way to make password secure)
    const bcrypt = require('bcrypt');  
*/

/*
    signup Request Payload: 
        { 
            "username": "test1",
            "email": "test1@gmail.com",
            "password": "password1" 
        }
*/
router.post("/user/signup" , async (req,res) => {
    
    try{
        // destructure from req.body object
        const {username,email,password} = req.body;
        
        // hash the password (option but make maxLength to 100 for password)
        // const hashedPwd = await bcrypt.hash(password,10);

        // create a new user
        const newUser = new User({
            username:username,
            email:email,
            password:password
        });

        // save the user to the database c
        const user = await newUser.save();
        
        //return msg to show success of adding user
        res.status(201).json(user)
        
    }catch(e){
        res.status(500).json({message:e.message})
    }

});


/*
    Login Request Payload: 
        { 
            "username": "test1",
            "password": "password1" 
        }
*/
router.post("/user/login", async (req,res) => {
    try{
        // destructure to get user and password from req.body object
        const {username,password} = req.body;

        //look for user with the username
        const user = await User.findOne({username:username});

        // const hashedPwd = await bcrypt.hash("password1",10);
        // const samePwd = await bcrypt.compare(password,user.password);

        // if user uses username or email to login
        if(username === user.username && password === user.password){
            res.status(200).json(
                {
                    "status":true,
                    "username":username,
                    "message":`User ${username}! logged in successfully`
                }
            );
        }else{
            res.status(401).json(
                {
                    "status":false,
                    "message":`Invalid username or password`
                }
            );
        }
        
    }catch(e){
        res.status(500).json({message:e.message})
    }
   
});


//exporting express router
module.exports = router;