export const GET_PROJECTS = '[projects] GET';
export const GET_PROJECTS_SUCCESS = '[projects] SUCCESS';
export const GET_PROJECTS_ERROR = '[projects] ERROR';
export const UPDATE_PROJECTS = '[projects] UPDATED';

export const getProjects = query => ({ type: GET_PROJECTS, payload: query });
export const updateProjects = data => ({ type: UPDATE_PROJECTS, payload: data });