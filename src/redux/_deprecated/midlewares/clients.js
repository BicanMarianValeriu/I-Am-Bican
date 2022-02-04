import { apiRequest } from './../actions/api';
import { GET_CLIENTS, GET_CLIENTS_SUCCESS, GET_CLIENTS_ERROR, updateClients } from './../actions/clients';

export const clientsMiddleware = ({ dispatch }) => next => action => {
    next(action);

    const { type, payload } = action;

    switch (type) {
        case GET_CLIENTS:
            dispatch(apiRequest('wp/v2/clients', null, { success: GET_CLIENTS_SUCCESS, error: GET_CLIENTS_ERROR }));
            break;

        case GET_CLIENTS_SUCCESS:
            dispatch(updateClients(payload));
            break;

        default: return null;
    }
} 