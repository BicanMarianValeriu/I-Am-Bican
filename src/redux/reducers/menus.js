import { UPDATE_MENUS } from './../actions/menus';
import _findIndex from 'lodash/findIndex';

export default function pagesReducer(state = [], action) {
	switch (action.type) {
		case UPDATE_MENUS: {
			if (_findIndex(state, { ID: action.payload.ID }) !== -1) return state;
			return [...state, action.payload];
		}
		default: return state;
	}
} 