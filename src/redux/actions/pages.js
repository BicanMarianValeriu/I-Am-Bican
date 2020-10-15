export const PAGES = '[Pages]';
export const GET_PAGE = `${PAGES} GET`;
export const GET_PAGE_SUCCESS = `${PAGES} SUCCESS`;
export const GET_PAGE_ERROR = `${PAGES} ERROR`;
export const UPDATE_PAGES = `${PAGES} UPDATED`;

export const getPage = payload => ({ type: GET_PAGE, payload });
export const updatePages = payload => ({ type: UPDATE_PAGES, payload });