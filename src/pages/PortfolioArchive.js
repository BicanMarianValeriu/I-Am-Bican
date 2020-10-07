import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";

import { Main } from "../components/General";
import Intro from "../components/Portfolio/Archive/Intro";
import { getProjects, updateProjects } from "../redux/actions/projects";
import { requestApi } from "../redux/actions/api";

// SCSS 
import "./../static/scss/pages/_portfolio-archive.scss";

class Projects extends Component {

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const { projects, location: { pathname } } = this.props;
		const meta = {
			title: 'View My Portfolio',
			description: 'View my best work and see what resources I`ve used to create this amazing websites.',
			canonical: "https://www.iambican.com" + pathname
		};

		const loading = {
			elements: 6,
			classes: { outer: 'col-md-6 col-lg-4' }
		};

		return (
			<React.Fragment>
				<Helmet
					title={meta.title}
					meta={[
						meta.description ? { name: 'description', content: meta.description } : {}
					]}
					link={[
						meta.canonical ? { rel: 'canonical', href: meta.canonical } : {}
					]}
				/>
				<div id="content" className="content content--projects content--archive">
					<Intro />
					<div className="container">
						<Main posts={projects} className="my-3 my-md-5 pt-3 pt-lg-4" isSingle={false} options={{ loading: loading }} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = store => {
	const { projects } = store;
	return { projects };
};

// Dispatch to props.getProjects
const mapDispatchToProps = dispatch => bindActionCreators({ getProjects, updateProjects }, dispatch);

// Server Side Stuff
const frontload = async props => {
	const { updateProjects } = props;
	const data = await requestApi.get(`wp/v2/portfolios?per_page=10`).then(req => req.data);
	return updateProjects(data);
}

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(
	frontloadConnect(frontload, { onMount: true, onUpdate: false })(Projects)
);
