import React from "react"; 

const PageIntro = ({ ...props }) => {
	const { pageTitle } = props;
	return (
		<section className="page-intro">
			<div className="page-intro__background" />
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="page-intro__headline">
							{pageTitle ? pageTitle : "Lorem ipsum dolor sit"}
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageIntro;
