export const GET_PAGE = '[pages] GET';
export const GET_PAGE_SUCCESS = '[pages] SUCCESS';
export const GET_PAGE_ERROR = '[pages] ERROR';
export const UPDATE_PAGES = '[pages] UPDATED';

export const getPage = ({ slug }) => ({ type: GET_PAGE, payload: slug });
export const updatePages = (data) => ({ type: UPDATE_PAGES, payload: data });