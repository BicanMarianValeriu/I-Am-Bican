import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import anime from 'animejs';
import _filter from 'lodash/filter';
import _sample from 'lodash/sample';
import _delayCall from 'lodash/delay';

import { getClients } from '../../redux/actions/clients';

const ClientLogos = (props) => {
	const { clients, getClients } = props;

	const columns = 4;
	const totalLogos = clients.length;
	let current = [0, 1, 2, 3, 4];
	let lastframe = -1;

	useEffect(() => {
		if (clients.length) return;
		getClients();
	}, [clients, getClients])

	const updateLogo = (newFrame) => {
		const logosListWithoutOld = _filter([...Array(clients.length).keys()], i => current.indexOf(i) === -1);
		const nextImage = _sample(logosListWithoutOld);
		
		for (let i = 0; i < columns; i++) {
			if (nextImage === current[i]) {
				updateLogo(newFrame);
				return
			}
		}

		for (let i = 0; i < totalLogos; i++) {
			const logo = document.querySelectorAll('.companies')[newFrame].querySelectorAll('.companies__logo')[i];
			if (logo.style.opacity > .5) {
				if (nextImage === i) {
					updateLogo(newFrame);
					return
				}
				anime({
					targets: logo,
					opacity: 0,
					duration: 350,
					easing: 'linear',
				});
			} else {
				if (nextImage === i) {
					anime({
						targets: logo,
						opacity: 1,
						delay: 0.25,
						duration: 350,
						easing: 'linear',
					});
					current[newFrame] = i;
				}
			}
		}
	}

	const updateLogos = () => {
		let randLogo = Math.floor(Math.random() * columns);
		if (randLogo === lastframe) {
			updateLogos();
			return
		}

		updateLogo(randLogo);
		lastframe = randLogo;

		// Self Invoke
		_delayCall(updateLogos, 2000);
	};

	const showInitialLogos = () => {
		anime({ targets: document.querySelectorAll('.companies__logo'), opacity: 0 });

		for (let j = 0; j < columns; j++) {
			for (let i = 0; i < totalLogos; i++) {
				if (j === i && i < columns) {
					const item = document.querySelectorAll('.companies')[j].children[i];
					anime({ targets: item, opacity: 1 });
				}
			}
		}

		_delayCall(updateLogos, 1000);
	}

	useEffect(() => showInitialLogos());

	return (
		<div className="footer__logos company-logos">
			<Container>
				<Row className="py-3 py-lg-5">
					<Col lg={9} className="text-center mx-auto">
						<h3 className="display-6 font-cursive text-primary">Just Few Of The Clients</h3>
						<p className="lead">
							Over the years, I`ve had the pleasure to work with dozens of really great people and
							companies on some really amazing projects. Below are a few clients who I`ve built sites for.
						</p>
					</Col>
				</Row>
				<Row className="pb-3 pb-lg-5">{
					[...Array(columns)].map((val, i) => <Col xs={6} sm={3} key={i}>
						<div className="companies">{
							clients.map((item, i) => {
								const { acf: { client_logo: { url = '//via.placeholder.com/200x50' } = {} } = {} } = item;
								return (
									<div key={i} className="companies__logo d-flex flex-colum align-items-center justify-content-middle">
										<img width="200" src={url} alt={item.name} />
									</div>
								);
							})
						}</div>
					</Col>)
				}</Row>
			</Container>
		</div>
	);
}

// mapStateToProps -> clients
const mapStateToProps = store => {
	const { clients } = store;
	return { clients };
};

// mapDispatchToProps -> getClients
const mapDispatchToProps = dispatch => bindActionCreators({ getClients }, dispatch);

// Export container while connected to store
export default connect(mapStateToProps, mapDispatchToProps)(ClientLogos);
