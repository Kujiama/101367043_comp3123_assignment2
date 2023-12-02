const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String,maxLength:100, required: true,primarykey:true},
    email:{type: String,maxLength:50, required: true,unique:true},
    password: {type: String,maxLength:50, required: true,encrypted:true}
});

module.exports = mongoose.model("User", UserSchema);