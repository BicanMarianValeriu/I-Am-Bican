import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useQuery } from '@redux-requests/react';

// Deps
import Empty from './Empty';
import Main from './../../components/General/Main';
import Navigation from './components/Navigation';
import { getProjects, GET_PROJECTS } from './../../redux/actions/projects';
import { getMetaTags } from './../../utilities/wordpress/wpPost';

// SCSS 
import './../../static/scss/pages/_portfolio-single.scss';

const Portfolio = (props) => {
	const { location: { pathname }, match: { params: { slug } } } = props;

	const dispatch = useDispatch();
	const [project, setProject] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		return dispatch(getProjects({ slug }));
	}, [dispatch, slug]);

	const { data, pending } = useQuery({ type: GET_PROJECTS });

	useEffect(() => {
		if (data) {
			setProject(data.pop());
			setLoading(false);
		}
	}, [data]);

	useEffect(() => {
		if (pending) {
			setLoading(true);
		}
	}, [pending]);

	return (
		<>
			<Helmet {...getMetaTags(project, pathname)} />
			<div id="content" className="content content--portfolio content--single">
				<Navigation {...project} loading={loading} />
				<Main posts={[project]} loading={loading} loader={Empty} />
			</div>
		</>
	);
}

// Export container
export default Portfolio;
