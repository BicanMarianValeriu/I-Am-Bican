import {
	FETCHING,
	FETCH_MENU_FULFILLED,
	FETCH_POSTS_FULFILLED,
	FETCH_CLIENTS_FULFILLED,
	FETCH_MEDIA_FULFILLED,
	FETCH_REJECTED,
	SET_HAS_MORE_POSTS,
	FETCH_USER_FULFILLED,
	LOGOUT_USER
} from "../actions/actions";

import { find, findIndex } from "lodash";

const initialState = {
	user: {
		authentificated: false
	},
	posts: [], 
	menus: [],
	fetching: true,
	hasMorePosts: false,
	error: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING: {
			return { ...state, fetching: true };
		}
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
		case FETCH_CLIENTS_FULFILLED: {
			return {
				...state,
				fetching: false,
				clients: action.payload.length ? action.payload : []
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
		case FETCH_MENU_FULFILLED: {
			var { menus } = state;
			if (menus === undefined) menus = [action.payload];

			return {
				...state,
				fetching: false,
				menus: [...menus, action.payload]
			};
		}
		case SET_HAS_MORE_POSTS: {
			return {
				...state,
				fetching: false,
				hasMorePosts: action.payload
			};
		}
		default:
			return state;
	}
}
