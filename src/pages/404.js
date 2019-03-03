import React, { Component } from "react";
import Helmet from "react-helmet";
import PageIntro from "../components/sections/page-intro";

// SCSS 
import "./../static/scss/pages/_404.scss";

class FourOFour extends Component {
	componentDidMount() {
		const header = document.querySelector('header.header'); 
		header.classList.remove('header--blue');
		header.classList.add('header--absolute');
		header.classList.add('header--white');
	}

	render() {
		const meta = {
			title: "Pshht - not found | I Am Bican"
		};
		return (
			<React.Fragment>
				<Helmet>
					<title>{meta.title}</title>
				</Helmet>
				<div id="content" className="content content--404 text-center">
					<PageIntro pageTitle="404 - Not Found" />
					<div className="container">
						<div className="row">
							<div className="col text-center py-5">
								<p>The page you requested is not found.</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
};

export default FourOFour;
