export const GET_MENU = '[menu] GET';
export const GET_MENU_SUCCESS = '[menu] SUCCESS';
export const GET_MENU_ERROR = '[menu] ERROR';
export const UPDATE_MENUS = '[menu] UPDATED';

export const getMenu = menuId => ({ type: GET_MENU, payload: menuId });
export const updateMenus = data => ({ type: UPDATE_MENUS, payload: data });