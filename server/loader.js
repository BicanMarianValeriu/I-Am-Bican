// Express requirements
import fs from "fs";
import path from "path";

// React requirements
import React from "react";
import Helmet from "react-helmet";
import Loadable from "react-loadable";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import { Frontload, frontloadServerRender } from "react-frontload";

// Our store, entrypoint, and manifest
import createStore from "./../src/redux/store";
import App from "./../src/App";
import manifest from "./../build/asset-manifest.json";
import { authToken, userLogout } from './../src/redux/actions/user';

// LOADER
export default (req, res) => {
	// Helper to inject HTML
	const injectHTML = (data, { html, title, meta, body, scripts, state }) => {
		data = data.replace('<html>', `<html ${html}>`);
		data = data.replace(/<title>.*?<\/title>/g, title);
		data = data.replace('</head>', `${meta}</head>`);
		data = data.replace(
			'<div id="wecodeartReact"></div>',
			`<div id="wecodeartReact">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
		);
		data = data.replace('</body>', scripts.join('') + '</body>');
		return data;
	};

	// Load in our HTML file from our build
	fs.readFile(path.resolve(__dirname, './../build/index.html'), 'utf8',
		(err, htmlData) => {
			// If there's an error... serve up something nasty
			if (err) {
				console.error('Read Error', err);
				return res.status(404).end();
			}

			// Create a store (with a memory history) from our current url
			const { store } = createStore(req.url);

			// If the user has a cookie (i.e. they're signed in) - set them as the current user 
			if ('authToken' in req.cookies) authToken(req.cookies.authToken);
			else userLogout();

			const location = req.url;
			const context = {};
			const modules = [];

			frontloadServerRender((context) => renderToString(
				<Loadable.Capture report={m => modules.push(m)}>
					<Provider store={store}>
						<StaticRouter location={location} context={context}>
							<Frontload isServer>
								<App />
							</Frontload>
						</StaticRouter>
					</Provider>
				</Loadable.Capture>
			)).then(renderedMarkup => {
				const redirect = context.url;

				if (redirect) {
					// If context has a url property, then we need to handle a redirection in Redux Router
					res.writeHead(302, { Location: redirect });
					res.end();
				} else {
					// Let's give ourself a function to load all our page-specific JS assets for code splitting
					const extractAssets = (assets, chunks) =>
						Object.keys(assets)
							.filter(asset => chunks.indexOf(asset.replace(".js", "")) > -1)
							.map(k => assets[k]);

					// Let's format those assets into pretty <script> tags
					const extraChunks = extractAssets(manifest, modules).map(
						c => `<script type="text/javascript" src="/${c.replace(/^\//, "")}"></script>`
					);

					// We need to tell Helmet to compute the right meta tags, title, and such
					const helmet = Helmet.renderStatic();

					// Pass all this nonsense into our HTML formatting function above  
					const html = injectHTML(htmlData, {
						html: helmet.htmlAttributes.toString(),
						title: helmet.title.toString(),
						meta: helmet.meta.toString(),
						body: renderedMarkup,
						scripts: extraChunks,
						state: JSON.stringify(store.getState()).replace(/</g, "\\u003c")
					});

					// We have all the final HTML, let's send it to the user already!
					res.send(html);
				}
			});
		}
	);
};
