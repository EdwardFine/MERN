const Author = require("../models/author.model")

module.exports.index = (req,res)=>{
    res.json({message:"Hello World"})
}
module.exports.getAllAuthors =(req,res)=>{
    Author.find().sort({name:1})
    .then((allAuthors)=>res.json({result:allAuthors}))
    .catch((err)=>res.json(err));
}
module.exports.getOneAuthor = (req,res) =>{
    Author.findOne({_id:req.params.id})
    .then((oneAuthor)=>res.json({result:oneAuthor}))
    .catch((err)=>res.json(err));
}
module.exports.createAuthor = (req,res)=>{
    Author.create(req.body)
    .then((newAuthor)=>res.json({Author:newAuthor}))
    .catch((err)=>res.json(err));
}
module.exports.updateAuthor = (req,res)=>{
    Author.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then((updatedAuthor)=>res.json({Author:updatedAuthor}))
    .catch((err)=>res.json(err));
}
module.exports.deleteAuthor = (req,res)=>{
    Author.deleteOne({_id:req.params.id})
    .then((result)=>res.json({result:result}))
    .catch((err)=>res.json(err));
}