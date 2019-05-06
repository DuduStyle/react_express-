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
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import reducers from "./reducers/index.js";
import AuthRouter from "./component/AuthRouter/AuthRouter";
import "antd-mobile/dist/antd-mobile.css";
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
function Boss() {
  return <h1>BOSS</h1>;
}
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <AuthRouter />
        <Route path="/boss" component={Boss} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
