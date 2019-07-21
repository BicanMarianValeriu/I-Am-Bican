import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Helmet from "react-helmet";
import _find from 'lodash/find';

// Deps
import PageIntro from "../components/Sections/page-intro";
import Main from "../components/General/Main";
import { getPage, updatePages } from "../redux/actions/pages";
import { requestApi } from "../redux/actions/api";

class Page extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			const { match: { params: { slug } }, getPage } = this.props
			window.scrollTo(0, 0);
			return getPage({ slug });
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
			description: selectedPage && selectedPage.yoast_meta.description,
			canonical: "https://www.iambican.com" + pathname
		};

		let posts = [];
		posts.push(selectedPage);
		posts = posts.filter(el => el != null); // Dirty

		return (
			<React.Fragment>
				<Helmet
					title={meta.title}
					meta={[
						meta.description ? { name: 'description', content: meta.description } : {}
					]}
					link={[
						meta.canonical ? { rel: 'canonical', href: meta.canonical } : {}
					]}
				/>
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
	const { match: { params: { slug } } } = props;
	const selectedPage = _find(pages, { slug });

	return ({ selectedPage });
};

// mapDispatchToProps -> getPage
const mapDispatchToProps = dispatch => bindActionCreators({ getPage, updatePages }, dispatch);

// Server Side Stuff
const frontload = async props => {
	const { match: { params: { slug } }, updatePages } = props;
	const data = await requestApi.get(`wp/v2/pages?slug=${slug}`).then(req => req.data[0]);
	return updatePages(data);
}

// Export container while connected to store with frontload
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Page)
);
