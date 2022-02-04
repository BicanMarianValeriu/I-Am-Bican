import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useQuery } from '@redux-requests/react';

// Deps
import Intro from './components/Intro';
import Main from './../../components/General/Main';
import { getPage, GET_PAGE } from './../../redux/actions/pages';
import { getMetaTags } from './../../utilities/wordpress/wpPost';

const Page = (props) => {
	const { match: { params: { slug } }, location: { pathname } } = props;

	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		return dispatch(getPage(slug));
	}, [dispatch, slug]);

	const { data } = useQuery({
		type: GET_PAGE,
		requestKey: slug,
	});

	const page = !data ? false : data.pop();

	const { title: { rendered: pageTitle } = {} } = page || {};

	return (
		<>
			<Helmet {...getMetaTags(page, pathname)} />
			<div id="content" className="content content--page content--single">
				<Intro title={pageTitle} />
				<Main posts={[page]} className="container py-3 py-lg-5" loading={!page} />
			</div>
		</>
	);
}

// Export container
export default Page;
