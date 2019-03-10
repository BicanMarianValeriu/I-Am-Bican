import { apiRequest } from "../actions/api";
import { GET_PAGE, GET_PAGE_SUCCESS, GET_PAGE_ERROR, updatePages } from "../actions/pages";
//import { showSpinner, hideSpinner } from '../actions/ui';

export const getPageFlow = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_PAGE) {
        dispatch(apiRequest('wp/v2/pages', { slug: action.payload }, { success: GET_PAGE_SUCCESS, error: GET_PAGE_ERROR }));
        //dispatch(showSpinner());
    }
}

export const processPagesCollection = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_PAGE_SUCCESS) { 
        dispatch(updatePages(action.payload[0]));
        //dispatch(hideSpinner());
    }
};

export const pageMdl = [getPageFlow, processPagesCollection];