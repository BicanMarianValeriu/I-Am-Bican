import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TweenMax } from "gsap/umd/TweenMax";
import { getClients } from "../../redux/actions/clients";

let ScrollMagic;
let Splitting;

class ClientLogos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scene: null,
			columns: 4 
		}

		this.props.getClients();
	}

	shouldComponentUpdate(nextProps) {
		let { location: { pathname } } = this.props;
		if (pathname !== nextProps.location.pathname) return true;
		if (this.props.clients !== nextProps.clients) return true;
		return false;
	}

	componentDidMount() {
		ScrollMagic = require("scrollmagic");
		Splitting = require("splitting");

		let controller = new ScrollMagic.Controller();

		const target = document.querySelector('.company-logos__title');
		Splitting({ target: target });

		const scene = new ScrollMagic.Scene({
			triggerElement: '.company-logos__title',
			triggerHook: .85
		}).setClassToggle('.company-logos__title', 'company-logos__title--animated').addTo(controller);

		this.setState({ scene });
	}

	componentWillUnmount() {
		TweenMax.killAll(false, false, true);
	}

	componentDidUpdate(prevProps) {
		const { scene, columns } = this.state;
		const { location: { pathname } } = this.props;

		if (prevProps.location.pathname !== pathname) {
			TweenMax.killAll(false, false, true);
		}    

		const companies = document.querySelectorAll(".companies");
		const counter = companies[0].querySelectorAll(".companies__logo").length;
		
		const current = [...Array(columns).keys()]; // IE bug with keys -> polyfil should fix this but I dont care
		var lastFrame = -1;

		TweenMax.set(document.querySelectorAll(".companies__logo"), { autoAlpha: 0 });
		for (var j = 0; j < columns; j++) {
			for (var i = 0; i < 5; i++) {
				if (j === i && i < columns) {
					let nodeList = document.querySelectorAll(".companies")[j];
					TweenMax.set(nodeList.children[i], { autoAlpha: 1 });
				}
			}
		}

		const _updateLogo = num => {
			var nextImage = Math.floor(Math.random() * counter);
			for (var i = 0; i < columns; i++) {
				if (nextImage === current[i]) {
					_updateLogo(num);
					return;
				}
			}
			for (let i = 0; i < counter; i++) {
				let nodeList = document.querySelectorAll(".companies")[num];
				var logo = nodeList.children[i];
				let compStyles = window.getComputedStyle(logo);
				if (compStyles.getPropertyValue("opacity") > 0.5) {
					if (nextImage === i) {
						_updateLogo(num);
						return;
					}
					TweenMax.to(logo, 0.75, { autoAlpha: 0 });
				} else {
					if (nextImage === i) {
						TweenMax.to(logo, 0.75, { autoAlpha: 1, delay: 0.25 });
						current[num] = i;
					}
				}
			}
		};

		const _updateLogos = () => {
			var newLastFrame = Math.floor(Math.random() * columns);
			if (newLastFrame === lastFrame) {
				_updateLogos();
				return;
			}
			_updateLogo(newLastFrame);
			lastFrame = newLastFrame;

			TweenMax.delayedCall(2.5, _updateLogos);
		};

		TweenMax.delayedCall(1, _updateLogos);

		// Dirty hack to reinit SM scene on router location change
		setTimeout(() => scene.reverse(true), 200); // reset after 200ms, after scroll up
		scene.on('progress', (e) => (e.progress === 1) ? scene.reverse(false) : null)
	}

	renderColumns() {
		const { columns } = this.state;
		let cols = [...Array(columns)];

		return cols.map((val, i) => {
			return (
				<div key={i} className="col-6 col-sm-3">
					<div className="companies">{this.renderLogos()}</div>
				</div>
			);
		});
	}

	renderLogos() {
		const { clients } = this.props;

		return clients.map((item, i) => {
			const { acf } = item;
			const { client_logo } = acf;
			return (
				<div key={i} className="companies__logo">
					<img width="200" src={client_logo.url} alt={item.name} />
				</div>
			);
		});
	}

	render() {
		return (
			<div className="footer__logos company-logos">
				<div className="container">
					<div className="row">
						<div className="col col-lg-8 text-center mx-auto mb-4">
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
