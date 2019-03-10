import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";

import { getProjects } from "../redux/actions/projects";  
import scrollToElement from 'scroll-to-element';
import Main from "../components/Main";
import PageIntro from "../components/sections/page-intro";

// SCSS 
import "./../static/scss/pages/_portfolio-archive.scss"; 

class Projects extends Component {

	componentDidMount() {
		scrollToElement('.header');
	} 

	renderNavigation() {
		return (
			<div className="projects-nav">
				<div className="projects-nav__arrows">
					<button className="projects-nav__arrow projects-nav__arrow--prev">
						<i className="fas fa-arrow-left fa-2x"></i>
					</button>
					<button className="projects-nav__arrow projects-nav__arrow--next">
						<i className="fas fa-arrow-right fa-2x"></i>
					</button>
				</div >
			</div>
		);
	}

	render() {
		const { projects, location: { pathname } } = this.props;
		const meta = {
			title: 'View My Portfolio',
			description: 'View my best work and see what resources I`ve used to do it',
			canonical: "https://www.iambican.com" + pathname
		};

		const loading = {
			elements: 6,
			classes: { outer: 'col-md-6 col-lg-4' }
		};

		return (
			<React.Fragment>
				<Helmet>
					<title>{meta.title}</title>
					<link rel="canonical" href={meta.canonical} />
					{meta.description && <meta name="description" content={meta.description} />}
				</Helmet>
				<div id="content" className="content content--projects">
					<PageIntro pageTitle='Portfolio' />
					<Main posts={projects} isSingle={false} options={{ loading: loading }} />
				</div>
			</React.Fragment>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = store => {
	const { projects } = store;
	return { projects };
};

// Dispatch to props.getProjects
const mapDispatchToProps = dispatch => bindActionCreators({ getProjects }, dispatch);

// Server Side Stuff
const frontload = async props => await props.getProjects({ per_page: 10 });

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Projects)
);
