import React, { Component } from "react";
import Helmet from "react-helmet";
// Deps
import PrevNext from "../components/Portfolio/PrevNext";
import Main from "../components/Main/index";
import { fetchDispatcher, FETCH_POSTS_FULFILLED } from "../api/actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";
import scrollToElement from 'scroll-to-element';

// SCSS
import "./../static/scss/components/_portfolio-prev-next.scss";
import "./../static/scss/components/_entry-portfolio.scss";

// Server Side Stuff
const frontload = async props => await props.fetchDispatcher(
	"wp/v2/portfolio",
	{ slug: props.match.params.slug },
	{ success: FETCH_POSTS_FULFILLED }
);

class Portfolio extends Component {
	componentDidMount() {
		scrollToElement('.header');
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			scrollToElement('.header');
			this.props.fetchDispatcher(
				'wp/v2/portfolio',
				{ slug: this.props.match.params.slug },
				{ success: FETCH_POSTS_FULFILLED }
			); 
		}
	}

	shouldComponentUpdate(nextProps) {
		return (JSON.stringify(this.props) !== JSON.stringify(nextProps))
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
					<PrevNext posts={this.props.posts} />
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
