import { apiRequest } from "../actions/api";
import { GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_ERROR, updateProjects } from "../actions/projects";

export const getProjectsFlow = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_PROJECTS) {
        dispatch(
            apiRequest('wp/v2/portfolio', action.payload, {
                success: GET_PROJECTS_SUCCESS, 
                error: GET_PROJECTS_ERROR
            })
        );
    }
}

export const processProjectsCollection = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_PROJECTS_SUCCESS) {
        dispatch(updateProjects(action.payload));
    }
};

export const projectsMdl = [getProjectsFlow, processProjectsCollection];