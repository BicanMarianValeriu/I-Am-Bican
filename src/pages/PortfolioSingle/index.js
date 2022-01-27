import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import _find from 'lodash/find';

// Deps
import Main from './../../components/General/Main';
import Navigation from './components/Navigation';
import Empty from './Empty';
import { getProjects } from './../../redux/actions/projects';
import { getMetaTags } from './../../utilities/wordpress/wpPost';

// SCSS 
import './../../static/scss/pages/_portfolio-single.scss';

const Portfolio = (props) => {
	const { location: { pathname }, match: { params: { slug } } } = props;

	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		return dispatch(getProjects({ slug }));
	}, [dispatch, slug]);

	const selectedProject = useSelector(({ projects }) => _find(projects, { slug }));

	const entry = selectedProject || {};
	const tags = getMetaTags(selectedProject, pathname);

	return (
		<>
			<Helmet {...tags} />
			<div id="content" className="content content--portfolio content--single">
				<Navigation {...entry} />
				<Main posts={[selectedProject]} isSingle={true} loading={!selectedProject} loader={Empty} />
			</div>
		</>
	);
}

// Export container
export default Portfolio;
