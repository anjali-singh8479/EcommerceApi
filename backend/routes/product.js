const { verifyAndAuthorization ,verifyAndAdmin, verifytoken} = require("./verifyToken");
const product=require("../models/Products")
const cryptoJS=require("crypto-js")
const router = require("express").Router();

//create product
router.post("/product",verifyAndAdmin,async(req,res)=>{
   const newproduct= await new product(req.body)
   const savedproduct= await newproduct.save()
   try{
    res.status(200).json({
        success:true,
        message:"product created",
        savedproduct
    })
   }
   catch(err){
    res.status(500).json({
        success:true,
        message:err.message
    })
   }
})
//update product
router.put("updateproduct/:id",verifyAndAdmin,async(req,res)=>{
   const updatedproduct= await product.findByIdAndUpdate(req.params.id,
   {$set:req.body},{new:true})
   try{
    if(!updatedproduct){
        res.status(400).json({
            success:false,
            message:"product not found"
        })
    }
    else{
       res.status(200).json({
        success:true,
        message:"product updated successfully",
        updatedproduct
       })
    }
   }
   catch(err){
   res.status(500).json({
    success:false,
    message:err.message
   })
   }
})
//delete product
router.delete("/deleteproduct/:id",async(req,res)=>{
   try{
    await product.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"product deleted successfully"
    })
   }
   catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    
    })
   }
})

//get product
router.get("/find/:id",async(req,res)=>{
   
    try{
        const foundproduct= await product.findById(req.params.id)
     if(!foundproduct){
       res.status(400).json({
        success:false,
        message:"product not found"
       })
     }
     else{
        res.status(200).json({
            success:true,
            message:"product found",
            foundproduct
        })
     }
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})
//get all products 
router.get("/allproducts",async (req,res)=>{
    const qnew=req.query.new
    const qcategory=req.query.category
    if(qnew){
        const foundproduct=await product.find().sort({created_At:-1}).limit(5)
        res.status(200).json({
            success:true,
            foundproduct
        })
    }
    else if(qcategory){
        const foundproduct=await product.find({categories:{$in:[qcategory]}})
        res.status(200).json({
            success:true,
            foundproduct
        })
    }
    else{
        const foundproduct=await product.find()
        res.status(200).json({
            success:true,
            foundproduct
        })
    }
})
module.exports = router;
