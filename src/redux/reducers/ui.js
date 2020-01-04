import { 
	SHOW_LOADING, HIDE_LOADING,
	SHOW_QA_LOADING, HIDE_QA_LOADING,
	SHOW_ENTRY_LOADING, HIDE_ENTRY_LOADING,
	SHOW_USER_LOADING, HIDE_USER_LOADING 
} from "../actions/ui"; 

export default function uiReducer(state = { 
	pending: false, 
	pendingQA: false,
	pendingEntry: true,
	pendingUser: false,
}, action) {
	switch (action.type) {
		case SHOW_LOADING: return { ...state, pending: true };
		case HIDE_LOADING: return { ...state, pending: false };
		case SHOW_QA_LOADING: return { ...state, pendingQA: true };
		case HIDE_QA_LOADING: return { ...state, pendingQA: false };
		case SHOW_ENTRY_LOADING: return { ...state, pendingEntry: true };
		case HIDE_ENTRY_LOADING: return { ...state, pendingEntry: false };
		case SHOW_USER_LOADING: return { ...state, pendingUser: true };
		case HIDE_USER_LOADING: return { ...state, pendingUser: false };
		default: return state;
	}
} 