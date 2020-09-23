import { updateObject } from "../../utility/Utility";
import * as actions from "../actions/actionTypes";

const initialState = {
  showAccountMenu: false,
  showSidebar: false,
};

const onClickAccountMenu = (state, action) =>
  updateObject(state, { showAccountMenu: !action.menuState });

const toggleSidebar = (state, action) =>
  updateObject(state, { showSidebar: !action.sidebarState });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ONCLICKACCOUNTMENU:
      return onClickAccountMenu(state, action);

    case actions.TOGGLESIDEBARMENU:
      return toggleSidebar(state, action);

    default:
      return state;
  }
};

export default reducer;
