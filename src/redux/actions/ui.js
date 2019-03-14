export const SHOW_LOADING = '[ui] SPINNER:SHOW';
export const HIDE_LOADING = '[ui] SPINNER:HIDE';

export const setSpinner = condition => ({ type: SHOW_LOADING, payload: condition });  