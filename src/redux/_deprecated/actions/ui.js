export const SHOW_LOADING = '[ui] SPINNER:SHOW';
export const HIDE_LOADING = '[ui] SPINNER:HIDE';
export const SHOW_QA_LOADING = '[ui] QA_LOADING:SHOW';
export const HIDE_QA_LOADING = '[ui] QA_LOADING:HIDE';
export const SHOW_ENTRY_LOADING = '[ui] ENTRY_LOADING:SHOW';
export const HIDE_ENTRY_LOADING = '[ui] ENTRY_LOADING:HIDE';
export const SHOW_USER_LOADING = '[ui] USER_LOADING:SHOW';
export const HIDE_USER_LOADING = '[ui] USER_LOADING:HIDE';

export const setSpinner = c => ({ type: c === true ? SHOW_LOADING : HIDE_LOADING, payload: c });
export const setPendingQA = c => ({ type: c === true ? SHOW_QA_LOADING : HIDE_QA_LOADING, payload: c });
export const setPendingUser = c => ({ type: c === true ? SHOW_USER_LOADING : HIDE_USER_LOADING, payload: c });
export const setPendingEntry = c => ({ type: c === true ? SHOW_ENTRY_LOADING : HIDE_ENTRY_LOADING, payload: c });