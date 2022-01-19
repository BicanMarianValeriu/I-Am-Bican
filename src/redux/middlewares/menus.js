import { apiRequest } from "./../actions/api";
import { GET_MENU, GET_MENU_SUCCESS, GET_MENU_ERROR, updateMenus } from "./../actions/menus";

export const menuMiddleware = ({ dispatch }) => next => action => {
    next(action);

    const { type, payload } = action;

    switch (type) {
        case GET_MENU:
            dispatch(
                apiRequest(`wp/v2/menus/${payload}`, null, { success: GET_MENU_SUCCESS, error: GET_MENU_ERROR })
            );
            break;

        case GET_MENU_SUCCESS:
            dispatch(updateMenus(payload));
            break;

        default: return null;
    }
} 