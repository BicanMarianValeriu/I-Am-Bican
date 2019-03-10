export const USER_GET_TOKEN = '[user] TOKEN:GET';
export const USER_GET_TOKEN_SUCCESS = '[user] TOKEN:SUCCESS';
export const USER_GET_TOKEN_ERROR = '[user] TOKEN:ERROR';
export const USER_VERIFY_TOKEN = '[user] TOKEN:VERIFY';
export const USER_VERIFY_TOKEN_SUCCESS = '[user] TOKEN:VERIFY_SUCCESS';
export const USER_VERIFY_TOKEN_ERROR = '[user] TOKEN:VERIFY_ERROR';
export const USER_LOGIN = '[user] LOGIN';
export const USER_LOGIN_SUCCESS = '[user] LOGIN:SUCCESS';
export const USER_LOGIN_ERROR = '[user] LOGIN:ERROR';
export const USER_LOGOUT = '[user] LOGOUT';
export const USER_LOGOUT_SUCCESS = '[user] LOGOUT:SUCCESS';

export const getToken = ({ username, password }) => ({ type: USER_GET_TOKEN, payload: { username, password } });
export const verifyToken = token => ({ type: USER_VERIFY_TOKEN, payload: token });
export const authToken = token => ({ type: USER_LOGIN, payload: token });
export const userLogout = message => ({ type: USER_LOGOUT, payload: message }); 