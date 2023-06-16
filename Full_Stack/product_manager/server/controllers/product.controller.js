const Product = require("../models/product.model")

module.exports.index = (req,res)=>{
    res.json({message:"Hello World"})
}
module.exports.getAllProducts =(req,res)=>{
    Product.find()
    .then((allProducts)=>res.json({result:allProducts}))
    .catch((err)=>res.json(err));
}
module.exports.getOneProduct = (req,res) =>{
    Product.findOne({_id:req.params.id})
    .then((oneProduct)=>res.json({result:oneProduct}))
    .catch((err)=>res.json(err));
}
module.exports.createProduct = (req,res)=>{
    Product.create(req.body)
    .then((newProduct)=>res.json({Product:newProduct}))
    .catch((err)=>res.json(err));
}
module.exports.updateProduct = (req,res)=>{
    Product.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then((updatedProduct)=>res.json({Product:updatedProduct}))
    .catch((err)=>res.json(err));
}
module.exports.deleteProduct = (req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then((result)=>res.json({result:result}))
    .catch((err)=>res.json(err));
}