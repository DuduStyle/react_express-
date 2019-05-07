import React, { Component } from "react";
import { Button } from "antd-mobile";
import style from "./register.less";
import { List, InputItem, WhiteSpace } from "antd-mobile";
import { createForm } from "rc-form";
import { connect } from "react-redux";
import { register } from "../../reducers/user.redux";

@createForm()
@connect(
  state => state.user,
  { register }
)
class Register extends Component {
  constructor(props) {
    super(props);
    // this.register = this.register.bind(this);
  }
  submit = () => {
    console.log(this.props);
    this.props.form.validateFields((err, value) => {
      console.log(value);
      this.props.register({ ...value, type: "1" });
    });
  };
  render() {
    const { getFieldProps } = this.props.form;
    console.log("222222222222222222222", this.props);
    const { isAuth, msg } = this.props;
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
          <WhiteSpace size="md" />
          <InputItem
            {...getFieldProps("repeatpwd")}
            clear
            placeholder="auto focus"
            ref={el => (this.autoFocusInst = el)}
          >
            再次输入
          </InputItem>
        </List>
        <Button
          onClick={() => {
            this.submit();
          }}
        >
          注册
        </Button>
      </div>
    );
  }
}
export default Register;
