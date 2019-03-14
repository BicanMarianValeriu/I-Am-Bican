export const MENU = '[Menu]';
export const GET_MENU = `${MENU} GET`;
export const GET_MENU_SUCCESS = `${MENU} SUCCESS`;
export const GET_MENU_ERROR = `${MENU} ERROR`;
export const UPDATE_MENUS = `${MENU} UPDATED`;

export const getMenu = menuId => ({ type: GET_MENU, payload: menuId });
export const updateMenus = data => ({ type: UPDATE_MENUS, payload: data });