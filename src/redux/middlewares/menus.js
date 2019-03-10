import { apiRequest } from "../actions/api";

import { GET_MENU, GET_MENU_SUCCESS, GET_MENU_ERROR, updateMenus } from "../actions/menus";

export const getMenuFlow = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_MENU) {
        dispatch(apiRequest('wp/v2/menu/' + action.payload, null, { success: GET_MENU_SUCCESS, error: GET_MENU_ERROR }));
    }
}

export const processMenuCollection = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_MENU_SUCCESS) {
        dispatch(updateMenus(action.payload));
    }
};

export const menuMdl = [getMenuFlow, processMenuCollection];