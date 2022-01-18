import 'react-app-polyfill/ie11';

// Main React
import React from 'react';
import Loadable from 'react-loadable';
import ReactGA from 'react-ga';
import { render, hydrate } from 'react-dom';
import { FacebookProvider } from 'react-facebook';
import { ConnectedRouter } from 'connected-react-router';
import { Frontload } from 'react-frontload';
import { Provider } from 'react-redux';

import App from './App';
import createStore from './redux/store';
import './static/scss/style.scss';

// Create a store and get back itself and its history object
const { store, history } = createStore();

history.listen(location => {
	ReactGA.initialize('UA-80159913-6');
	const { pathname } = location;
	ReactGA.set({ page: pathname });
	ReactGA.pageview(pathname);
});

const Application = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Frontload noServerRender={true}>
				<FacebookProvider appId="918168974866485">
					<App />
				</FacebookProvider>
			</Frontload>
		</ConnectedRouter>
	</Provider>
);

const root = document.getElementById('wecodeartReact');
if (root.hasChildNodes() === true) Loadable.preloadReady().then(() => hydrate(Application, root));
else render(Application, root);