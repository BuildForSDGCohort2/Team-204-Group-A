import * as actions from "../actions/actionTypes";
import { updateObject } from "../../utility/Utility";

const initialState = {
  token: null,
  error: null,
  loading: null,
  authRedirectPath: "/",
  toLogin: false,
  toSignIn: false,
  isProvider: false,
  data: null,
};

const getAuthData = (state, action) => {
  return updateObject(state, { data: action.data });
};

const toLogin = (state, action) => {
  return updateObject(state, { toLogin: action.isLogin, toSignIn: false });
};

const toSignUpUser = (state, action) => {
  return updateObject(state, {
    toLogin: false,
    toSignIn: true,
    isProvider: action.isProvider,
  });
};
const toSignUpProvider = (state, action) => {
  return updateObject(state, {
    toLogin: false,
    toSignIn: true,
    isProvider: action.isProvider,
  });
};

const authStart = (state) => {
  return updateObject(state, { loading: true, error: null });
};

const authSuccess = (state, action) => {
  return updateObject(state, { token: action.token, loading: false });
};

const authFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const authLogout = (state) => {
  return updateObject(state, { token: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER:
      return toLogin(state, action);
    case actions.SIGNIN_USER:
      return toSignUpUser(state, action);
    case actions.SIGNIN_PROVIDER:
      return toSignUpProvider(state, action);
    case actions.AUTH_START:
      return authStart(state);
    case actions.AUTH_FAIL:
      return authFail(state, action);
    case actions.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actions.AUTH_LOGOUT:
      return authLogout(state);
    case actions.AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actions.GET_AUTH_DATA:
      let nw = getAuthData(state, action);
      console.log(nw);
      return nw;
    default:
      return state;
  }
};

export default reducer;
