export const MENU = '[Menu]';
export const GET_MENU = `${MENU} GET`;
export const GET_MENU_SUCCESS = `${MENU} SUCCESS`;
export const GET_MENU_ERROR = `${MENU} ERROR`;
export const UPDATE_MENUS = `${MENU} UPDATED`;

export const getMenu = payload => ({ type: GET_MENU, payload });
export const updateMenus = payload => ({ type: UPDATE_MENUS, payload });