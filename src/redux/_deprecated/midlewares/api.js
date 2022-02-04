import { requestApi, API_REQUEST, API_REJECTED } from '../../actions/api';
import { serializeData } from '../../../utilities/helpers';

// This middleware care only for API calls
export const api = ({ dispatch }) => next => action => {
    next(action);
    
    const { type, payload } = action;

    if (type === API_REQUEST) {
        let { meta: { endpoint, events: { success, error }, options = {} }, data } = payload;
        const serialized = serializeData(data);
        if (serialized) endpoint = endpoint.concat('?', serialized);

        const { method = 'get' } = options;
        delete options['method'];

        return requestApi[method](endpoint, { ...options })
            .then(response => dispatch({ type: success, payload: response.data }))
            .catch(err => dispatch({ type: error ? error : API_REJECTED, payload: err }));
    }
};