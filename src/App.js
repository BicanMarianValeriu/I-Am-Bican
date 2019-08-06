// The basics
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import icons, { brands } from './utilities/fontawesome';
import { browserName, isMobile } from 'react-device-detect';

import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = props => {
	const { ui: { pending } } = props;

	library.add(icons);
	library.add(brands);
	dom.watch();

	useEffect(() => {
		const documentHTML = document.documentElement;
		documentHTML.classList.add(browserName);

		if (isMobile) documentHTML.classList.add('is-mobile');

		if (pending === false) {
			documentHTML.classList.remove('overflow-hidden');
		} else {
			documentHTML.classList.add('overflow-hidden');
		}
	}, [pending]);

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

const mapStateToProps = store => {
	const { ui } = store;
	return ({ ui });
};

export default connect(mapStateToProps)(App);