import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { Helmet } from 'react-helmet';
import _find from 'lodash/find';

// Deps
import Intro from './components/Intro';
import Main from './../../components/General/Main';
import { requestApi } from './../../redux/actions/api';
import { getPage, updatePages } from './../../redux/actions/pages';
import { getMetaTags } from './../../utilities/wordpress/wpPost';

const Page = (props) => {
	const { getPage, selectedPage, location: { pathname }, match: { params: { slug } } } = props;

	useEffect(() => {
		window.scrollTo(0, 0);
		if(selectedPage) return;
		return getPage(slug);
	}, [pathname, selectedPage, getPage, slug]);

	const { title: { rendered: pageTitle } = {} } = selectedPage || {};
	const tags = getMetaTags(selectedPage, pathname);

	return (
		<>
			<Helmet {...tags} />
			<div id="content" className="content content--page content--single">
				<Intro title={pageTitle} />
				<Main posts={[selectedPage]} className="container py-3 py-lg-5" isSingle={true} loading={!selectedPage} />
			</div>
		</>
	);
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
const frontload = async ({ match: { params: { slug } }, updatePages }) => {
	return await requestApi({ url: `wp/v2/pages`, params: { slug } }).then(({ data }) => updatePages(data));
};

// Connect to Frontload SSR
const PageConnect = frontloadConnect(frontload)(Page);

// Export container while connected to store with frontload
export default connect(mapStateToProps, mapDispatchToProps)(PageConnect);
