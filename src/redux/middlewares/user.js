import JWTDecode from 'jwt-decode';
import { apiRequest } from './../actions/api';
import { 
    setAuthToken, 
    removeAuthToken, 
    setCurrentUser, 
    getCurrentUser, 
    removeCurrentUser, 
    getAuthHeader, 
} from './../../utilities/helpers';
import {
    USER_GET_TOKEN,
    USER_GET_TOKEN_SUCCESS,
    USER_GET_TOKEN_ERROR,
    //USER_VERIFY_TOKEN,
    //USER_VERIFY_TOKEN_SUCCESS,
    //USER_VERIFY_TOKEN_ERROR,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_ERROR,
    updateUser
} from './../actions/user';
import { setPendingUser } from './../actions/ui';

export const userMiddleware = ({ dispatch }) => next => action => {
    next(action);

    const { type, payload } = action;

    switch (type) {
        case USER_GET_TOKEN:
            const { username, password } = payload;

            dispatch(
                apiRequest('jwt-auth/v1/token', { username, password },
                    { success: USER_GET_TOKEN_SUCCESS, error: USER_GET_TOKEN_ERROR },
                    { method: 'post' }
                )
            );

            dispatch(setPendingUser(true));

            break;

        case USER_GET_TOKEN_SUCCESS:
            const { token, ...rest } = payload;

            setAuthToken(token);
            setCurrentUser(rest)

            dispatch(updateUser({ authentificated: true, data: getCurrentUser() }));

            dispatch(setPendingUser(false));

            document.dispatchEvent(new CustomEvent('iambican/userUpdated'));

            break;

        case USER_LOGIN:
            const { data: { user: { id } } } = JWTDecode(payload);

            dispatch(
                apiRequest('wp/v2/users', { include: id },
                    { success: USER_LOGIN_SUCCESS, error: USER_LOGIN_ERROR },
                    { headers: getAuthHeader() }
                )
            );

            break;

        case USER_LOGIN_SUCCESS:
            dispatch(updateUser({ authentificated: true, data: payload[0] }));

            dispatch(setPendingUser(false));

            break;

        case USER_LOGOUT:

            dispatch({ type: USER_LOGOUT_SUCCESS });

            break;

        case USER_LOGOUT_SUCCESS:
            dispatch(updateUser({ authentificated: false, data: {} }));

            dispatch(setPendingUser(false));

            removeAuthToken();
            removeCurrentUser();

            document.dispatchEvent(new CustomEvent('iambican/userUpdated'));

            break;

        case USER_GET_TOKEN_ERROR:
        case USER_LOGIN_ERROR:
        case USER_LOGOUT_ERROR:

            dispatch(setPendingUser(false));

            break;

        default: return null;
    }
}  