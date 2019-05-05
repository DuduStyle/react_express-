import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, addAsync } from "./reducers/counter";
import "./App.css";

@connect(
  state => ({ counter: state.counter }),
  { INCREMENT, DECREMENT, addAsync }
)
class App extends React.Component {
  render() {
    const counter = this.props.counter;
    return (
      <div>
        <h1>现在有机枪{counter}</h1>
        <button onClick={this.props.INCREMENT}>增加</button>
      </div>
    );
  }
}

export default App;
