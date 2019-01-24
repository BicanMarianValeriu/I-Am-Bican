// The basics
import React, { Component }  from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router';
import { dom } from '@fortawesome/fontawesome-svg-core'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import icons, { brands } from './utilities/svg-icons';
import routes from './api/routes'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default class App extends Component {
	componentDidMount() {
		// Add Icons to FA Library
		library.add(icons);
		library.add(brands);
		dom.watch();
	}

	render() {
		return (
			<React.Fragment>
				<Helmet titleTemplate="%s - IAmBican">
					<title>Howdy</title>
					<meta name="description"
						content="WordPress/React Developer at myZone/AM2Studio. You can now hire me for your website/projects." />
				</Helmet>
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