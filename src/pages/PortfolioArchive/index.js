import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { frontloadConnect } from "react-frontload";

import Main from './../../components/General/Main';
import Intro from "./components/Intro";
import Empty from "./Empty";
import { getProjects } from "./../../redux/actions/projects";

// SCSS 
import "./../../static/scss/pages/_portfolio-archive.scss";

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
				<div id="content" className="content content--projects content--archive">
					<Intro />
					<div className="container">
						<Main posts={projects} className="row my-3 my-md-5 pt-5" isSingle={false} options={{ loading: loading }} loader={Empty} />
					</div>
				</div>
			</>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = ({ projects }) => ({ projects });

// Dispatch to props.getProjects
const mapDispatchToProps = dispatch => bindActionCreators({ getProjects }, dispatch);

// Server Side Stuff
const frontload = async ({ getProjects }) => await getProjects({ per_page: 10 });

// Connect to Frontload SSR
const PortfolioConnect = frontloadConnect(frontload, { onMount: true, onUpdate: false })(Projects);

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioConnect);
