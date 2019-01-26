import React, { Component } from "react";
import Helmet from "react-helmet";
// Deps
import PrevNext from "../components/Portfolio/PrevNext";
import Main from "../components/Main/index";
import { fetchDispatcher, FETCH_POSTS_FULFILLED } from "../api/actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";

// Server Side Stuff
const frontload = async props => await props.fetchDispatcher(
	"wp/v2/portfolio",
	{ slug: props.match.params.slug },
	{ success: FETCH_POSTS_FULFILLED }
);

class Portfolio extends Component {
	componentWillReceiveProps(nextProps) {
		if (this.props.location.pathname !== nextProps.location.pathname) {
			return this.props.dispatch(fetchDispatcher(
				'wp/v2/portfolio',
				{ slug: nextProps.match.params.slug },
				{ success: FETCH_POSTS_FULFILLED }
			));
		}
	}

	shouldComponentUpdate(nextProps) {
		return (JSON.stringify(this.props) !== JSON.stringify(nextProps))
	}

	componentDidUpdate() {
		window.scrollTo(0, 0);
	} 
 
	render() {
		const entry = this.props.posts[0];
		const { location: { pathname } } = this.props;
		const meta = {
			title: (entry && entry.yoast_meta.title) || (entry && entry.title.rendered),
			description: entry && entry.yoast_meta.description,
			canonical: "http://www.iambican.com" + pathname
		};

		return (
			<React.Fragment>
				<Helmet>
					<title>{meta.title}</title>
					<link rel="canonical" href={meta.canonical} />
					{meta.description && <meta name="description" content={meta.description} />}
				</Helmet>
				<div id="content" className="content">
					<PrevNext />
					<Main posts={this.props.posts} isSingle={true} />
				</div>
			</React.Fragment>
		);
	}
}

// Binds Query / Query Result
const mapStateToProps = store => {
	const { api: { posts } } = store;
	return { posts };
};

// Connect fetchDispatch function to props.fetchDispatch
const mapDispatchToProps = dispatch => bindActionCreators({ fetchDispatcher }, dispatch);

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Portfolio)
);
