import { SHOW_LOADING, HIDE_LOADING, SHOW_USER_LOADING, HIDE_USER_LOADING } from "../actions/ui"; 

export default function uiReducer(state = { pending: false, pendingUser: false }, action) {
	switch (action.type) {
		case SHOW_LOADING: return { ...state, pending: true };
		case HIDE_LOADING: return { ...state, pending: false };
		case SHOW_USER_LOADING: return { ...state, pendingUser: true };
		case HIDE_USER_LOADING: return { ...state, pendingUser: false };
		default: return state;
	}
} 