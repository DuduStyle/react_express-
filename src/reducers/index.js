// 合并所有的reducer
import { combineReducers } from "redux";
import { auth } from "./auth.redux";
import { counter } from "./counter";

export default combineReducers({
  counter,
  auth
});
