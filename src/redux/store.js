// Deps
import { createStore } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';

// Reducers
import createReducers from './reducers';

// Middlewares
import createEnhancers from './middlewares';
import { isServer } from './../utilities/helpers';
import { requestApi } from './actions/api';

// Default
const store = (url = '/') => {
	const { requestsReducer, requestsMiddleware, requestsPromise } = handleRequests({
		driver: createDriver(requestApi),
		ssr: isServer ? 'server' : 'client',
	});

	// Create a history depending on the environment
	const history = isServer ? createMemoryHistory({ initialEntries: [url] }) : createBrowserHistory();
	const enhancers = [];

	// Dev tools are helpful not on server but on development
	if (process.env.NODE_ENV === 'development' && !isServer) {
		const devToolsExtension = window.devToolsExtension;
		if (typeof devToolsExtension === 'function') enhancers.push(devToolsExtension());
	}

	const reducers = createReducers({ history, requestsReducer });
	const composedEnhancers = createEnhancers({ history, enhancers, requestsMiddleware });

	// Do we have preloaded state available? Great, save it.
	const initialState = !isServer ? window.__PRELOADED_STATE__ : {};
	if (!isServer) delete window.__PRELOADED_STATE__;

	// Create the store
	const store = createStore(reducers, initialState, composedEnhancers);

	return { store, history, requestsPromise };
};

export default store;