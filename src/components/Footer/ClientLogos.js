import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { getClients } from '../../redux/actions/clients';
import anime from 'animejs';
import _delayCall from 'lodash/delay';
import _debounce from 'lodash/debounce';
import _sample from 'lodash/sample';
import _filter from 'lodash/filter';

class ClientLogos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: 4,
			current: [],
			lastFrame: -1,
		}

		this.props.getClients();
		this.updateLogos = this.updateLogos.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		const { location: { pathname }, clients } = this.props;
		if (pathname !== nextProps.location.pathname) return true;
		if (clients !== nextProps.clients) return true;
		return false;
	}

	componentDidMount() {
		_delayCall(this.updateLogos, 1000);
	}

	componentDidUpdate() {
		this.showInitialLogos();
	}

	showInitialLogos() {
		const { columns, current } = this.state;
		const { clients } = this.props;

		anime({ targets: document.querySelectorAll('.companies__logo'), opacity: 0 });

		for (let j = 0; j < columns; j++) {
			for (let i = 0; i < clients.length; i++) {
				if (j === i && i < columns) {
					const item = document.querySelectorAll('.companies')[j].children[i];
					current[j] = i; // Set column and its logo index
					this.setState({ current });
					anime({ targets: item, opacity: 1, complete: () => item.classList.add('active') });
				}
			}
		}
	}

	updateLogo(newFrame) {
		const { current } = this.state;
		const { clients } = this.props;
		const companies = document.querySelectorAll('.companies');
		const logosListWithoutOld = _filter([...Array(clients.length).keys()], i => current.indexOf(i) === -1);
		const nextLogo = _sample(logosListWithoutOld);
		const newLogos = companies[newFrame].children;

		anime({
			targets: newLogos,
			opacity: 0,
			duration: 350,
			easing: 'linear',
			complete: () => [...newLogos].map(item => item.classList.remove('active'))
		});

		// And then show the new logo
		anime({
			targets: newLogos[nextLogo],
			opacity: 1,
			delay: 0.25,
			duration: 350,
			easing: 'linear',
			complete: () => newLogos[nextLogo] && newLogos[nextLogo].classList.add('active')
		});

		// Set old frame logo so next time we avoid it above
		current[newFrame] = nextLogo;
		this.setState({ current });
	}

	updateLogos() {
		const { columns, lastFrame } = this.state;
		const frameListWithoutOld = _filter([...Array(columns).keys()], item => item !== lastFrame);
		const newFrame = _sample(frameListWithoutOld);

		this.updateLogo(newFrame);
		this.setState({ lastFrame: newFrame });

		// Self Invoke
		const debounced = _debounce(this.updateLogos, 500);
		_delayCall(debounced, 3000);
	};

	renderLogos() {
		const { clients } = this.props;

		return clients.map((item, i) => {
			const { acf: { client_logo: { url = '//via.placeholder.com/200x50' } = {} } = {} } = item;
			return (
				<div key={i} className="companies__logo d-flex flex-colum align-items-center justify-content-middle">
					<img width="200" src={url} alt={item.name} />
				</div>
			);
		});
	}

	renderColumns() {
		const { columns } = this.state;

		return [...Array(columns)].map((val, i) =>
			<Col xs={6} sm={3} key={i}>
				<div className="companies">{this.renderLogos()}</div>
			</Col>
		);
	}

	render() {
		return (
			<div className="footer__logos company-logos">
				<Container>
					<Row className="py-3 py-lg-5">
						<Col lg={9} className="text-center mx-auto">
							<h3 className="display-6 font-cursive text-primary">Just Few Of The Clients</h3>
							<p className="lead">
								Over the years, I’ve had the pleasure to work with dozens of really great people and
								companies on some really amazing projects. Below are a few clients who I`ve built sites for.
							</p>
						</Col>
					</Row>
					<Row className="pb-3 pb-lg-5">{this.renderColumns()}</Row>
				</Container>
			</div>
		);
	}
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
