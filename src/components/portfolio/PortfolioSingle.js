import React, { Component } from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core'
import { Accordion } from './../../utilities/accordion';
import ContentLoader from 'react-content-loader';

import Header from './Header';
import Content from '../Entry/Content';

class PortfolioSingle extends Component {
	getClasses() {
		let classes = ['entry', 'entry--portfolio', 'entry--single', 'portfolio'];
		return classes.join(' ');
	}

	isLoading() {
		var loading = false;
		setTimeout(() => loading = true, 2500);
		return loading;
	}

	shouldComponentUpdate() {
		return this.isLoading();
	}

	render() {
		const faChevron = {
			icon: [
				512,
				512,
				[],
				'f078',
				'M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z'
			],
			iconName: 'chevron-down',
			prefix: 'fal'
		};

		const iconHtml = icon(faChevron);

		const makeHeadline = text => {
			return <span dangerouslySetInnerHTML={{ __html: `${iconHtml.html[0]} ${text}` }}></span>
		};

		const MyLoader = () => (
			<ContentLoader
				height={160}
				width={445}
				speed={5}
				primaryColor="#f1f1f1"
				primaryOpacity="0.5"
				secondaryColor="#ecebeb"
			>
				<circle cx="10" cy="20" r="8" />
				<rect x="25" y="15" rx="5" ry="5" width="405" height="10" />
				<circle cx="10" cy="50" r="8" />
				<rect x="25" y="45" rx="5" ry="5" width="405" height="10" />
				<circle cx="10" cy="80" r="8" />
				<rect x="25" y="75" rx="5" ry="5" width="405" height="10" />
				<circle cx="10" cy="110" r="8" />
				<rect x="25" y="105" rx="5" ry="5" width="405" height="10" />
			</ContentLoader>
		);

		return (
			<article className={this.getClasses()}>
				<Header {...this.props} />
				<div className="portfolio__inner">
					<div className="row py-4 py-md-5 my-2">
						<div className="col-12 col-lg-7">
							<Content {...this.props} isSingle={true} />
						</div>
						<div className="col-12 col-lg-5 mt-3 mt-lg-0">
							<h3 className="lead mt-2">Frequently Asked Questions</h3>
							<hr />
							{this.isLoading() ? <MyLoader /> :
								<Accordion open={0}>
									<Accordion.Item>
										<Accordion.Header>{makeHeadline('Question one?')}</Accordion.Header>
										<Accordion.Body>Lorem ipsum dolor sit amnet.</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item>
										<Accordion.Header>{makeHeadline('Question two?')}</Accordion.Header>
										<Accordion.Body>Lorem ipsum dolor sit amnet.</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							}
						</div>
					</div>
				</div>
			</article>
		);
	}
}

export default PortfolioSingle;
