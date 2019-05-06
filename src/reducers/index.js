// 合并所有的reducer
import { combineReducers } from "redux";
import { auth } from "./auth.redux";
import { counter } from "./counter";
import { user } from "./user.redux";

export default combineReducers({
  counter,
  auth,
  user
});
