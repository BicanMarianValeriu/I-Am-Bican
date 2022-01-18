import React from 'react';

import Header from './components/Header';
import Content from './../Page/components/Content';
import Social from './components/Social';
import Sharing from './components/Sharing';
import Questions from './components/Questions';
import { Col, Container, Row } from 'react-bootstrap';

const PortfolioSingle = (props) => {
	return (
		<article className="entry entry--single entry--portfolio portfolio">
			<Header {...props} />
			<div className="portfolio__content">
				<Container>
					<Row className="row py-4 py-md-5">
						<Col className="col-12 col-lg position-relative">
							<Sharing {...props} />
							<Content className="ps-5 ps-xl-0" {...{ ...props, isSingle: true }} />
						</Col>
						<Col className="col-12 col-lg-5 mt-3 mt-lg-0 d-flex flex-column">
							<Questions {...props} />
							<Social {...props} />
						</Col>
					</Row>
				</Container>
			</div>
		</article>
	);
}

export default PortfolioSingle;
