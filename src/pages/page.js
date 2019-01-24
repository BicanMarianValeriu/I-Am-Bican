import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";
// Deps
import PageIntro from "../components/sections/page-intro";
import Main from "../components/Main/index";
import { fetchDispatcher, FETCH_POSTS_FULFILLED } from "../api/actions/actions";

// Server Side Stuff
const frontload = async props => await props.fetchDispatcher(
	'wp/v2/pages',
	{ slug: props.match.params.slug },
	{ success: FETCH_POSTS_FULFILLED }
);

class Page extends Component {
	componentDidUpdate() {
		window.scrollTo(0, 0);
	} 

	render() {
		const page = this.props.posts[0];
		var title = page && page.title.rendered;
		const { pathname } = this.props.location;
		const meta = {
			title,
			canonical: "http://www.iambican.com" + pathname
		};

		return (
			<React.Fragment>
				<Helmet>
					<title>{meta.title}</title>
					<link rel="canonical" href={meta.canonical} />
				</Helmet>
				<div id="content" className="content content--page">
					<PageIntro pageTitle={title} />
					<Main posts={this.props.posts} isSingle={true} />
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

// Export container while connected to store with frontload
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Page)
);
