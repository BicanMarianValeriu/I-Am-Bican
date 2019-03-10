export const GET_CLIENTS = '[clients] GET';
export const GET_CLIENTS_SUCCESS = '[clients] SUCCESS';
export const GET_CLIENTS_ERROR = '[clients] ERROR';
export const UPDATE_CLIENTS = '[clients] UPDATED';

export const getClients = () => ({ type: GET_CLIENTS });
export const updateClients = (data) => ({ type: UPDATE_CLIENTS, payload: data });