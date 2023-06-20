const Player = require("../models/player.model")

module.exports.index = (req,res)=>{
    res.json({message:"Hello World"})
}
module.exports.getAllPlayers =(req,res)=>{
    Player.find()
    .then((allPlayers)=>res.json({result:allPlayers}))
    .catch((err)=>res.json(err));
}
module.exports.getOnePlayer = (req,res) =>{
    Player.findOne({_id:req.params.id})
    .then((onePlayer)=>res.json({result:onePlayer}))
    .catch((err)=>res.json(err));
}
module.exports.createPlayer = (req,res)=>{
    Player.create(req.body)
    .then((newPlayer)=>res.json({Player:newPlayer}))
    .catch((err)=>res.json(err));
}
module.exports.updatePlayer = (req,res)=>{
    Player.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then((updatedPlayer)=>res.json({Player:updatedPlayer}))
    .catch((err)=>res.json(err));
}
module.exports.deletePlayer = (req,res)=>{
    Player.deleteOne({_id:req.params.id})
    .then((result)=>res.json({result:result}))
    .catch((err)=>res.json(err));
}