import { apiRequest } from './../actions/api';
import { setPendingEntry } from './../actions/ui';
import { GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_ERROR, updateProjects } from './../actions/projects';

export const projectsMiddleware = ({ dispatch }) => next => action => {
    next(action);

    const { type, payload } = action;

    switch (type) {
        case GET_PROJECTS:
            dispatch(setPendingEntry(true));
            dispatch(apiRequest('wp/v2/portfolios', payload, { success: GET_PROJECTS_SUCCESS, error: GET_PROJECTS_ERROR }));
            break;

        case GET_PROJECTS_SUCCESS:
            dispatch(updateProjects(payload));
            dispatch(setPendingEntry(false));
            break;

        case GET_PROJECTS_ERROR:
            dispatch(setPendingEntry(false));
            break;

        default: return null;
    }
} 