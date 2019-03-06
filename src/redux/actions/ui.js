export const SHOW_LOADING   = '[ui] show spinner';
export const HIDE_LOADING   = '[ui] hide spinner'; 

export const showSpinner    = () => ({ type: SHOW_LOADING }); 
export const hideSpinner    = () => ({ type: HIDE_LOADING });  