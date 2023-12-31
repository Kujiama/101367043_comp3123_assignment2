const express = require("express");
const router = express.Router();


const User = require("../models/User")


/*
    signup Request Payload: 
        { 
            "email": "test1@gmail.com",
            "password": "password1" 
        }
*/
router.post("/user/signup" , async (req,res) => {
    
    try{
        // destructure from req.body object
        const {email,password} = req.body;

        // create a new user
        const newUser = new User({
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
        const {email,password} = req.body;

        //look for user with the username
        const user = await User.findOne({email:email});

        //user check password from db and hashed password from req.body
        const samePwd = (password === user.password)?true:false;

        // if user uses username or email to login
        if(email === user.email && samePwd){
            res.status(200).json(
                {
                    "status":true,
                    "username":email,
                    "message":`User ${email}! logged in successfully`
                }
            );
        }else{
            res.status(401).json(
                {
                    "status":false,
                    "message":`Invalid email or password`
                }
            );
        }
        
    }catch(e){
        res.status(500).json({message:e.message})
    }
   
});


//exporting express router
module.exports = router;