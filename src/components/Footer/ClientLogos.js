import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getClients } from "../../redux/actions/clients";
import anime from 'animejs';
import _delayCall from 'lodash/delay';
import _debounce from 'lodash/debounce';
import _sample from 'lodash/sample';
import _filter from 'lodash/filter';

let ScrollMagic;
let Splitting;

class ClientLogos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scene: null,
			columns: 4,
			current: [],
			lastFrame: -1,
			running: null
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
		ScrollMagic = require("scrollmagic");
		Splitting = require("splitting");

		const controller = new ScrollMagic.Controller();

		const target = document.querySelector('.company-logos__title');
		Splitting({ target: target });

		const { scene } = this.state;
		if (scene === null) {
			const newScene = new ScrollMagic.Scene({
				triggerElement: '.company-logos__title',
				triggerHook: .85,
				reverse: false,
			}).setClassToggle('.company-logos__title', 'company-logos__title--animated').addTo(controller);
			this.setState({ scene: newScene });
		}

		_delayCall(this.updateLogos, 1000);
	}

	componentDidUpdate() {
		const { scene } = this.state;

		this.showInitialLogos();

		setTimeout(() => scene.reverse(true), 200); // reset after 200ms, after scroll up
		scene.on('progress', e => e.progress === 1 ? scene.reverse(false) : null)
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

		// Next Logos form next frame but not last
		const logosListWithoutOld = _filter([...Array(clients.length).keys()], i => current.indexOf(i) === -1);
		const nextLogo = _sample(logosListWithoutOld);

		// Hide logos on new column
		const newLogos = companies[newFrame].children;
		for (let item of newLogos) {
			if (item.classList.contains('active')) {
				anime({
					targets: item,
					opacity: 0,
					duration: 350,
					easing: 'linear',
					complete: () => item.classList.remove('active')
				});
			}
		}

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
			const { acf: { client_logo } } = item;
			return (
				<div key={i} className="companies__logo">
					<img width="200" src={client_logo.url} alt={item.name} />
				</div>
			);
		});
	}

	renderColumns() {
		const { columns } = this.state;

		return [...Array(columns)].map((val, i) =>
			<div key={i} className="col-6 col-sm-3">
				<div className="companies">{this.renderLogos()}</div>
			</div>
		);
	}

	render() {
		return (
			<div className="footer__logos company-logos">
				<div className="container">
					<div className="row">
						<div className="col col-lg-9 text-center mx-auto mb-4">
							<h3 className="text-font--cursive text-color--primary company-logos__title">
								Just Few Of The Clients
              				</h3>
							<p className="lead">
								Over the years, I’ve had the pleasure to work with dozens of really great people and
								companies on some really amazing projects. Below are a few clients who I`ve built sites for.
							</p>
						</div>
					</div>
					<div className="row">{this.renderColumns()}</div>
					<hr className="tall" />
				</div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientLogos));
