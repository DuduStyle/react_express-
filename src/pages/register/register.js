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
  register = () => {
    console.log(this.props);
    this.props.form.getFieldValue((err, value) => {
      console.log(value);
    });
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List>
          <InputItem
            {...getFieldProps("name")}
            clear
            placeholder="auto focus"
            ref={el => (this.autoFocusInst = el)}
          >
            用户名
          </InputItem>
          <WhiteSpace size="md" />
          <InputItem
            {...getFieldProps("password")}
            clear
            placeholder="auto focus"
            ref={el => (this.autoFocusInst = el)}
          >
            密码
          </InputItem>
          <WhiteSpace size="md" />
          <InputItem
            {...getFieldProps("repassword")}
            clear
            placeholder="auto focus"
            ref={el => (this.autoFocusInst = el)}
          >
            再次输入
          </InputItem>
        </List>
        <Button
          onClick={() => {
            this.register();
          }}
        >
          注册
        </Button>
      </div>
    );
  }
}
export default Register;
