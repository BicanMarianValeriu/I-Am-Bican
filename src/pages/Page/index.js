import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import _find from 'lodash/find';

// Deps
import Intro from './components/Intro';
import Main from './../../components/General/Main';
import { getPage } from './../../redux/actions/pages';
import { getMetaTags } from './../../utilities/wordpress/wpPost';

const Page = (props) => {
	const { match: { params: { slug } }, location: { pathname } } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		return dispatch(getPage(slug));
	}, [dispatch, slug]);

	const selectedPage = useSelector(({ pages }) => _find(pages, { slug }));
	
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

// Export container
export default Page;
