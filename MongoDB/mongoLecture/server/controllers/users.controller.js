const User = require("../models/users.models")

module.exports.apiTest = (req,res) =>{
    res.json({message:"Hello World!"})
}

module.exports.findAllUsers = (req,res)=>{
    User.find()
    .then((allUserData)=>res.json({users:allUserData}))
    .catch((err)=>res.json(err));
}

module.exports.fineOneSingleUser = (req,res)=>{
    User.findOne({_id:req.params.id})
    .then((oneSingleUser)=>res.json({user:oneSingleUser}))
    .catch((err)=>res.json(err));
}

module.exports.createNewUser =(req,res)=>{
    User.create(req.body)
    .then((newlyCreatedUser)=>res.json({user:newlyCreatedUser}))
    .catch((err)=>res.json(err));
}

module.exports.updateExistingUser =(req,res)=>{
    User.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then((updatedUser)=>res.json({user:updatedUser}))
    .catch((err)=>res.json(err));
}

module.exports.deleteAnExistingUser = (req,res)=>{
    User.deleteOne({_id:req.params.id})
    .then((result)=>res.json({result:result}))
    .catch((err)=>res.json(err))
}