// The basics
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import icons, { brands } from './utilities/fontawesome';
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
	library.add(icons);
	library.add(brands);

	useEffect(() => {
		dom.watch();
	}, []);

	return (
		<React.Fragment>
			<Helmet
				titleTemplate="%s - IAmBican"
				meta={[
					{
						name: 'theme-color',
						content: '#2388ed'
					},
					{
						name: 'description',
						content: 'WordPress/React Developer at myZone/AM2Studio. You can now hire me for your website/projects.'
					}
				]}
			/>
			<Header />
			<Switch>
				{routes.map(({ path, exact, component: C, ...rest }, key) => (
					<Route
						key={key}
						path={path}
						exact={exact}
						render={(props) => (
							<C {...props} {...rest} />
						)}
					/>
				))}
			</Switch>
			<Footer />
		</React.Fragment>
	);
} 