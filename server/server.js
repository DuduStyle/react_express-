const express = require("express");
const mongoose = require("mongoose");
// 连接
mongoose.connect("mongodb://localhost:27017/?gssapiServiceName=mongodb");

const con = mongoose.connection;
con.on("connected", function() {
  console.log("mongo connect success");
});
const User = mongoose.model(
  "user",
  new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
  })
);
User.create(
  {
    user: "张乐",
    age: 18
  },
  function(err, doc) {
    if (!err) {
      console.log(doc);
    } else {
      console.log(err);
    }
  }
);
User.remove({ age: 18 }, function(err, doc) {
  console.log(doc);
});
const app = express();
app.get("/data", function(req, res) {
  User.find({}, function(err, doc) {
    res.json(doc);
  });
  // res.send("<h1>hello world222</h1>");
});
app.get("/del", function(req, res) {
  User.find({}, function(err, doc) {
    res.json(doc);
  });
  // res.send("<h1>hello world222</h1>");
});
app.listen(9093, function() {
  console.log("Node app start at port 9093");
});
