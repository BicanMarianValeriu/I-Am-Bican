import { apiRequest } from "../actions/api";
import { GET_PAGE, GET_PAGE_SUCCESS, GET_PAGE_ERROR, updatePages } from "../actions/pages";

export const pagesMiddleware = ({ dispatch }) => next => action => {
    next(action);

    const { type, payload } = action;

    switch (type) {
        case GET_PAGE:
            dispatch(
                apiRequest('wp/v2/pages', { slug: payload }, { success: GET_PAGE_SUCCESS, error: GET_PAGE_ERROR })
            );
            break;

        case GET_PAGE_SUCCESS:
            dispatch(updatePages(payload[0]));
            break;

        // @todo handle error with notification or 404 redirect

        default: return null;
    }
} 