const router=require("express").Router()
const stripe=require("stripe")(process.env.STRIPE_SECRET)
router.post("/payment",(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenid,
        amount:req.body.amount,
        currency:"usd"
    },(stripeerr,striperes)=>{
        if(err){
            res.status(500).json(stripeerr)
           
        }
        else{
             res.status(200).json(striperes)   
        }
    })
})