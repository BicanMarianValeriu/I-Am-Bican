export const PROJECTS = '[Projects]';
export const GET_PROJECTS = `${PROJECTS} GET`;
export const GET_PROJECTS_SUCCESS = `${PROJECTS} SUCCESS`;
export const GET_PROJECTS_ERROR = `${PROJECTS} ERROR`;
export const UPDATE_PROJECTS = `${PROJECTS} UPDATED`;

export const getProjects = payload => ({ type: GET_PROJECTS, payload });
export const updateProjects = payload => ({ type: UPDATE_PROJECTS, payload });