const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Author Name is Required"],
        minlength:[3,"Author Name must be at least 3 characters."]
    }
},{timestamps:true})

const Author = mongoose.model("Authors",authorSchema);

module.exports = Author;