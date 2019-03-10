import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Helmet from "react-helmet";
import scrollToElement from 'scroll-to-element';
import _find from 'lodash/find';

// Deps
import PageIntro from "../components/sections/page-intro";
import Main from "../components/Main";
import { getPage } from "../redux/actions/pages";

class Page extends Component {
	componentDidMount() {
		scrollToElement('.header');
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			scrollToElement('.header');
			return this.props.getPage({ slug: this.props.match.params.slug });
		}
	}

	shouldComponentUpdate(nextProps) {
		return (this.props.selectedPage !== nextProps.selectedPage)
	}

	render() {
		const { selectedPage, location: { pathname } } = this.props;
		const title = selectedPage && selectedPage.title.rendered;

		const meta = {
			title,
			canonical: "https://www.iambican.com" + pathname
		};

		let posts = [];
		posts.push(selectedPage);
		posts = posts.filter(el => el != null); // Dirty

		return (
			<React.Fragment>
				<Helmet>
					<title>{meta.title}</title>
					<link rel="canonical" href={meta.canonical} />
				</Helmet>
				<div id="content" className="content content--page">
					<PageIntro pageTitle={title} />
					<Main posts={posts} isSingle={true} loading={!selectedPage} />
				</div>
			</React.Fragment>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = (store, props) => {
	const { pages } = store;
	const { slug } = props.match.params;
	let selectedPage = _find(pages, { slug });

	return ({ selectedPage });
};

// mapDispatchToProps -> getPage
const mapDispatchToProps = dispatch => bindActionCreators({ getPage }, dispatch);

// Server Side Stuff
const frontload = async props => await props.getPage({ slug: props.match.params.slug });

// Export container while connected to store with frontload
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Page)
);
