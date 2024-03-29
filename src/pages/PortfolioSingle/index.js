import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import _find from 'lodash/find';

// Deps
import Main from './../../components/General/Main';
import Navigation from './components/Navigation';
import Empty from './Empty';
import { requestApi } from './../../redux/actions/api';
import { getProjects, updateProjects } from './../../redux/actions/projects';
import { getMetaTags } from './../../utilities/wordpress/wpPost';

// SCSS 
import './../../static/scss/pages/_portfolio-single.scss';

const Portfolio = (props) => {
	const { getProjects, selectedProject, location: { pathname }, match: { params: { slug } } } = props;

	useEffect(() => {
		window.scrollTo(0, 0);
		return getProjects(slug);
	}, [pathname, getProjects, slug]);

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

// Binds Query / Query Result
const mapStateToProps = (store, props) => {
	const { projects } = store;
	const { match: { params: { slug } } } = props;
	const selectedProject = _find(projects, { slug });

	return { selectedProject };
};

// Connect fetchDispatch function to props.fetchDispatch
const mapDispatchToProps = dispatch => bindActionCreators({ getProjects, updateProjects }, dispatch);

// Server Side Stuff
const frontload = async ({ match: { params: { slug } }, updateProjects }) => {
	return await requestApi({ url: 'wp/v2/portfolios', params: { slug } }).then(r => updateProjects(r.data));
};

// Connect to Frontload SSR
const PortfolioConnect = frontloadConnect(frontload, { onMount: true, onUpdate: false })(Portfolio);

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioConnect);
