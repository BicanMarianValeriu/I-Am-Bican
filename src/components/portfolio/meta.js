import React, { Component } from 'react';
import { requestApi } from '../../redux/actions/actions';
import classNames from 'classnames';

export default class Meta extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			client: {}
		}
	}

	componentDidMount() {
		const { clients } = this.props;
		if( clients[0] === undefined ) return;
		this.setState({ loading: true });
		requestApi('wp/v2/clients/' + clients[0]).then(payload => this.setState({ client: payload.data, loading: false }));
	}

	getClient() {
		const { client: { name = 'Lorem Ipsum' } } = this.state;
		return name;
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

		let clientClasses = classNames('portfolio-meta__item-value', { loading: this.state.loading });
		return (
			<div className="portfolio__meta portfolio-meta">
				<div className="row">
					<div className="portfolio-meta__item col-sm-6 col-lg-3 mb-3 mb-lg-0" title="Went Live">
						<span className="portfolio-meta__item-label">Date</span>
						<hr className="my-2" />
						<time className="portfolio-meta__item-value" dateTime={date_gmt}>{date_human}</time>
					</div>
					<div className="portfolio-meta__item col-sm-6 col-lg-3 mb-3 mb-lg-0" title="Cost Range">
						<span className="portfolio-meta__item-label">Cost</span>
						<hr className="my-2" />
						<span className="portfolio-meta__item-value">{count > 0 ? money : "Priceless"}</span>
					</div>
					<div className="portfolio-meta__item col-sm-6 col-lg-3 mb-3 mb-lg-0" title="Client">
						<span className="portfolio-meta__item-label">Client</span>
						<hr className="my-2" />
						<span className={clientClasses}>{this.getClient()}</span>
					</div>
					<div className="portfolio-meta__item col-sm-6 col-lg-3 mb-3 mb-lg-0" title="Live URL">
						<span className="portfolio-meta__item-label">Link</span>
						<hr className="my-2" />
						<span className="portfolio-meta__item-value portfolio-meta__item-value--url"
							dangerouslySetInnerHTML={{ __html: website }} />
					</div>
				</div>
			</div>
		);
	}
} 
