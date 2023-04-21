const { verifyAndAuthorization ,verifyAndAdmin, verifytoken} = require("./verifyToken");
const cart=require("../models/Cart")
const cryptoJS=require("crypto-js")
const router = require("express").Router();

//create cart
router.post("/cart",verifytoken,async(req,res)=>{
   const newcart= await new cart(req.body)
   const savedcart= await newcart.save()
   try{
    res.status(200).json({
        success:true,
        message:"product created",
        savedcart
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
router.put("updatecart/:id",verifyAndAuthorization,async(req,res)=>{
   const updatedcart= await cart.findByIdAndUpdate(req.params.id,
   {$set:req.body},{new:true})
   try{
    if(!updatedcart){
        res.status(400).json({
            success:false,
            message:"cart not found"
        })
    }
    else{
       res.status(200).json({
        success:true,
        message:"cart updated successfully",
        updatedcart
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
//delete cart
router.delete("/deleteproduct/:id" ,async(req,res)=>{
    try{
     await cart.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"cart deleted successfully"
    })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})
//get cart
router.get("/find/:userid",async(req,res)=>{
   
    try{
        const foundcart= await cart.findOne({userid:req.params.id})
     if(!foundcart){
       res.status(400).json({
        success:false,
        message:"cart not found"
       })
     }
     else{
        res.status(200).json({ 
            success:true,
            message:"cart found",
            foundcart
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
//get all carts
router.get("/allcarts",async (req,res)=>{
    try{
     const carts=await cart.find()
     res.status(200).json({
        success:true,
        carts
     })
    }
    catch(err){
        res.status(500).json({
            succes:false,
            message:err.message
        })
    }
})
module.exports = router;
