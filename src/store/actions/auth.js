import * as actions from "./actionTypes";
import axios from "../../axios-base";

export const getAuthData = () => {
  return (dispatch, getState) => {
    const data = getState().landing.data;
    console.log(data);
    dispatch({ type: actions.GET_AUTH_DATA, data: data });
  };
};

export const toLogin = (isLogin) => {
  return {
    type: actions.LOGIN_USER,
    isLogin: isLogin,
  };
};
export const signInUser = (isProvider) => {
  return {
    type: actions.SIGNIN_USER,
    isProvider: isProvider,
  };
};
export const signInProvider = (isProvider) => {
  return {
    type: actions.SIGNIN_PROVIDER,
    isProvider: isProvider,
  };
};

export const authStart = () => {
  return {
    type: actions.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actions.AUTH_SUCCESS,
    token: authData.token,
  };
};

export const logOut = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogOut());
    }, time * 1000);
  };
};

export const authLogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("exptime");
  return {
    type: actions.AUTH_LOGOUT,
  };
};

export const authFail = (error) => {
  return {
    type: actions.AUTH_FAIL,
    error: error,
  };
};

export const auth = (data) => {
  console.log(data);
  return (dispatch) => {
    dispatch(authStart());
    let url = "/api/v1/user/auth/signin";

    if (data.isSignUp) {
      url = "/api/v1/user/signup";
    }

    axios
      .post(url, data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("exptime", 1000);
        console.log(response);
        dispatch(authSuccess(response));
        // dispatch(logOut(1000));
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actions.AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const checkAuthState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const authData = { token: token };

    token && dispatch(authSuccess(authData));
  };
};
