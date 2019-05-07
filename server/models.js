const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb"; // 连接
mongoose.connect(DB_URL);
const con = mongoose.connection;
con.on("connected", function() {
  console.log("mongo connect success");
});
const models = {
  user: {
    user: { type: String, require: true },
    pwd: { type: String, require: true },
    type: { type: String, require: true },
    avatar: { type: String },
    // 个人简介或者职位简介
    desc: { type: String },
    // 职位名
    title: { type: String },
    compony: { type: String },
    money: { type: String }
  }
};

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}
module.exports = {
  getModel: function(name) {
    return mongoose.model(name);
  }
};
