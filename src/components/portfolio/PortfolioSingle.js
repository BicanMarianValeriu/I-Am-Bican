import React, { Component } from 'react';

import Header from './Header';
import Content from '../Entry/Content';

class PortfolioSingle extends Component {
	getClasses() {
		let classes = ['entry', 'entry--portfolio', 'entry--single', 'portfolio'];
		return classes.join(' ');
	}

	render() {
		return (
			<article className={this.getClasses()}>
				<Header {...this.props} />
				<Content {...this.props} isSingle={true} />
			</article>
		);
	}
}

export default PortfolioSingle;
