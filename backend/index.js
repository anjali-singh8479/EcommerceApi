const express = require("express");
const app = express();
const cors=require("cors")
const userroutes=require("./routes/user")
const authroutes=require("./routes/auth")
const productroutes=require("../BACKEND/routes/product")
const orderroutes=require("./routes/order")
const cartroutes=require("../BACKEND/routes/cart")
const striperoutes=require("../BACKEND/routes/stripe")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongo connected "))
  .catch((err) => console.log(err));
  app.use(cors())
  app.use(express.json())
  
  app.use("/api",userroutes)
  app.use("/api/auth",authroutes)
  app.use("/api/products",productroutes)
  app.use("/api/orders",orderroutes)
  app.use("/api/carts",cartroutes)
  app.use("api/checkout",striperoutes)
app.listen(5000, () => {
  console.log("backend connected");
});
