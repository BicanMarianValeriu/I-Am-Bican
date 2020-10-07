import React from "react";

const PageIntro = ({ title = 'Lorem ipsum dolor sit' }) => (
	<section className="page-intro">
		<div className="container">
			<div className="row">
				<div className="col">
					<h1 className="page-intro__headline">{title}</h1>
				</div>
			</div>
		</div>
	</section>
);

export default PageIntro;
