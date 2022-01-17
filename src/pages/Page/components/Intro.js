import React from "react";
import { Container } from "react-bootstrap";

const PageIntro = ({ title = 'Lorem ipsum dolor sit' }) => (
	<section className="page-intro bg-primary bg-gradient text-white">
		<Container>
			<h1 className="page-intro__headline">{title}</h1>
		</Container>
	</section>
);

export default PageIntro;
