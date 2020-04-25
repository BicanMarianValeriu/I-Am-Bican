import React, { Component } from 'react';
import classNames from 'classnames';

import Title from './Title';
import Content from './Content';

class Article extends Component {
	getClasses() {
		const { type, isSingle } = this.props;
		const wrapperClass = ['entry', `entry--${isSingle ? 'single' : 'archive'}`, `entry--${type}`, `${type}`];
		return classNames(wrapperClass);
	}

	render() {
		return (
			<article className={this.getClasses()}>
				{!this.props.isSingle && <Title {...this.props} />}
				<Content {...this.props} />
			</article>
		);
	}
}

export default Article;
