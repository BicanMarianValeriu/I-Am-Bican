import axios from 'axios';
import { isLocalhost } from './../../utilities/helpers';

export const API_REQUEST 	= '[iambican] API:REQUEST';
export const API_REJECTED 	= '[iambican] API:REJECTED';

// Axios Settings
const APIUrl = isLocalhost ? '//working.on/iambican/wordpress/wp-json/' : '//wecodeart.com/dev/iambican/wp-json/';
axios.defaults.baseURL = APIUrl;
const apiConfig = { baseURL: APIUrl };

// Export a base axios instance to be used on some cases
export const requestApi = axios.create(apiConfig);