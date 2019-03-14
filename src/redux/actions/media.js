export const MEDIA = '[Media]'; // Namespace
export const GET_MEDIA = `${MEDIA} GET`;
export const GET_MEDIA_SUCCESS = `${MEDIA} SUCCESS`;
export const GET_MEDIA_ERROR = `${MEDIA} ERROR`;
export const UPDATE_MEDIA = `${MEDIA} UPDATED`;

export const getMedia = query => ({ type: GET_MEDIA, payload: query });
export const updateMedia = data => ({ type: UPDATE_MEDIA, payload: data });