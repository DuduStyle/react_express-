import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./index.css";
import Auth from "./pages/auth";
import Dashbord from "./pages/dashbord";
import reducers from "./reducers/index.js";
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/dashbord" component={Dashbord} />
        <Redirect to="/dashbord" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
