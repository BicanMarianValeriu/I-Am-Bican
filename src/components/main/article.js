import React, { Component } from 'react';   

import Title from './../Article/title';
import Content from './../Article/content';

class Article extends Component { 
	getClasses() {
		let classes = ['entry'];
		classes.push(this.props.isSingle ? 'entry--single' : 'entry--archive');
		classes.push(this.props.type && 'entry--' + this.props.type); 
		return classes.join(' ');
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
