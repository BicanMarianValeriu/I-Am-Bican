// Deps
import { createStore } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history'; 

// Reducers
import createReducers from './reducers';

// Middlewares
import createEnhancers from './middlewares'; 
import { isServer } from './../utilities/helpers';

// Default
const store = (url = '/') => {
	// Create a history depending on the environment
	const history = isServer ? createMemoryHistory({ initialEntries: [url] }) : createBrowserHistory();
	const enhancers = [];

	// Dev tools are helpful not on server but on development
	if (process.env.NODE_ENV === 'development' && !isServer) {
		const devToolsExtension = window.devToolsExtension;
		if (typeof devToolsExtension === 'function') enhancers.push(devToolsExtension());
	}

	const reducers = createReducers({ history });
	const composedEnhancers  = createEnhancers({ history, enhancers });

	// Do we have preloaded state available? Great, save it.
	const initialState = !isServer ? window.__PRELOADED_STATE__ : {};
	if (!isServer) delete window.__PRELOADED_STATE__;

	// Create the store
	const store = createStore(reducers, initialState, composedEnhancers );

	return { store, history };
};

export default store;