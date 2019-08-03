import { apiRequest } from "../actions/api";
import { GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_ERROR, UPDATE_PROJECTS, updateProjects } from "../actions/projects";
import { setSpinner } from '../actions/ui';

export const projectsMiddleware = ({ dispatch }) => next => action => {
    next(action);

    const { type, payload } = action;

    switch (type) {
        case GET_PROJECTS:
            dispatch(setSpinner(true));
            dispatch(
                apiRequest('wp/v2/portfolios', payload, { success: GET_PROJECTS_SUCCESS, error: GET_PROJECTS_ERROR })
            );
            break;

        case GET_PROJECTS_SUCCESS:
            dispatch(updateProjects(payload));
            break;

        case UPDATE_PROJECTS:
            dispatch(setSpinner(false));
            break;

        default: return null;
    }
} 