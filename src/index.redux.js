export function counter(state = 0, action) {
  console.log("counter", state, action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
export function INCREMENT() {
  console.log("我打印了可");
  return { type: "INCREMENT" };
}
export function DECREMENT() {
  return { type: "DECREMENT" };
}

export function addAsync() {
  console.log("异步----我打印了可");
  return dispatch => {
    setTimeout(() => {
      dispatch(INCREMENT());
    }, 2000);
  };
}
