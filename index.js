const express = require("express");
const app = express();
const userroutes=require("./routes/user")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongo connected "))
  .catch((err) => console.log(err));
  app.use("/api",userroutes)
app.listen(3000, () => {
  console.log("backend connected");
});
