import JWTDecode from 'jwt-decode';

/**
 * Set authentication token
 */
export const setAuthToken = (token) => {
    return localStorage.setItem('authToken', token); 
}

/**
 * Get stored authentication token
 */
export const getAuthToken = () => {
    return localStorage.getItem('authToken');
}

/**
 * Remove stored authetification token
 */
export const removeAuthToken = () => {
    return localStorage.removeItem('authToken'); 
}

/**
 * Authorization header
 */
export const getAuthHeader = () => {
    const authToken = getAuthToken();
    if (authToken) {
        return { 'Authorization': `Bearer ${authToken}` };
    } else {
        return {};
    }
}

/**
 * Gets a Cookie
 * @param { string } cname 
 */
export const getCookie = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

/**
 * Sets a Cookie
 * @param { string } cname 
 * @param { mixed }  cvalue
 * @param { int }    exdays
 */
export const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Delete A cookie
 * @param { string } cname
 */
export const deleteCookie = (cname) => {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/**
 * Checking if user is authenticated
 */
export function isAuthentificated() {
    try {
        const token = getAuthToken();

        if (token && token.length) {
            const decoded = JWTDecode(token);
            const current_time = new Date().getTime() / 1000;
            // Check if token has expired
            if (decoded.exp < current_time) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    } catch (err) {
        // Client side logging of errors
        return false;
    }
} 