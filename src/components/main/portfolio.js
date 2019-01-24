import React, { Component } from 'react';

import Title from '../Article/Title'; 
import Content from '../Article/Content';
import FeaturedMedia from '../Article/featured-media';

class Portfolio extends Component {
	getClasses() {
		let classes = ['entry', 'entry--portfolio'];
		classes.push(this.props.isSingle ? 'entry--single' : 'entry--archive');
		classes.push('portfolio');
		return classes.join(' ');
	}

	render() {
		const { featured_media } = this.props; 
		return (
			<article className={this.getClasses()}>
				<div className="row">
					{!this.props.isSingle &&
						<div className="col-sm-12 col-lg-5">
							<FeaturedMedia mediaId={featured_media} />
						</div>
					}
					<div className="col">
						{!this.props.isSingle && <Title {...this.props} />} 
						<Content {...this.props} /> 
					</div>
				</div>
			</article>
		);
	}
}

export default Portfolio;
