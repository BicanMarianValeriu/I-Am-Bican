import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Intro from './../Page/components/Intro';

// SCSS 
import './../../static/scss/pages/_404.scss';
import { Container } from 'react-bootstrap';

const FourOFour = () => {

	useEffect(() => {
		const header = document.querySelector('header.header');
		header.classList.remove('header--blue');
		header.classList.add('header--absolute');
		header.classList.add('header--white');
	}, []);

	return (
		<>
			<Helmet>
				<title>Page Not Found</title>
			</Helmet>
			<div id="content" className="content content--404 text-center">
				<Intro title="404 - Not Found" />
				<Container className="py-5">
					<p className="lead text-center my-5">The page you requested is not found.</p>
				</Container>
			</div>
		</>
	);
};

export default FourOFour;
