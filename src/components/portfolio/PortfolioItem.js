import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Title from '../Entry/Title';
import Content from '../Entry/Content';
import FeaturedMedia from '../Entry/FeaturedMedia';

class PortfolioSlide extends Component {
	getClasses() {
		const { acf: { meta: { layout } } } = this.props;
		let classes = ['col-md-6', 'col-lg-4', 'entry', 'entry--portfolio', 'entry--archive', 'portfolio', `portfolio--layout-${layout}`];
		return classes.join(' ');
	} 

	render() {

		const { featured_media, slug } = this.props;

		return (
			<article className={this.getClasses()}>
				<FeaturedMedia mediaId={featured_media} />
				<div className="portfolio__description">
					<Title {...this.props} />
					<Content {...this.props} /> 
					<Link to={`portfolio/${slug}`} className="btn btn-link portfolio__more">
						<span>View More</span>
						<i className="fas fa-arrow-right"></i>
					</Link>  
				</div>
			</article>
		);
	}
}

export default withRouter(PortfolioSlide);
