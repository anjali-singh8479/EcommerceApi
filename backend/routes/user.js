const { verifyAndAuthorization ,verifyAndAdmin} = require("./verifyToken");
const user=require("../models/User")
const cryptoJS=require("crypto-js")
const router = require("express").Router();

//update user
router.put("/:id",async(req,res)=>{
    if(req.body.password){
        const hashedpassword= cryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET).toString()
        req.body.password=hashedpassword
    }
    try{
        const updateduser= await user.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json({
            success:true,
            updateduser
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
})
//delete user
router.delete("/:id",verifyAndAuthorization,async(req,res)=>{
    try{
     await user.findByIdAndDelete(req.params.id)
     res.status(200).json({
        success:true,
        message:"user deleted successfully"
     })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})

//get user
router.get("/find/:id",verifyAndAdmin,async(req,res)=>{
    const getuser= await user.findById(req.params.id)
    try{
        const{password,...others}= await getuser._doc
        res.status(200).json({
            success:true,
            others
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:"user not found"
        })
    }
})
router.get("/",async (req,res)=>{
    const users=await user.find()
    res.status(200).json(users)
})
module.exports = router;
