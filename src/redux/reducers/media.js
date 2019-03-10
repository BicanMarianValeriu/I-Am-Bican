import { UPDATE_MEDIA } from "../actions/media";
import _filter from 'lodash/filter';
import _findIndex from 'lodash/findIndex';

export default function mediaReducer(state = [], action) {
	switch (action.type) {
		case UPDATE_MEDIA: {
			let elemsToAdd = _filter(action.payload, o => _findIndex(state, { id: o.id }) === -1);
			return [...state, ...elemsToAdd];
		}
		default: return state;
	}
} 