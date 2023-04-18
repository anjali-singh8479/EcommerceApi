const mongoose=require("mongoose")

const userschema= new mongoose.Schema({
    username:{
  type:String,
  require:true,
  unique:true
    },
    email:{
type:String,
require:true,
unique:true
    },
    password:{
        type:String,
        require:true,
     
        min:6
    },
    isadmin:{
        type:Boolean,
        default:false,
    }
},
{timestamps:true}
)
module.exports=mongoose.model("User",userschema)