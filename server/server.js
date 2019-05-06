const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./user");
const DB_URL = "mongodb://localhost:27017/?gssapiServiceName=mongodb";
// 连接
mongoose.connect(DB_URL);

const con = mongoose.connection;
con.on("connected", function() {
  console.log("mongo connect success");
});

const app = express();

app.use("/user", userRouter);

app.listen(9093, function() {
  console.log("Node app start at port 9093");
});
