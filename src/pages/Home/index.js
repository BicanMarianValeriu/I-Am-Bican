import React from 'react';
import { Helmet } from 'react-helmet';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';

// SCSS 
import "./../../static/scss/pages/_home.scss";

const Home = () => {
	const meta = {
		title: "WordPress/React Developer",
		canonical: "https://www.iambican.com/"
	};

	return (
		<>
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
		</>
	);
}


export default Home;