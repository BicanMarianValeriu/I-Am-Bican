// The basics
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import icons, { brands } from './utilities/svg-icons';
import routes from './redux/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default class App extends Component {
	componentDidMount() {
		// Add Icons to FA Library
		library.add(icons);
		library.add(brands);
		dom.watch();

		// Window sizes
		var wecodeart = window.wecodeart = {};
		wecodeart.winsize = {};
		wecodeart.scrolling = false;

		const calcWinsize = () => wecodeart.winsize = { width: window.innerWidth, height: window.innerHeight };
		calcWinsize();
		window.addEventListener('resize', calcWinsize);
	}

	render() {
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
		)
	}
} 