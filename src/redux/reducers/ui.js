import { SHOW_LOADING, HIDE_LOADING } from "../actions/ui";

const initialUiState = { pending: false };

export default function uiReducer(state = initialUiState, action) {
	switch (action.type) {
		case SHOW_LOADING: return { ...state, pending: true };
		case HIDE_LOADING: return { ...state, pending: false };
		default: return state;
	}
} 