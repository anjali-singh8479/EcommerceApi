const mongoose=require("mongoose")

const orderschema= new mongoose.Schema({
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
   ],
   amount:{
    type:Number,
    require:true
   },
   Address:{
    type:Object
   },
status:{
    type:String,
    default:"pending"
}
},
{timestamps:true}
)
module.exports=mongoose.model("Order",orderschema)