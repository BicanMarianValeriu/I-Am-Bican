export const MENU = '[Menu]';
export const GET_MENU = `${MENU} GET`;
export const GET_MENU_ERROR = `${MENU} ERROR`;
export const UPDATE_MENUS = `${MENU} UPDATED`;

export const getMenu = payload => ({
    type: GET_MENU,
    request: {
        url: `wp/v2/menus/${payload}`
    },
    meta: {
        cache: true,
        requestKey: payload,
    },
});

export const updateMenus = payload => ({ type: UPDATE_MENUS, payload });