const mongoose=require("mongoose")

const cartschema= new mongoose.Schema({
    userid:{
type:String,
require:true
    },
    description:{
type:String,
require:true,

    },
   products:[
    {
        productid:{
            type:String,
            required:true
        },
        quantity:{
type:Number,
default:1
        }
    }
   ]
}
)
module.exports=mongoose.model("Cart",cartschema)