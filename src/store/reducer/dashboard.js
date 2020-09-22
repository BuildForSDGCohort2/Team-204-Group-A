import { updateObject } from "../../utility/Utility";
import * as actions from "../actions/actionTypes";

const initialState = {
  showAccountMenu: false,
};

const onClickAccountMenu = (state, action) =>
  updateObject(state, { showAccountMenu: !action.menuState });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ONCLICKACCOUNTMENU:
      return onClickAccountMenu(state, action);

    default:
      return state;
  }
};

export default reducer;
