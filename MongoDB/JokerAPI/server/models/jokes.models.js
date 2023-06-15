const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true,"A joke needs a setup."]
    },
    punchline:{
        type:String,
        requried:[true, "A joke needs a punchline."]
    }
},{timestamps:true})

const Joke = mongoose.model("Jokes",JokesSchema);

module.exports = Joke;