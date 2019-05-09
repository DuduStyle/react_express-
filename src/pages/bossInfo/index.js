import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";

export default class BossInfo extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          boss展示页面
        </NavBar>
      </div>
    );
  }
}
