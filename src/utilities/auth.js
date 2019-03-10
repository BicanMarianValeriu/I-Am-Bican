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
