import React, { Component } from 'react';

import Title from '../Article/Title';
import Content from '../Article/Content';
import FeaturedMedia from '../Article/FeaturedMedia'; 

class PortfolioSlide extends Component {
	getClasses() {
		const { acf: { meta: { layout } } } = this.props;
		let classes = ['entry', 'entry--portfolio', 'entry--archive', 'portfolio', `portfolio--layout-${layout}`];
		return classes.join(' ');
	}

	render() { 

		const { featured_media } = this.props;

		return (
			<article className={this.getClasses()}>
				<div className="row">
					<div className="col-12 col-md-5 col-lg-4">
						<FeaturedMedia mediaId={featured_media}/>
					</div>
					<div className="col-12 col-md-7 col-lg-8">
						<Title {...this.props} />
						<Content {...this.props} />
					</div>
				</div>
			</article>
		);
	}
}

export default PortfolioSlide;
