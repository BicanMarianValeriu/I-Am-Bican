import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { frontloadConnect } from "react-frontload";
import Helmet from "react-helmet";
import _find from 'lodash/find';

// Deps
import PageIntro from "../components/Sections/page-intro";
import Main from "../components/General/Main";
import { requestApi } from "../redux/actions/api";
import { getPage, updatePages } from "../redux/actions/pages";
import { getMetaTags } from "../utilities/wordpress/wpPost";

class Page extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			const { match: { params: { slug } }, getPage } = this.props;
			window.scrollTo(0, 0);
			return getPage({ slug });
		}
	}

	shouldComponentUpdate(nextProps) {
		return (this.props.selectedPage !== nextProps.selectedPage);
	}

	render() {
		const { selectedPage, location: { pathname } } = this.props;
		const entry = selectedPage || {};
		const { title: { rendered: title = '' } = {} } = entry;

		return (
			<React.Fragment>
				<Helmet {...getMetaTags(entry, pathname)} />
				<div id="content" className="content content--page content--single">
					<PageIntro pageTitle={title} />
					<div className="container">
						<Main posts={[selectedPage]} className="py-3 py-md-5" isSingle={true} loading={!selectedPage} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = (store, props) => {
	const { pages, ui: { pending } } = store;
	const { match: { params: { slug } } } = props;
	const selectedPage = _find(pages, { slug });

	return ({ selectedPage, pending });
};

// mapDispatchToProps -> getPage
const mapDispatchToProps = dispatch => bindActionCreators({ getPage, updatePages }, dispatch);

// Server Side Stuff
const frontload = async props => {
	const { match: { params: { slug } }, updatePages } = props;
	const data = await requestApi.get(`wp/v2/pages?slug=${slug}`).then(req => req.data[0]);
	return updatePages(data);
};

// Export container while connected to store with frontload
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Page)
);
