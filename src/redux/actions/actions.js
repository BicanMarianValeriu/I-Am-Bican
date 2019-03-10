import axios from "axios";
import JWTDecode from "jwt-decode";
import { routes as _routes } from "./../rest-routes.json";
import { serializeData } from "../../utilities/helpers";

export const API_REQUEST = '[iambican] API Request'; 

export const FETCH_USER_FULFILLED = "FETCH_USER_FULFILLED";
export const LOGOUT_USER = "LOGOUT_USER";
export const FETCH_POSTS_FULFILLED = "FETCH_POSTS_FULFILLED"; 
export const FETCH_CLIENT_FULFILLED = "FETCH_CLIENT_FULFILLED";
export const FETCH_MEDIA_FULFILLED = "FETCH_MEDIA_FULFILLED";
export const FETCH_REJECTED = "FETCH_REJECTED"; 

// Axios Settings
const APIUrl = _routes.REST; //'//working.on/iambican/wordpress/wp-json/';
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
export const apiRequest = (endpoint, payload, events, options) => ({
	type: API_REQUEST,
	payload: payload,
	meta: { endpoint, events, options }
}); 

/**
 * Request an user token
 * @param  { object } data - Am object that must contain an username and password
 */
export async function requestUserToken(data) {
	const { username, password } = data;
	if (username && password) {
		const config = {
			method: "post",
			url: "jwt-auth/v1/token",
			data: serializeData({ username, password })
		};
		try {
			return await requestApi(config).then(response => response.data);
		} catch (e) {
			console.log(e);
		}
	}
}

/**
 * Sets current user
 */
export async function setCurrentUser(token) {
	const headers = { Authorization: `Bearer ${token}` };
	if (token) {
		const decoded = JWTDecode(token);
		const { data: { user: { id } } } = decoded;
		try {
			return await requestApi.get("wp/v2/users/" + id, { headers, withCredentials: true })
				.then(response => response.data);
		} catch (e) {
			console.log(e);
		}
	}
}

/**
 * Fetch Custom WP Query with Reducer/Action
 * @param   { string } endpoint - WP REST endpoint
 * @param   { object } query    - Query Params as an object
 * @param   { object } action   - Object with success/failed properties and ACTIONS values for this keys.
 * @param   { object } options  - fetch Headers/Body etc
 */
export function fetchDispatcher(endpoint = "", query = {}, action = {}, options = {}) {
	return function (dispatch) {
		var serialized = serializeData(query);
		if (serialized) endpoint = endpoint.concat("?", serialized);
		// Dispatch the fetching action
		// CAUTION: NEVER DO THIS !!! Spent 5h+ to identify the issue since 
		// it happens only on minified/production
		// dispatch({ type: FETCHING, payload: true });
		return requestApi.get(endpoint, { ...options })
			.then(response =>
				dispatch({ type: action.success, payload: response.data })
			)
			.catch(error =>
				dispatch({ type: action.failed ? action.failed : FETCH_REJECTED, payload: error })
			);
	};
}