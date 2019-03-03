import React, { Component } from 'react';

import Article from './article';
import PortfolioItem from './../Portfolio/PortfolioItem';
import Portfolio from './Portfolio';
import Empty from './empty';

class Main extends Component {

	isSingle() {
		const { posts, isSingle } = this.props;
		return (isSingle || 1 === posts.length);
	}

	getOptions() {
		const { options = {} } = this.props;
		return {
			...{
				classes: { outer: 'container', inner: 'row' },
				loading: { enable: true, classes: { outer: 'placeholder' }, elements: this.isSingle() ? 1 : 6 }
			}, ...options
		};
	}

	getClasses() {
		let _classes = this.getOptions().classes;
		let classes = ['col', 'main', !this.isSingle() && _classes.inner];
		classes.push(this.isSingle() ? 'main--single' : 'main--archive');
		return classes.join(' ');
	}

	renderPosts() {
		const { posts } = this.props;
		const options = this.getOptions();
		if (posts.length) {
			return posts.map((post) => {
				var postType;
				switch (post.type) {
					case 'portfolio': postType = this.isSingle() ?
						<Portfolio key={post.id} {...post} /> : <PortfolioItem key={post.id} {...post} />;
						break;
					default: postType = <Article key={post.id} {...post} isSingle={this.isSingle()} />;
				}
				return postType;
			});
		} else {
			if (options.loading.enable === false) return;
			var items = this.isSingle() ? [...Array(1)] : [...Array(options.loading.elements)];
			return items.map((val, i) => <Empty key={i} options={{ ...options.loading }} />);
		}
	}

	render() {
		const options = this.getOptions();
		const { classes: { outer, inner } } = options;
		return (
			<div className={outer.toString()}>
				<div className={inner.toString()}>
					<main id="postsContainer" className={this.getClasses()}>
						{this.renderPosts()}
					</main>
				</div>
			</div>
		);
	}
}

export default Main;
