const express = require("express");
const utils = require("utility");
const Router = express.Router();

const models = require("./models");
const User = models.getModel("user");
const _filter = { pwd: 0, _v: 0 };

Router.get("/list", function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc);
  });
});
Router.get("/info", function(req, res) {
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({ code: 1 });
  }
  User.findOne({ _id: userid }, function(e, d) {
    if (e) {
      return res.json({ code: 1, msg: "出错了" });
    } else {
      return res.json({ code: 0, data: d });
    }
  });
});
Router.post("/login", function(req, res) {
  const { user, pwd } = req.body;
  User.findOne({ user, pwd: utils.md5(pwd) }, _filter, function(e, d) {
    if (!d) {
      return res.json({ code: 1, msg: "用户名或者密码错误" });
    }
    res.cookie("userid", d._id);
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
    const userModal = new User({ user, pwd: utils.md5(pwd) });
    userModal.save(function(e, d) {
      if (e) {
        return res.json({ code: 1, msg: "后端出错误" });
      }
      const { user, type, _id } = d;
      res.cookie("userid", d._id);
      return res.json({ code: 0, data: { user, type, _id } });
    });
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
