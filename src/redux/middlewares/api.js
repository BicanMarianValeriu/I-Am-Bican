import { requestApi, API_REQUEST, FETCH_REJECTED } from "./../actions/actions";
import { serializeData } from "../../utilities/helpers";

// This middleware care only for API calls
export const api = ({ dispatch }) => next => action => {

    if (action.type === API_REQUEST) {
        let { endpoint, events, options = {} } = action.meta;
        let serialized = serializeData(action.payload);
        if (serialized) endpoint = endpoint.concat("?", serialized);

        const { method = 'get' } = options;

        requestApi[method](endpoint, { ...options })
            .then(response => { dispatch({ type: events.success, payload: response.data }) })
            .catch(error => dispatch({ type: events.failed ? events.failed : FETCH_REJECTED, payload: error }))
    }

    return next(action)
};