const router = require("express").Router();
const user = require("../models/User");
const bcrypt = require("bcrypt");
const cryptoJS=require("crypto-js")
const dotenv=require("dotenv")
const jwt=require("jsonwebtoken")
//register
router.post("/register", async (req, res) => {
  try {
    const newuser =new user({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      isadmin:req.body.isadmin
    });
 const hashedpassword= await cryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET)
    newuser.password=hashedpassword;
    const saveduser= await newuser.save();
   
    // const salt = await bcrypt.genSalt(10);
    // const hashedpassword = await bcrypt.hash(req.body.password, salt);
    // newuser.password = hashedpassword;
    // const saveduser = await newuser.save();
    res.status(200).json({
      success: true,
      message: "registered",
      saveduser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//login
router.post("/login",async(req,res)=>{
    try{
    const loginuser= await user.findOne({username:req.body.username})
    if(!loginuser){
     res.status(400).json({
        success:false,
        message:"user not registered"
     })
    }
    else
   {
    const hashedpassword=cryptoJS.AES.decrypt(loginuser.password,process.env.PASSWORD_SECRET)
    const originalpassword=hashedpassword.toString(cryptoJS.enc.Utf8)
    if(originalpassword!==req.body.password){
     res.status(400).json({
        success:false,
        message:"incorrect password"
     })
    }
    else{
        const accesstoken=jwt.sign({
            id:loginuser._id,
            isadmin:loginuser.isadmin
        },process.env.JWT_SECRET,
        {expiresIn:"3d"})
        const {password,...others}=loginuser._doc 
        res.status(200).json({
            success:true,
            message:"user loggedin successfully",
            ...others,accesstoken
            
        })
    }
    // const validuser=await bcrypt.compare(req.body.password,loginuser.password)
    // if( !validuser){
    // res.status(400).json({
    //     success:false,
    //     message:"incorrect password"
    // })
    // }
    // else{
    //     const{password , ...others }=loginuser._doc
    //     res.status(200).json({
    //         success:true,
    //         message:"user logged in",
    //       others
    //     })
    // }
   }
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})
module.exports = router;
