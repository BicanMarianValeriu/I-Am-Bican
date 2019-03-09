export const SHOW_LOADING   = '[ui] SPINNER:SHOW';
export const HIDE_LOADING   = '[ui] SPINNER:HIDE'; 

export const showSpinner    = () => ({ type: SHOW_LOADING }); 
export const hideSpinner    = () => ({ type: HIDE_LOADING });  