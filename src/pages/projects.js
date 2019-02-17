import React, { Component } from "react";
import Helmet from "react-helmet";

import Main from "../components/Main/index";
import PageIntro from "../components/sections/page-intro";
import { fetchDispatcher, FETCH_POSTS_FULFILLED } from "../api/actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";

// SCSS 
import "./../static/scss/pages/_portfolio.scss"; 

// Server Side Stuff
const frontload = async props => await props.fetchDispatcher(
	"wp/v2/portfolio",
	{ per_page: 10 },
	{ success: FETCH_POSTS_FULFILLED }
);

class Projects extends Component {

	componentDidUpdate() {
		window.scrollTo(0, 0);
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
		const { location: { pathname } } = this.props;
		const meta = {
			title: 'Portfolio',
			description: 'View my best work and see what resources I`ve used to do it',
			canonical: "http://www.iambican.com" + pathname
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
					<Main posts={this.props.posts} />
				</div>
			</React.Fragment>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = store => {
	const { api: { posts } } = store;
	return { posts };
};

// Connect fetchDispatch function to props.fetchDispatch
const mapDispatchToProps = dispatch => bindActionCreators({ fetchDispatcher }, dispatch);

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Projects)
);
