import { apiRequest } from "../actions/actions";
import { USER_GET_TOKEN, USER_GET_TOKEN_SUCCESS, USER_GET_TOKEN_ERROR, /* authUser */ } from "../actions/user";
import { serializeData } from "../../utilities/helpers";

export const getUserToken = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === USER_GET_TOKEN) {
        const { username, password } = action.payload;
        
        const config = {
            method: "post",
            url: "jwt-auth/v1/token",
            data: serializeData({ username, password })
        };

        dispatch(apiRequest(
            'jwt-auth/v1/token',
            null,
            { success: USER_GET_TOKEN_SUCCESS, error: USER_GET_TOKEN_ERROR },
            config
        ));
    }
}

export const userMdl = [getUserToken];