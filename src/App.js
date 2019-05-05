import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, addAsync } from "./index.redux";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    const num = this.props.num;
    return (
      <div>
        <h1>现在有机枪{num}</h1>
        <button onClick={this.props.INCREMENT}>增加</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { num: state };
};
const actionsState = { INCREMENT, DECREMENT, addAsync };
App = connect(
  mapStateToProps,
  actionsState
)(App);
export default App;
