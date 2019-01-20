import React, { Component } from "react";
import Helmet from "react-helmet";
import AboutMe from "./../components/sections/home/about-me";
import AboutExperience from "./../components/sections/home/experience";
import Skills from './../components/sections/home/skills';

export default class Home extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const meta = {
			title: "WordPress/React Developer",
			canonical: "http://www.iambican.com/"
		};

		return (
			<React.Fragment>
				<Helmet>
					<title>{meta.title}</title>
					<link rel="canonical" href={meta.canonical} />
				</Helmet>
				<div id="content" className="content">
					<AboutMe />
					<AboutExperience />
					<Skills />
				</div>
			</React.Fragment>
		);
	}
}
