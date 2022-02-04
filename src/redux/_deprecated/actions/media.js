export const MEDIA = '[Media]'; // Namespace
export const GET_MEDIA = `${MEDIA} GET`;
export const GET_MEDIA_SUCCESS = `${MEDIA} SUCCESS`;
export const GET_MEDIA_ERROR = `${MEDIA} ERROR`;
export const UPDATE_MEDIA = `${MEDIA} UPDATED`;

export const getMedia = payload => ({ type: GET_MEDIA, payload });
export const updateMedia = payload => ({ type: UPDATE_MEDIA, payload });