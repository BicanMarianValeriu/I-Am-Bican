import { apiRequest } from './../actions/api';
import { setPendingEntry } from './../actions/ui';
import { GET_PAGE, GET_PAGE_SUCCESS, GET_PAGE_ERROR, updatePages } from './../actions/pages';

export const pagesMiddleware = ({ dispatch }) => next => action => {
    next(action);

    const { type, payload } = action;

    switch (type) {
        case GET_PAGE:
            dispatch(setPendingEntry(true));
            dispatch(apiRequest('wp/v2/pages', { slug: payload }, { success: GET_PAGE_SUCCESS, error: GET_PAGE_ERROR }));
            break;

        case GET_PAGE_SUCCESS:
            dispatch(updatePages(payload));
            dispatch(setPendingEntry(false));
            break;

        // @todo handle error with notification or 404 redirect

        default: return null;
    }
} 