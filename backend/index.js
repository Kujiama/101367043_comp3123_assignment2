const express = require('express');
const cors = require('cors');

const app = express();
const SERVER_PORT = 8484;

//.env file access
require('dotenv').config();


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//connecting to mongodb
const mongoose = require("mongoose");

// Enter your own mongodb connection string MONGODB_URI
const  DB_CONNECTION_STRING = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ehf8jjp.mongodb.net/F2023_comp3123_assignment2?retryWrites=true&w=majority`;

mongoose.connect(DB_CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("connected",()=>{
    console.log("Mongoose is connected");
},"error", (error)=>{
    console.log(error);
});



//home route
app.get("/",(req,res)=>{
    res.send("<h1>Assignment 2 - Backend</h1>");
});



//creating each Router to be used
const userRouter = require("./routes/user");
const empRouter =require("./routes/employee");


//using each router
app.use("/api/v1",userRouter);
app.use("/api/v1",empRouter)




app.listen(SERVER_PORT , () =>{
    console.log(`Server is running at http://localhost:${SERVER_PORT}`);
});