import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Title from '../Entry/Title';
import Content from '../Entry/Content';
import FeaturedMedia from '../Entry/FeaturedMedia';

class PortfolioItem extends Component {
	getClasses() {
		const { acf: { meta: { layout } } } = this.props;
		let wrapperClass = ['col-md-6', 'col-lg-4', 'entry', 'entry--portfolio', 'portfolio',`portfolio--layout-${layout}` ];
		return wrapperClass = classNames(wrapperClass);
	} 

	render() {

		const { featured_media, slug } = this.props;

		return (
			<article className={this.getClasses()}>
				<Link to={`/portfolio/${slug}/`}> 
					<FeaturedMedia mediaId={featured_media} />
				</Link>
				<div className="portfolio__description p-3 p-lg-2 p-xl-3 text-center">
					<Title {...this.props} />
					<Content {...this.props} /> 
					<Link to={`/portfolio/${slug}/`} className="btn btn-link portfolio__more">
						<span>View More</span>
						<i className="fas fa-arrow-right"></i>
					</Link>  
				</div>
			</article>
		);
	}
}

export default PortfolioItem;
