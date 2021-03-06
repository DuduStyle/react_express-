import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { userinfo } from "../../reducers/user.redux";
import { connect } from "react-redux";

@withRouter
@connect(
  null,
  { userinfo }
)
class AuthRouter extends Component {
  componentDidMount() {
    const publicList = ["/login", "/register"];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) > -1) {
      return null;
    }
    // 获取用户信息
    axios.get("/user/info").then(res => {
      if (res.status === 200) {
        console.log(res);
        if (res.data.code === 0) {
          // 有登陆信息
          this.props.userinfo(res.data.data);
        } else {
          console.log(this.props.history);
          this.props.history.push("/login");
        }
      }
    });
  }
  render() {
    return <div>我是路由监控</div>;
  }
}
export default AuthRouter;
