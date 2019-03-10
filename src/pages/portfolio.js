import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";
import _find from 'lodash/find';
import scrollToElement from 'scroll-to-element';

// Deps
import PrevNext from "../components/Portfolio/PrevNext";
import Main from "../components/Main";
import { getProjects } from "../redux/actions/projects";

// SCSS 
import "./../static/scss/pages/_portfolio-single.scss";

class Portfolio extends Component {
	componentDidMount() {
		scrollToElement('.header');
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			scrollToElement('.header');
			this.props.getProjects({ slug: this.props.match.params.slug });
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
				<Helmet>
					<title>{meta.title}</title>
					<link rel="canonical" href={meta.canonical} />
					{meta.description && <meta name="description" content={meta.description} />}
				</Helmet>
				<div id="content" className="content">
					<PrevNext current={selectedProject} />
					<Main posts={posts} isSingle={true} />
				</div>
			</React.Fragment>
		);
	}
}

// Binds Query / Query Result
const mapStateToProps = (store, props) => {
	const { projects } = store;
	const { slug } = props.match.params;
	let selectedProject = _find(projects, { slug });

	return { selectedProject };
};

// Connect fetchDispatch function to props.fetchDispatch
const mapDispatchToProps = dispatch => bindActionCreators({ getProjects }, dispatch);

// Server Side Stuff
const frontload = async props => await props.getProjects({ slug: props.match.params.slug });

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Portfolio)
);
