import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";
import { fetchDispatcher, FETCH_CLIENTS_FULFILLED } from "../../api/actions/actions";
import { connect } from "react-redux";

class ClientLogos extends Component {
	componentDidMount() {
		this.props.dispatch(
			fetchDispatcher("wp/v2/clients", {}, { success: FETCH_CLIENTS_FULFILLED })
		);
	}

	shouldComponentUpdate(nextProps) {
		return( this.props.clients !== nextProps.clients );
	}

	componentWillUnmount() {
		TweenMax.killAll(false, false, true);
	}

	componentDidUpdate() {
		var companies = document.querySelectorAll(".companies");
		var counter = companies[0].querySelectorAll(".companies__logo").length;
		var columns = companies.length;
		var current = [...Array(columns).keys()]; // IE bug with keys -> polyfil should fix this but I dont care
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
	}

	renderColumns() {
		let cols = [...Array(4)];

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

		if (clients) return clients.map((item, i) => {
			const { acf } = item;
			const { client_logo } = acf;
			return (
				<div key={i} className="companies__logo">
					<img width="200" src={client_logo && client_logo.url} alt={item.name} />
				</div>
			);
		});
	}

	render() {
		return (
			<div className="footer__logos company-logos">
				<div className="container">
					<div className="row">
						<div className="col text-center mb-4">
							<h3 className="text-font--cursive text-color--primary company-logos__title">
								Just Few Of The Clients
              				</h3>
						</div>
					</div>
					<div className="row">{this.renderColumns()}</div>
					<hr className="tall" />
				</div>
			</div>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = store => {
	const { api: { clients } } = store;
	return { clients };
};

// Export container while connected to store
export default connect(mapStateToProps)(ClientLogos);
