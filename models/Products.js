const mongoose=require("mongoose")

const productschema= new mongoose.Schema({
    title:{
  type:String,
  require:true,
  unique:true
    },
    description:{
type:String,
require:true,

    },
    img:{
type:String,
require:true
    },
    categories:{
        type:Array,
       
    },
    color:{
        type:String
    },
    size:{
 type:String
    },
    price:{
 type:Number,
 require:true
},
}
)
module.exports=mongoose.model("Product",productschema)