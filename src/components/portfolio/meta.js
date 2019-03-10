import React, { Component } from 'react';
import { connect } from "react-redux";
import _find from 'lodash/find';

class Meta extends Component {

	renderClientImage() { 
		const { client } = this.props;  
		if( ! client ) return; 
		return (
			<img src={client.acf.client_logo.url} alt={client.name} height="40" />
		);
	}

	render() {
		const { date_gmt, date_human, acf } = this.props;
		const { meta } = acf;
		var count = meta ? parseInt(meta.cost) : 0;
		var money = [...Array(count).keys()];
		money = money.map((val, index) => (
			<div key={index} className="portfolio-meta__item-value__svg">
				<i className="far fa-money-bill-alt svg-icon--cost"></i>
			</div>
		));

		let website = `<a target="_blank" href="${meta ? meta.website : "#"}">View Live Site</a>`;

		let itemClass = 'portfolio-meta__item col-6 col-sm-6 col-lg-3 mb-3 mb-lg-0';

		return (
			<div className="portfolio__meta portfolio-meta">
				<div className="row">
					<div className={itemClass}>
						<span className="portfolio-meta__item-label" title="Client">Client</span>
						<hr className="my-2" />
						<span className='portfolio-meta__item-value'>{this.renderClientImage()}</span>
					</div>
					<div className={itemClass}>
						<span className="portfolio-meta__item-label"  title="Cost Range">Cost</span>
						<hr className="my-2" />
						<span className="portfolio-meta__item-value">{count > 0 ? money : "Priceless"}</span>
					</div>
					<div className={itemClass}>
						<span className="portfolio-meta__item-label" title="Went Live">Date</span>
						<hr className="my-2" />
						<time className="portfolio-meta__item-value" dateTime={date_gmt}>{date_human}</time>
					</div> 
					<div className={itemClass}>
						<span className="portfolio-meta__item-label" title="Live URL">Link</span>
						<hr className="my-2" />
						<span className="portfolio-meta__item-value portfolio-meta__item-value--url"
							dangerouslySetInnerHTML={{ __html: website }} />
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