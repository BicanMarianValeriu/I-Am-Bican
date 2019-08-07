import JWTDecode from "jwt-decode";
import Cookies from "js-cookie";

/**
 * Set authentication token
 */
export const setAuthToken = token => {
	return Cookies.set("authToken", token, { expires: 7 });
};

/**
 * Get stored authentication token
 */
export const getAuthToken = () => {
	return Cookies.get("authToken");
};

/**
 * Remove stored authetification token
 */
export const removeAuthToken = () => {
	return Cookies.remove("authToken");
};

/**
 * Authorization header
 */
export const getAuthHeader = () => {
	const authToken = getAuthToken();
	if (authToken) {
		return {
			Authorization: `Bearer ${authToken}`
		};
	} else {
		return {};
	}
};

/**
 * Checking if user is authenticated
 */
export function isAuthentificated() {
	try {
		const token = getAuthToken();
		if (token && token.length) {
			const decoded = JWTDecode(token);
			const current_time = new Date().getTime() / 1000;
			if (decoded.exp < current_time) return false;
			return true;
		} else {
			return false;
		}
	} catch (err) {
		return false;
	}
}

/**
 * Set Current User in LS
 * @param {mixed} param0 
 */
export const setCurrentUser = ({
	id,
	name,
	avatar_urls,
	description
}) => {
	try {
		const userData = JSON.stringify({ id, name, avatar_urls, description });
		Cookies.set('currentUser', userData);
	} catch (error) {
		// Logging error on client side
	}
}

/**
 * Get Current User from LS
 */
export const getCurrentUser = () => {
	const userData = Cookies.get('currentUser') || '{}';
	return JSON.parse(userData);
}

/**
 * Remove Current User from LS
 */
export const removeCurrentUser = () => {
	return Cookies.remove('currentUser');
}