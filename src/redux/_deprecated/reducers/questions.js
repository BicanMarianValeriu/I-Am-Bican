import { UPDATE_QA } from './../actions/questions';
import _filter from 'lodash/filter';
import _findIndex from 'lodash/findIndex';

export default function qaReducer(state = [], action) {
	switch (action.type) {
		case UPDATE_QA: {
			let elemsToAdd = _filter(action.payload, o => _findIndex(state, { id: o.id }) === -1);   
			return [...state, ...elemsToAdd];
		} 
		 
		default: return state;
	}
} 