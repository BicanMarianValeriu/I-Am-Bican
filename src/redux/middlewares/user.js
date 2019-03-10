import JWTDecode from "jwt-decode";
import { apiRequest } from "../actions/api";
import {
    USER_GET_TOKEN,
    USER_GET_TOKEN_SUCCESS,
    USER_GET_TOKEN_ERROR,
    USER_VERIFY_TOKEN,
    USER_VERIFY_TOKEN_SUCCESS,
    USER_VERIFY_TOKEN_ERROR,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
    USER_LOGOUT_SUCCESS 
} from "../actions/user";

export const getTokenFlow = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === USER_GET_TOKEN) {
        const { username, password } = action.payload;

        dispatch(apiRequest('jwt-auth/v1/token', { username, password },
            { success: USER_GET_TOKEN_SUCCESS, error: USER_GET_TOKEN_ERROR },
            { method: 'post' }
        ));
    }
}

export const verifyTokenFlow = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === USER_VERIFY_TOKEN) {
        const config = { method: 'post' };
        const headers = { headers: { "Authorization": "Bearer " + action.payload } };
        dispatch(apiRequest('jwt-auth/v1/token/validate', null,
            { success: USER_VERIFY_TOKEN_SUCCESS, error: USER_VERIFY_TOKEN_ERROR },
            { ...config, ...headers, withCredentials: true }
        ));
    }
}

export const authTokenFlow = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === USER_LOGIN) {
        const decoded = JWTDecode(action.payload);
        const { data: { user: { id } } } = decoded;

        dispatch(apiRequest('wp/v2/users/' + id, null,
            { success: USER_LOGIN_SUCCESS, error: USER_LOGIN_ERROR },
            { headers: { "Authorization": "Bearer " + action.payload } }
        ));
    }
}

export const logoutUserFlow = ({ dispatch }) => next => action => {
    next(action); 

    if (action.type === USER_LOGOUT) dispatch({ type: USER_LOGOUT_SUCCESS });
}

export const userMdl = [getTokenFlow, verifyTokenFlow, authTokenFlow, logoutUserFlow];