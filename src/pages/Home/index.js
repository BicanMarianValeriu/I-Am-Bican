import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';

class Home extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const meta = {
			title: "WordPress/React Developer",
			canonical: "https://www.iambican.com/"
		};

		return (
			<Fragment>
				<Helmet
					title={meta.title}
					link={[
						meta.canonical ? { rel: 'canonical', href: meta.canonical } : {}
					]}
				/>
				<div id="content" className="content">
					<AboutMe />
					<Experience />
					<Skills />
				</div>
			</Fragment>
		);
	}
}


export default connect()(Home);