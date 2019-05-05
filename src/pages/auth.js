import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login, logout } from "../reducers/auth.redux";
import axios from "axios";

@connect(
  state => ({ auth: state.auth }),
  { login, logout }
)
class Auth extends React.Component {
  componentDidMount() {
    axios.get("/data").then(res => {
      console.log(res);
    });
  }
  render() {
    console.log("auth", this.props);
    return (
      <div>
        {this.props.auth.isAuth ? (
          <Redirect to="/dashbord" />
        ) : (
          <h2>你没有权限，需要登录才能查看</h2>
        )}
        <button onClick={this.props.login}>登录</button>
      </div>
    );
  }
}
export default Auth;
