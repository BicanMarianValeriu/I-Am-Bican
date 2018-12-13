// The basics
import React from 'react';
import Helmet from 'react-helmet';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Switch } from 'react-router';
import routes from './routes';

const App = () => {
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
};

export default App;