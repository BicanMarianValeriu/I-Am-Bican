export const SHOW_LOADING = '[ui] SPINNER:SHOW';
export const HIDE_LOADING = '[ui] SPINNER:HIDE';
export const SHOW_USER_LOADING = '[ui] USER_LOADING:SHOW';
export const HIDE_USER_LOADING = '[ui] USER_LOADING:HIDE';

export const setSpinner = c => ({ type: c === true ? SHOW_LOADING : HIDE_LOADING, payload: c });  
export const setPendingUser = c => ({ type: c === true ? SHOW_USER_LOADING : HIDE_USER_LOADING, payload: c });  