import React, { Component } from "react";
import Helmet from "react-helmet";
import AboutMe from "../components/sections/home/AboutMe";
import AboutExperience from "../components/sections/home/AboutExperience";
import AboutSkills from '../components/sections/home/AboutSkills'; 
import scrollToElement from 'scroll-to-element';

export default class Home extends Component {
	componentDidMount() {
		scrollToElement('.header');
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
					<AboutSkills /> 
				</div>
			</React.Fragment>
		);
	}
}
