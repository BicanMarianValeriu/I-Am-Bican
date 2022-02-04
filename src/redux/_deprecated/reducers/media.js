import { UPDATE_MEDIA } from './../actions/media';
import _findIndex from 'lodash/findIndex';

export default function mediaReducer(state = [], action) {
	switch (action.type) {
		case UPDATE_MEDIA: {
			if (_findIndex(state, { id: action.payload.id }) !== -1) return state;
			return [...state, action.payload];
		}
		default: return state;
	}
} 