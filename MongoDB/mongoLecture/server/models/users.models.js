const mongoose = require("mongoose");

const UserSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First name is required."],
        minlength:[3,"First name must be at least 3 characters long."]
    },
    lastName:{
        type:String,
        required:[true,"Last name is required."],
        maxlength:[100,"Last name can only be at most 100 characters."]
    },
    age:{
        type:Number,
        min:[13,"You must be 13 years or older to register."],
        max:[29,"You must be under 30 years old to register."]
    }
},{timestamps:true})

const Users = mongoose.model("Users",UserSchema);

module.exports = Users;