import React, { Component } from 'react';
import { connect } from 'react-redux';
import _find from 'lodash/find';

class Meta extends Component {

	renderClientLogo() {
		const { client } = this.props;
		if (!client) return;
		const { name } = client;
		return (<span>{name}</span>);
	}

	renderDate(raw = false) {
		const { date_gmt } = this.props;
		if (raw) return date_gmt;
		const dateOpts = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
		const date = new Date(date_gmt).toLocaleDateString('en-US', dateOpts);
		return date;
	}

	renderCost() {
		const { acf } = this.props;
		const { meta } = acf;
		const count = meta ? parseInt(meta.cost) : 0;

		if (count === 0) {
			return 'Priceless';
		}

		let money = [...Array(count).keys()];
		money = money.map((val, index) => (
			<div key={index} className="portfolio-meta__item-value__svg">
				<i className="far fa-money-bill-alt svg-icon--cost"></i>
			</div>
		));
		return money;
	}

	renderWebsite() {
		const { acf } = this.props;
		const { meta } = acf;

		const props = {
			rel: 'noopener noreferrer',
			href: meta ? meta.website : "#",
			title: meta && meta.website,
			target: '_blank'
		};

		return (<a {...props}>View Live Site</a>);
	}

	render() {
		const itemClass = 'portfolio-meta__item col-6 col-sm-6 col-lg-3 mb-3 mb-lg-0';

		return (
			<div className="portfolio__meta portfolio-meta">
				<div className="row">
					<div className={itemClass}>
						<span className="portfolio-meta__item-label" title="Client">Client</span>
						<hr className="my-2" />
						<span className='portfolio-meta__item-value'>{this.renderClientLogo()}</span>
					</div>
					<div className={itemClass}>
						<span className="portfolio-meta__item-label" title="Cost Range">Cost</span>
						<hr className="my-2" />
						<span className="portfolio-meta__item-value">{this.renderCost()}</span>
					</div>
					<div className={itemClass}>
						<span className="portfolio-meta__item-label" title="Went Live">Date</span>
						<hr className="my-2" />
						<time className="portfolio-meta__item-value" dateTime={this.renderDate(true)}>{this.renderDate()}</time>
					</div>
					<div className={itemClass}>
						<span className="portfolio-meta__item-label" title="Live URL">Link</span>
						<hr className="my-2" />
						<span className="portfolio-meta__item-value portfolio-meta__item-value--url">
							{this.renderWebsite()}
						</span>
					</div>
				</div>
			</div>
		);
	}
}

// Binds menu items to navigation container
const mapStateToProps = (store, props) => {
	const { clients } = store;
	const clientId = props.clients[0];
	const client = _find(clients, { id: clientId });

	return ({ client });
};

// Export container while connected to store with frontload
export default connect(mapStateToProps)(Meta);
