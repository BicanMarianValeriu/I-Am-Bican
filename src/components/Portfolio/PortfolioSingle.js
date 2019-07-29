import React, { Component } from 'react';

import Header from './Header';
import Content from '../Entry/Content';
import Social from './Single/Social';
import Questions from './Single/Questions';

class PortfolioSingle extends Component {
	getClasses() {
		let classes = ['entry', 'entry--portfolio', 'entry--single', 'portfolio'];
		return classes.join(' ');
	}

	render() {

		return (
			<article className={this.getClasses()}>
				<div className="container">
					<Header {...this.props} />
					<div className="portfolio-content">
						<div className="row py-4 py-md-5 my-2">
							<div className="col-12 col-lg">
								<Content {...this.props} isSingle={true} />
							</div>
							<div className="col-12 col-lg-5 mt-3 mt-lg-0 d-flex flex-column">
								<Questions />
								<Social post={this.props} />
							</div>
						</div>
					</div>
				</div>
			</article>
		);
	}
}

export default PortfolioSingle;
