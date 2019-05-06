import Axios from "axios";

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const ERROR_MSG = "ERROR_MSG";

const initState = {
  msg: "",
  isAuth: "",
  user: "",
  pwd: "",
  type: ""
};
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: "", isAuth: true, ...action.payload };
    case ERROR_MSG:
      return { ...state, msg: "", isAuth: false };
    default:
      return state;
  }
}
function register_success(data) {
  return { payload: data, type: REGISTER_SUCCESS };
}
function errorMsg(msg) {
  return { msg, type: ERROR_MSG };
}

export function register({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd || !type) {
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
