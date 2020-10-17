export const QA = '[QA]';
export const GET_QA = `${QA} GET`;
export const GET_QA_SUCCESS = `${QA} SUCCESS`;
export const GET_QA_ERROR = `${QA} ERROR`;
export const UPDATE_QA = `${QA} UPDATED`;

export const getQA = payload => ({ type: GET_QA, payload });
export const updateQA = payload => ({ type: UPDATE_QA, payload });