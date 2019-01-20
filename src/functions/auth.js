import JWTDecode from "jwt-decode";

/**
 * Set authentication token
 */
export const setAuthToken = token => {
	return localStorage.setItem("authToken", token);
};

/**
 * Get stored authentication token
 */
export const getAuthToken = () => {
	return localStorage.getItem("authToken");
};

/**
 * Remove stored authetification token
 */
export const removeAuthToken = () => {
	return localStorage.removeItem("authToken");
};

/**
 * Authorization header
 */
export const getAuthHeader = () => {
	const authToken = getAuthToken();
	if (authToken) {
		return { Authorization: `Bearer ${authToken}` };
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
