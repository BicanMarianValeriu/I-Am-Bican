import { UPDATE_PROJECTS } from "../actions/projects";
import _filter from 'lodash/filter';
import _findIndex from 'lodash/findIndex';

export default function projectsReducer(state = [], action) {
	switch (action.type) {
		case UPDATE_PROJECTS: {
			let elemsToAdd = _filter(action.payload, o => _findIndex(state, { id: o.id }) === -1);
			return [...state, ...elemsToAdd];
		}

		default: return state;
	}
} 