import * as actions from "./actionTypes";

export const handleLogin = (data) => {
  return {
    type: actions.LOGIN_CHANGE,
    data: data,
  };
};
export const handleSignUp = (data) => {
  return {
    type: actions.SIGNUP_CHANGE,
    data: data,
  };
};
