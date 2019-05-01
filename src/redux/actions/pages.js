export const PAGES = '[Pages]';
export const GET_PAGE = `${PAGES} GET`;
export const GET_PAGE_SUCCESS = `${PAGES} SUCCESS`;
export const GET_PAGE_ERROR = `${PAGES} ERROR`;
export const UPDATE_PAGES = `${PAGES} UPDATED`;

export const getPage = ({ slug }) => ({ type: GET_PAGE, payload: slug });
export const updatePages = data => ({ type: UPDATE_PAGES, payload: data });