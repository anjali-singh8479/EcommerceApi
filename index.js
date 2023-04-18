const express = require("express");
const app = express();
const userroutes=require("./routes/user")
const authroutes=require("./routes/auth")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongo connected "))
  .catch((err) => console.log(err));
  app.use(express.json())
  app.use("/api",userroutes)
  app.use("/api/auth",authroutes)
app.listen(5000, () => {
  console.log("backend connected");
});
