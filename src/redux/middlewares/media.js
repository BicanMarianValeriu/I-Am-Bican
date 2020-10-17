import { apiRequest } from "../actions/api";
import { GET_MEDIA, GET_MEDIA_SUCCESS, GET_MEDIA_ERROR, updateMedia } from "../actions/media";

export const mediaMiddleware = ({ dispatch }) => next => action => {
    next(action);

    const { type, payload } = action;

    switch (type) {
        case GET_MEDIA:
            dispatch(
                apiRequest(`wp/v2/media/${payload}`, null, { success: GET_MEDIA_SUCCESS, error: GET_MEDIA_ERROR })
            );
            break;

        case GET_MEDIA_SUCCESS:
            dispatch(updateMedia(payload));
            break;

        default: return null;
    }
}  