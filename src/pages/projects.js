import React, { Component } from "react";
import PageIntro from "../components/sections/page-intro";
import Main from "../components/Main/index";
import { fetchDispatcher, FETCH_POSTS_FULFILLED } from "../api/actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";

// Server Side Stuff
const frontload = async props =>
	await props.fetchDispatcher(
		"wp/v2/portfolio",
		{ per_page: 10 },
		{ success: FETCH_POSTS_FULFILLED }
	);

class Projects extends Component {
	componentDidUpdate() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div id="content" className="content">
				<PageIntro pageTitle="Portfolio" />
				<Main posts={this.props.posts} />
			</div>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = store => {
	const {
		api: { posts }
	} = store;
	return { posts };
};

// Connect fetchDispatch function to props.fetchDispatch
const mapDispatchToProps = dispatch => bindActionCreators({ fetchDispatcher }, dispatch);

// Export container while connected to store and SSR
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	frontloadConnect(frontload, {
		onMount: true,
		onUpdate: false
	})(Projects)
);
