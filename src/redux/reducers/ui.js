import { SHOW_LOADING, HIDE_LOADING } from "../actions/ui";

const initialUiState = { fetching: false };

export default function uiReducer(state = initialUiState, action) {
	switch (action.type) {
		case SHOW_LOADING: return { ...state, fetching: true };
		case HIDE_LOADING: return { ...state, fetching: false };
		default: return state;
	}
} 