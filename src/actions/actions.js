//import apiFetch from '@wordpress/api-fetch';
import axios from 'axios';
import JWTDecode from 'jwt-decode';
import { routes as _routes } from "./../rest-routes.json";
import { getAuthToken, getAuthHeader } from '../functions/auth.js';
import { serializeData } from '../functions/helpers.js';

export const FETCHING = 'FETCHING';
export const FETCH_MENU_FULFILLED = 'FETCH_MENU_FULFILLED';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_POSTS_FULFILLED = 'FETCH_POSTS_FULFILLED';
export const FETCH_CLIENTS_FULFILLED = 'FETCH_CLIENTS_FULFILLED';
export const FETCH_MEDIA_FULFILLED = 'FETCH_MEDIA_FULFILLED';
export const FETCH_REJECTED = 'FETCH_REJECTED';
export const SET_HAS_MORE_POSTS = 'SET_HAS_MORE_POSTS';

// Api Settings
//apiFetch.use(apiFetch.createRootURLMiddleware(_routes.REST));
// WP Fetch API has issues with headers and IE, even with polyfil. Axios all the way.
// Axios Settings
axios.defaults.baseURL = _routes.REST;

/**
 * Sets has more post state
 * @param condition 
 */
export function setHasMorePosts(condition) {
    return function (dispatch) {
        dispatch({ type: FETCH_POSTS_FULFILLED, payload: condition });
    };
}

/**
 * Request an user token
 * @param  { object } data - Am object that must contain an username and password 
 */
export async function requestUserToken(data) {
    const { username, password } = data;
    if (username && password) {
        const config = {
            method: 'post',
            url: 'jwt-auth/v1/token',
            data: serializeData({ username, password })
        }
        try {
            return await axios(config).then(response => (response.data));
        } catch (e) {
            console.log(e);
        }
    }
}

/**
 * Sets current user
 * @param condition 
 */
export async function setCurrentUser() {
    const token = getAuthToken(), headers = getAuthHeader();
    if (token && headers) {
        const decoded = JWTDecode(token);
        const { data: { user: { id } } } = decoded;
        console.log('Authentificated user ID is: ' + id)
        try {
            return await axios.get('wp/v2/users/' + id, { headers }).then(response => response.data)
        } catch (e) {
            console.log(e)
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
export function fetchDispatcher(endpoint = '', query = {}, action = {}, options = {}) {
    return function (dispatch) {
        var serialized = serializeData(query);
        if (serialized) endpoint = endpoint.concat('?', serialized);
        // Dispatch the fetching action
        dispatch({ type: FETCHING, payload: true });
        // Fetch 
        return axios.get(endpoint, { ...options })
            .then(response => dispatch({ type: action.success, payload: response.data }))
            .catch(error => dispatch({ type: action.failed ? action.failed : FETCH_REJECTED, payload: error }));
    };
} 