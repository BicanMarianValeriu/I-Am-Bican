import { USER_GET_TOKEN_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_GET_TOKEN_ERROR } from "../actions/user";
import { setAuthToken, removeAuthToken } from "../../utilities/auth";

export default function userReducer(state = {
    authentificated: false,
    data: {}
}, action) {
    switch (action.type) {
        case USER_GET_TOKEN_SUCCESS: {
            setAuthToken(action.payload.token);

            state.authentificated = true;

            document.dispatchEvent(new CustomEvent('user/get_token_success', {
                detail: action.payload
            }));

            return { ...state };
        }

        case USER_GET_TOKEN_ERROR: {

            document.dispatchEvent(new CustomEvent('user/get_token_error', {
                detail: action.payload
            }));

            return state;
        }
        
        case USER_LOGIN_SUCCESS: {
            state.authentificated = true;
            state.data = { ...action.payload };

            return { ...state };
        }
        case USER_LOGOUT_SUCCESS: {
            removeAuthToken();

            state.authentificated = false;
            state.data = {};

            return { ...state };
        }
        default: return state;
    }
}
