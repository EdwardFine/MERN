const Song = require('../models/songs.model')

module.exports.getAllSongs =(req,res)=>{
    Song.find()
    .then((allSongs)=>res.json({result:allSongs}))
    .catch((err)=>res.json(err));
}
module.exports.getOneSong = (req,res) =>{
    Song.findOne({_id:req.params.id})
    .then((oneSong)=>res.json({result:oneSong}))
    .catch((err)=>res.json(err));
}
module.exports.createSong = (req,res)=>{
    Song.create(req.body)
    .then((newSong)=>res.json({song:newSong}))
    .catch((err)=>res.json(err));
}
module.exports.updateSong = (req,res)=>{
    Song.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then((updatedSong)=>res.json({Song:updatedSong}))
    .catch((err)=>res.json(err));
}
module.exports.deleteSong = (req,res)=>{
    Song.deleteOne({_id:req.params.id})
    .then((result)=>res.json({result:result}))
    .catch((err)=>res.json(err));
}