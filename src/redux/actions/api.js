import axios from 'axios';
import { isLocalhost } from '../../utilities/helpers';

export const API_REQUEST 	= '[iambican] API:REQUEST';
export const API_REJECTED 	= '[iambican] API:REJECTED';

// Axios Settings
const APIUrl = isLocalhost ? '//working.on/iambican/wordpress/wp-json/' : 'https://wecodeart.com/dev/iambican/wp-json/';
axios.defaults.baseURL = APIUrl;
const apiConfig = { baseURL: APIUrl };

// Export a base axios instance to be used on some cases
export const requestApi = axios.create(apiConfig);

/**
 * API REQUEST
 * @param { string } 	endpoint 	- the Rest API URL
 * @param { mixed } 	payload 	- string or object with query args
 * @param { object } 	events 		- Redux onSuccess/onError ACTIONS
 * @param { object } 	options		- Axios Config: { method: `get` } defaults
 */
export const apiRequest = (endpoint, body, events, options) => ({
	type: API_REQUEST,
	payload: {
		data: body,
		meta: { endpoint, events, options }
	}
});