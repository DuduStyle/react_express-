import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import App from "../App";
import { connect } from "react-redux";
import { login, logout } from "../reducers/auth.redux";

function Erying() {
  return <h2>erying</h2>;
}
function Qibinglian() {
  return <h2>骑兵连</h2>;
}
@connect(
  state => state.auth,
  { logout }
)
class Dashbord extends React.Component {
  render() {
    console.log(this.props);
    const redirectToLogin = <Redirect to="/login" />;
    const app = (
      <div>
        <ul>
          <li>
            <Link to="/dashbord">yiying</Link>
          </li>
          <li>
            <Link to="/dashbord/erying">eryin</Link>
          </li>
          <li>
            <Link to="/dashbord/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Route path="/dashbord/" exact component={App} />
        <Route path="/dashbord/erying" exact component={Erying} />
        <Route path="/dashbord/qibinglian" exact component={Qibinglian} />
      </div>
    );
    return this.props.isAuth ? app : redirectToLogin;
  }
}
export default Dashbord;
