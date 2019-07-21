import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";
import _find from 'lodash/find';

// Deps
import PrevNext from "../components/Portfolio/PrevNext";
import Main from "../components/General/Main";
import { getProjects, updateProjects } from "../redux/actions/projects";
import { requestApi } from "../redux/actions/api";

// SCSS 
import "./../static/scss/pages/_portfolio-single.scss";

class Portfolio extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			const { match: { params: { slug } }, getProjects } = this.props
			window.scrollTo(0, 0);
			return getProjects({ slug });
		}
	}

	shouldComponentUpdate(nextProps) {
		return (this.props.selectedProject !== nextProps.selectedProject)
	}

	render() {
		const { selectedProject, location: { pathname } } = this.props;
		const seoTitle = selectedProject && selectedProject.yoast_meta.title;

		const meta = {
			title: seoTitle || (selectedProject && selectedProject.title.rendered),
			description: selectedProject && selectedProject.yoast_meta.description,
			canonical: "https://www.iambican.com" + pathname
		};

		let posts = [];
		posts.push(selectedProject);
		posts = posts.filter(el => el != null); // Dirty

		return (
			<React.Fragment>
				<Helmet
					title={meta.title}
					meta={[
						{ name: 'theme-color', content: '#fbfbfb' },
						meta.description ? { name: 'description', content: meta.description } : {}
					]}
					link={[
						meta.canonical ? { rel: 'canonical', href: meta.canonical } : {}
					]}
				/>
				<div id="content" className="content">
					<PrevNext current={selectedProject} />
					<Main posts={posts} isSingle={true} />
				</div>
			</React.Fragment >
		);
	}
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
const frontload = async props => {
	const { match: { params: { slug } }, updateProjects } = props;
	const data = await requestApi.get(`wp/v2/portfolios?slug=${slug}`).then(req => req.data);
	return updateProjects(data);
}

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Portfolio)
);
