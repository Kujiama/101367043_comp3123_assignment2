const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:{type: String,maxLength:50, required: true,unique:true},
    password: {type: String,maxLength:100, required: true,encrypted:true}
});

module.exports = mongoose.model("User", UserSchema);