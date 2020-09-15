import { updateObject } from "../../utility/Utility";
import * as actions from "../actions/actionTypes";

const landingState = {
  links: ["home", "about", "contact", "login", "signin"],
  data: null,
};

const handleLoginSubmit = (state, action) => {
  return updateObject(state, { data: action.data });
};
const handleSignUpSubmit = (state, action) => {
  return updateObject(state, { data: action.data });
};

const reducer = (state = landingState, action) => {
  switch (action.type) {
    case actions.LOGIN_CHANGE:
      return handleLoginSubmit(state, action);
    case actions.SIGNUP_CHANGE:
      return handleSignUpSubmit(state, action);

    default:
      return state;
  }
};

export default reducer;
