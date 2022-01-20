import { API_REJECTED } from './../actions/api';

export default function reducer(state = [], action) {
	switch (action.type) {
		case API_REJECTED: {
			return { ...state, ...[{ text: action.payload }] };
		}
		default: return state;
	}
}
