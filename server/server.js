const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./user");
// const DB_URL = "mongodb://localhost:27017/?gssapiServiceName=mongodb";

// const con = mongoose.connection;
// con.on("connected", function() {
//   console.log("mongo connect success");
// });

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", userRouter);

app.listen(9093, function() {
  console.log("Node app start at port 9093");
});
