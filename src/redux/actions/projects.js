export const PROJECTS = '[Projects]';
export const GET_PROJECTS = `${PROJECTS} GET`;

export const getProjects = payload => ({
    type: GET_PROJECTS,
    request: {
        url: 'wp/v2/portfolios',
        params: payload,
    },
    meta: {
        normalize: true,
    },
});