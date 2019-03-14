export const CLIENTS = '[Clients]'; // Namespace
export const GET_CLIENTS = `${CLIENTS} GET`;
export const GET_CLIENTS_SUCCESS = `${CLIENTS} SUCCESS`;
export const GET_CLIENTS_ERROR = `${CLIENTS} ERROR`;
export const UPDATE_CLIENTS = `${CLIENTS} UPDATED`;

export const getClients = () => ({ type: GET_CLIENTS });
export const updateClients = data => ({ type: UPDATE_CLIENTS, payload: data });