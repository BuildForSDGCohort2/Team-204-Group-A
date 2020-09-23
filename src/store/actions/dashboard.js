import * as actions from "./actionTypes";

export const showUserMenu = (menuState) => ({
  type: actions.ONCLICKACCOUNTMENU,
  menuState: menuState,
});

export const toggleSidebar = (sidebarState) => ({
  type: actions.TOGGLESIDEBARMENU,
  sidebarState: sidebarState,
});
