import React, { Component } from "react";
import { Button } from "antd-mobile";
import { createForm } from "rc-form";
import { List, InputItem, WhiteSpace } from "antd-mobile";
import { connect } from "react-redux";
import { login } from "../../reducers/user.redux";

@createForm()
@connect(
  state => state.user,
  { login }
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: ""
    };
  }
  submit = () => {
    console.log(this.props);
    this.props.form.validateFields((err, value) => {
      console.log(value);
      this.props.login({ ...value });
    });
  };
  render() {
    const {
      isAuth,
      msg,
      form: { getFieldProps }
    } = this.props;
    return (
      <div>
        <List>
          {!isAuth && <div>{msg}</div>}

          <InputItem
            {...getFieldProps("user")}
            clear
            placeholder="auto focus"
            ref={el => (this.autoFocusInst = el)}
          >
            用户名
          </InputItem>
          <WhiteSpace size="md" />
          <InputItem
            {...getFieldProps("pwd")}
            clear
            placeholder="auto focus"
            ref={el => (this.autoFocusInst = el)}
          >
            密码
          </InputItem>
        </List>
        <Button
          onClick={() => {
            this.submit();
          }}
        >
          登录
        </Button>
      </div>
    );
  }
}
export default Login;
