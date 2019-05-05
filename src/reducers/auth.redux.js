const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// reducers 处理页面逻辑
export function auth(state = { isAuth: false, user: "张家岭" }, action) {
  console.log("reducers 处理页面逻辑", state, action);
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
}

// actions
export function login() {
  return { type: LOGIN };
}
export function logout() {
  return { type: LOGOUT };
}
