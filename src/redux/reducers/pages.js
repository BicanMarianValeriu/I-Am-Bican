import { UPDATE_PAGES } from './../actions/pages';
import _filter from 'lodash/filter';
import _findIndex from 'lodash/findIndex';

export default function pagesReducer(state = [], action) {
	switch (action.type) {
		case UPDATE_PAGES: {
			let elemsToAdd = _filter(action.payload, o => _findIndex(state, { id: o.id }) === -1);
			return [...state, ...elemsToAdd];
		}
		default: return state;
	}
} 