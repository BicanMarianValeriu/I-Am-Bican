import React, { Component } from "react";
import Helmet from "react-helmet";
import AboutMe from "../components/sections/home/AboutMe";
import AboutExperience from "../components/sections/home/AboutExperience";
import AboutSkills from '../components/sections/home/AboutSkills';  

export default class Home extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const meta = {
			title: "WordPress/React Developer", 
			canonical: "https://www.iambican.com/"
		};

		return (
			<React.Fragment>
				<Helmet
					title={meta.title} 
					link={[
						meta.canonical ? { rel: 'canonical', href: meta.canonical } : {}
					]}
				/> 
				<div id="content" className="content">
					<AboutMe />
					<AboutExperience />
					<AboutSkills /> 
				</div>
			</React.Fragment>
		);
	}
}
