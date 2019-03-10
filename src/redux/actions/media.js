export const GET_MEDIA = '[media] GET';
export const GET_MEDIA_SUCCESS = '[media] SUCCESS';
export const GET_MEDIA_ERROR = '[media] ERROR';
export const UPDATE_MEDIA = '[media] UPDATED';

export const getMedia = data => ({ type: GET_MEDIA, payload: data });
export const updateMedia = data => ({ type: UPDATE_MEDIA, payload: data });