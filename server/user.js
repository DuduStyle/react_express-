const express = require("express");
const utils = require("utility");
const Router = express.Router();

const models = require("./models");
const User = models.getModel("user");

Router.get("/list", function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc);
  });
});
Router.get("/info", function(req, res) {
  return res.json({ code: 1 });
});
Router.post("/login", function(req, res) {
  const { user, pwd } = req.body;
  User.findOne({ user, pwd: utils.md5(pwd) }, { pwd: 0 }, function(e, d) {
    if (!d) {
      return res.json({ code: 1, msg: "用户名或者密码错误" });
    }
    return res.json({ code: 0, data: d });
  });
});
Router.post("/register", function(req, res) {
  // console.log("沃基区到了", req.body);
  const { user, pwd, type } = req.body;
  User.findOne({ user }, function(err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: "用户名重复" });
    }
    User.create({ user, pwd: utils.md5(pwd), type }, function(e, d) {
      if (e) {
        return res.json({ code: 1, msg: "后端出错误" });
      }
      return res.json({ code: 0 });
    });
  });
  // res.send("Got a POST request");
});
module.exports = Router;
