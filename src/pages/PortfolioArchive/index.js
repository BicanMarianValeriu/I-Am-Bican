import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getQuery } from '@redux-requests/core';

import Main from './../../components/General/Main';
import Intro from './components/Intro';
import Empty from './Empty';
import { getProjects, GET_PROJECTS } from './../../redux/actions/projects';

// SCSS 
import './../../static/scss/pages/_portfolio-archive.scss';

const Projects = (props) => {
	const { location: { pathname } } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		return dispatch(getProjects());
	}, [dispatch]);

	const state = useSelector(state => state);

	const { data } = getQuery(state, {
		type: GET_PROJECTS,
	});

	const meta = {
		title: 'View My Portfolio',
		description: 'View my best work and see what resources I`ve used to create this amazing websites.',
		canonical: 'https://www.iambican.com' + pathname
	};

	const loading = {
		elements: 6,
		classes: ['col-md-6', 'col-lg-4']
	};

	return (
		<>
			<Helmet
				title={meta.title}
				meta={[
					meta.description ? { name: 'description', content: meta.description } : {}
				]}
				link={[
					meta.canonical ? { rel: 'canonical', href: meta.canonical } : {}
				]}
			/>
			<div id='content' className='content content--projects content--archive'>
				<Intro />
				<div className='container'>
					<Main className='row my-3 my-md-5 pt-5' posts={data || []} options={{ loading }} loader={Empty} />
				</div>
			</div>
		</>
	);
}

// Export container while connected to store and SSR
export default Projects;
