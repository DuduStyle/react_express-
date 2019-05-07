import Axios from "axios";

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const ERROR_MSG = "ERROR_MSG";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const initState = {
  redirectTo: "",
  msg: "",
  isAuth: "",
  user: "",
  pwd: "",
  type: ""
};
export function user(state = initState, action) {
  console.log("我是rudecures------", state, action);
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: "", isAuth: true, ...action.payload };
    case LOGIN_SUCCESS:
      return { ...state, msg: "", isAuth: true, ...action.payload };
    case ERROR_MSG:
      return { ...state, msg: action.msg, isAuth: false };
    default:
      return state;
  }
}
function register_success(data) {
  return { type: REGISTER_SUCCESS, payload: data };
}
function login_success(data) {
  return { type: LOGIN_SUCCESS, payload: data };
}
function errorMsg(msg) {
  return { type: ERROR_MSG, msg };
}

export function register({ user, pwd, repeatpwd, type }) {
  console.log("我是reudx----", user, pwd, repeatpwd, type);
  if (!user || !pwd || !repeatpwd) {
    return errorMsg("用户名密码必须输入");
  }
  if (pwd !== repeatpwd) {
    return errorMsg("密码和确认密码不同");
  }
  return dispatch => {
    Axios.post("/user/register", { user, pwd, type }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(register_success({ user, pwd, type }));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}
export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg("用户名密码必须输入");
  }
  return dispatch => {
    Axios.post("/user/login", { user, pwd }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(login_success(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}
