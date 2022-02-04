export const META = '[Meta]';
export const GET_META = `${META} GET`;
export const GET_META_SUCCESS = `${META} SUCCESS`;
export const GET_META_ERROR = `${META} ERROR`;
export const UPDATE_META = `${META} UPDATED`;

export const getMeta = payload => ({ type: GET_META, payload });