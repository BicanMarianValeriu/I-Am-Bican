import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";
import PrevNext from './../components/Portfolio/Single/PrevNext';
import _find from 'lodash/find';

// Deps
import { Main } from "../components/General";
import { getProjects } from "../redux/actions/projects";
import { getMetaTags } from "../utilities/wordpress/wpPost";

// SCSS 
import "./../static/scss/pages/_portfolio-single.scss";

class Portfolio extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			const { match: { params: { slug } }, getProjects } = this.props
			window.scrollTo(0, 0);
			return getProjects({ slug });
		}
	}

	shouldComponentUpdate(nextProps) {
		return (this.props.selectedProject !== nextProps.selectedProject);
	}

	render() {
		const { selectedProject, location: { pathname } } = this.props;
		const entry = selectedProject || {};
		const tags = selectedProject && getMetaTags(selectedProject, pathname);

		return (
			<React.Fragment>
				<Helmet {...tags} />
				<div id="content" className="content content--portfolio content--single">
					<PrevNext {...entry} />
					<Main posts={[selectedProject]} isSingle={true} loading={!selectedProject} />
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
const mapDispatchToProps = dispatch => bindActionCreators({ getProjects }, dispatch);

// Server Side Stuff
const frontload = async ({ match: { params: { slug } }, getProjects }) => await getProjects({ slug });

// Connect to Frontload SSR
const PortfolioConnect = frontloadConnect(frontload, { onMount: true, onUpdate: false })(Portfolio);

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioConnect);
