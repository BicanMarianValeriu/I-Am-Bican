import { UPDATE_CLIENTS } from './../actions/clients';

export default function clientsReducer(state = [], action) {
	switch (action.type) {
		case UPDATE_CLIENTS: {
			return [...state, ...action.payload];
		}
		default: return state;
	}
} 