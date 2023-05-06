const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const cors=require("cors")
const userroutes=require("./routes/user")
const authroutes=require("./routes/auth")
const productroutes=require("./routes/product")
const orderroutes=require("./routes/order")
const cartroutes=require("../BACKEND/routes/cart")
const striperoutes=require("./routes/stripe")




// app.use(cors())
app.use(express.json())
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongo connected "))
  .catch((err) => console.log(err));
  
 
  
  app.use("/api/user",userroutes)
  app.use("/api/auth",authroutes)
  app.use("/api/products",productroutes)
  app.use("/api/orders",orderroutes)
  app.use("/api/carts",cartroutes)
  app.use("api/checkout",striperoutes)
app.listen(5000, () => {
  console.log("backend connected");
});
