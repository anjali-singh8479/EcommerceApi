const { verifyAndAuthorization ,verifyAndAdmin, verifytoken} = require("./verifyToken");
const order=require("../models/Order")
const cryptoJS=require("crypto-js")
const router = require("express").Router();

//create order
router.post("/order",async(req,res)=>{
   const neworder= await new order(req.body)
   const savedorder= await neworder.save()
   try{
    res.status(200).json({
        success:true,
        message:"order created",
        savedorder
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
router.put("/updateorder/:id",verifyAndAdmin,async(req,res)=>{
   
   try{
    const updatedorder= await order.findByIdAndUpdate(req.params.id,
        {$set:req.body},{new:true})
    if(!updatedorder){
        res.status(400).json({
            success:false,
            message:"order not found"
        })
    }
    else{
       res.status(200).json({
        success:true,
        message:"order updated successfully",
        updatedorder
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
//delete order
router.delete("/deleteorder/:id",verifyAndAdmin,async(req,res)=>{
    try{
     await order.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"order deleted successfully"
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
        const foundorder= await order.findOne({userid:req.params.id})
     if(!foundorder){
       res.status(400).json({
        success:false,
        message:"order not found"
       })
     }
     else{
        res.status(200).json({ 
            success:true,
            message:"order found",
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
//get all orders
router.get("/allorders",verifyAndAdmin,async (req,res)=>{
    try{
     const orders=await order.find()
     res.status(200).json({
        success:true,
        orders
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
