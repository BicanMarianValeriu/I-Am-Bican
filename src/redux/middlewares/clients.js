import { apiRequest } from "../actions/actions";
import { GET_CLIENTS, GET_CLIENTS_SUCCESS, GET_CLIENTS_ERROR, updateClients } from "../actions/clients";

export const getClientsFlow = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_CLIENTS) {
        dispatch(apiRequest('wp/v2/clients', null, { success: GET_CLIENTS_SUCCESS, error: GET_CLIENTS_ERROR }));
    }
}

export const processClientsCollection = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === GET_CLIENTS_SUCCESS) {
        dispatch(updateClients(action.payload));
    }
};

export const clientsMdl = [getClientsFlow, processClientsCollection];