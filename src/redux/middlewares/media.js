import { apiRequest } from "../actions/api";
import { GET_MEDIA, GET_MEDIA_SUCCESS, GET_MEDIA_ERROR, updateMedia } from "../actions/media";

export const getMediaFlow = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_MEDIA) {
        dispatch(apiRequest('wp/v2/media', action.payload, { success: GET_MEDIA_SUCCESS, error: GET_MEDIA_ERROR }));
    }
}

export const processMediaCollection = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_MEDIA_SUCCESS) {
        dispatch(updateMedia(action.payload));
    }
};

export const mediaMdl = [getMediaFlow, processMediaCollection];