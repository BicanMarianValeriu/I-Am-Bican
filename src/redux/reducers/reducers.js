import { 
 	FETCH_POSTS_FULFILLED, 
	FETCH_CLIENT_FULFILLED,
	FETCH_MEDIA_FULFILLED,
	FETCH_REJECTED, 
	FETCH_USER_FULFILLED,
	LOGOUT_USER
} from "../actions/actions"; 

import { find, findIndex, flow, property, partialRight, some } from "lodash";

const initialState = {
	user: {
		authentificated: false
	},
	posts: [], 
	fetching: true, 
	error: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) { 
		case FETCH_REJECTED: {
			return { ...state, fetching: false, error: action.payload };
		}
		case FETCH_USER_FULFILLED: {
			const { user } = state;
			user.authentificated = true;
			document.dispatchEvent(new CustomEvent('isUserAuth'));
			return {
				...state,
				fetching: false,
				user: { ...user, ...action.payload }
			};
		}
		case LOGOUT_USER: {
			const { user } = initialState;
			user.authentificated = false;
			return {
				...state,
				fetching: false,
				user: user
			};
		}
		case FETCH_POSTS_FULFILLED: {
			return {
				...state,
				fetching: false,
				posts: action.payload.length ? action.payload : []
			};
		} 
		case FETCH_CLIENT_FULFILLED: {
			const { posts } = state;
			let clientPost = find(posts, flow(property('clients'), partialRight(some, action.payload.id)));
			let index = findIndex(posts, flow(property('clients'), partialRight(some, action.payload.id))); 
			clientPost.clientObj = action.payload;
			posts.splice(index, 1, clientPost);
			return {
				...state,
				fetching: false,
				posts: posts
			};
		}
		case FETCH_MEDIA_FULFILLED: {
			const { posts } = state;
			let mediaPost = find(posts, { featured_media: action.payload.id });
			let index = findIndex(posts, { featured_media: action.payload.id });
			mediaPost.featured_object = action.payload;
			posts.splice(index, 1, mediaPost);
			return {
				...state,
				fetching: false,
				posts: posts
			};
		}  
		default:
			return state;
	}
}
