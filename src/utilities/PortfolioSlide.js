import React, { Component } from 'react';

import Title from '../components/Article/Title';
import Content from '../components/Article/Content';
import SlideImage from '../Portfolio/SlideImage';

import { shuffleArray } from './helpers';

class PortfolioSlide extends Component {
	getClasses() {
		const { acf: { meta: { layout } } } = this.props;
		let classes = ['entry', 'entry--portfolio', 'entry--archive', 'portfolio', `portfolio--layout-${layout}`];
		return classes.join(' ');
	}

	render() {
		let sortable = [...Array(4).keys()];
		sortable = shuffleArray( sortable ); 

		const { featured_media } = this.props;
		return (
			<article className={this.getClasses()}>
				<SlideImage mediaId={featured_media} datasort={sortable[0]} isMain={true}/>
				<SlideImage mediaId={featured_media} datasort={sortable[1]}/>
				<SlideImage mediaId={featured_media} datasort={sortable[2]}/>
				<SlideImage mediaId={featured_media} datasort={sortable[3]}/>
				<Title {...this.props} />
				<Content {...this.props} />
			</article>
		);
	}
}

export default PortfolioSlide;
