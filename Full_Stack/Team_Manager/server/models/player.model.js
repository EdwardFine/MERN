const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    position:{
        type:String,
        required:[true,"Position is required"]
    },
    games:{
        type:Object,
        1:{
            type:Number
        },
        2:{
            type:Number
        },
        3:{
            type:Number
        }
    }
},{timestamps:true})

const Player = mongoose.model("Players",playerSchema);

module.exports = Player;