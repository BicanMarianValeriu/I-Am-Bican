// Express requirements
import fs from "fs";
import path from "path";
import LRUCache from 'lru-cache';

// React requirements
import React from "react";
import Helmet from "react-helmet";
import Loadable from "react-loadable";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router";
import { Frontload, frontloadServerRender } from "react-frontload";

// Our store, entrypoint, and manifest
import App from "./../src/App";
import routes from './../src/routes';
import configStore from "./../src/redux/store";
import manifest from "./../build/asset-manifest.json";
import { injectHTML, formatScripts, getCacheKey } from "./helpers";
import { authToken, userLogout } from './../src/redux/actions/user';

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
	max: 100 * 1024 * 1024,
	length: n => n.length,
	maxAge: 1000 * 60 * 60 * 24 * 7
});

/**
 * React / Expres Routing function
 * @description {
 * - matches a frontend request to a route
 * - parses index template and injects server data
 * - sends html string to frontend request
 * }
 */
export default (req, res, next) => {
	const match = routes.find(route => matchPath(req.path, {
		path: route.path,
		exact: true,
	}));

	if (!match) {
		next();
		return;
	}

	/**
	 * Get Index File
	 */
	const indexFile = path.resolve(__dirname, './../build/index.html');

	/**
	 * Parse Template and inject data
	 */
	fs.readFile(indexFile, 'utf8', async (err, dataHTML) => {
		// If there's an error... serve up something nasty
		if (err) {
			console.error('Read Error', err);
			return res.status(404).end();
		}

		// If we have a page in the cache, let's serve it
		const cacheKey = getCacheKey(req);
		if (ssrCache.has(cacheKey)) {
			res.setHeader('X-Cache', 'HIT');
			res.send(ssrCache.get(cacheKey));
			return;
		}

		const { store } = configStore(req.url);

		// If the user has a cookie (i.e. they're signed in) - set them as the current user 
		if ('authToken' in req.cookies) authToken(req.cookies.authToken);
		else userLogout();

		const location = req.url;
		const context = {};
		const modules = [];

		const render = dryRun => {
			console.log(dryRun
				? `[iambican] ${location} - loading data...`
				: `[iambican] ${location} - all data loaded, rendering markup...`
			);

			const markupString = renderToString(
				<Loadable.Capture report={m => modules.push(m)}>
					<Provider store={store}>
						<StaticRouter location={location} context={context}>
							<Frontload isServer={true}>
								<App />
							</Frontload>
						</StaticRouter>
					</Provider>
				</Loadable.Capture>
			);

			return markupString;
		};

		await frontloadServerRender(render).then(markupString => {
			// Redirect
			const redirect = context.url || false;

			if (redirect) {
				// Handle Redirect
				res.writeHead(302, { Location: redirect });
				res.end();
			} else {
				// SEO
				const helmet = Helmet.renderStatic();

				// Pass all this nonsense into our HTML formatting function above  
				const html = injectHTML(dataHTML, {
					html: helmet.htmlAttributes.toString(),
					title: helmet.title.toString(),
					meta: helmet.meta.toString(),
					body: markupString,
					scripts: formatScripts(manifest, modules),
					state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
				});

				// Done, but also let's cache this page
				ssrCache.set(cacheKey, html);
				res.setHeader('X-Cache', 'MISS');
				res.send(html);
			}
		});
	});
};
