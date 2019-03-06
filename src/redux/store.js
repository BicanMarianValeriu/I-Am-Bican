// Deps
import { createBrowserHistory, createMemoryHistory } from 'history';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { routerMiddleware, connectRouter } from 'connected-react-router';

// Reducers
import reducer from "../redux/reducers/reducers";

// A nice helper to tell us if we're on the server
export const isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

export default (url = '/') => {
	// Create a history depending on the environment
	const history = isServer ? createMemoryHistory({ initialEntries: [url] }) : createBrowserHistory();
	const enhancers = [];

	var middlewaresArr = [
		routerMiddleware(history),
		promise(),
		thunk
	];

	// Dev tools are helpful not on server but on development
	if (process.env.NODE_ENV === 'development' && !isServer) {
		const devToolsExtension = window.devToolsExtension;
		if (typeof devToolsExtension === 'function') enhancers.push(devToolsExtension()); 
		middlewaresArr.push(createLogger());
	}
	
	// Do we have preloaded state available? Great, save it.
	const initialState = !isServer ? window.__PRELOADED_STATE__ : {}; 
	if (!isServer) delete window.__PRELOADED_STATE__; 

	// Create the store
	const store = createStore(
		combineReducers({ router: connectRouter(history), api: reducer }),
		initialState, // Preloaded from server
		compose(applyMiddleware(...middlewaresArr), ...enhancers)
	);

	return { store, history };
};