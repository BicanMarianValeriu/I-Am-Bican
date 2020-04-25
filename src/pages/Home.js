import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import AboutMe from "../components/Sections/Home/AboutMe";
import Experience from "../components/Sections/Home/Experience";
import Skills from '../components/Sections/Home/Skills';
import { connect } from "react-redux";

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