import React, { Component } from 'react';
import classNames from 'classnames';

import Article from '../Entry';
import PortfolioItem from '../Portfolio/PortfolioItem';
import PortfolioSingle from '../Portfolio/PortfolioSingle';
import Empty from '../Entry/Empty';

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
		const { classes: { inner }} = this.getOptions(); 
		const isSingle = this.isSingle();

		const classes = ['col', 'main', isSingle ? 'main--single' : 'main--archive', { 
			[inner]: !isSingle,  
			'main--is-loading:': this.props.loading
		}];

		return classNames(classes);
	}

	renderPosts() {
		const { posts, loading } = this.props;
		if (!loading && posts.length) {
			return posts.map(post => {
				var postType;
				switch (post.type) {
					case 'portfolio': postType = this.isSingle() ?
						<PortfolioSingle key={post.id} {...post} /> : <PortfolioItem key={post.id} {...post} />;
						break;
					default: postType = <Article key={post.id} {...post} isSingle={this.isSingle()} />;
				}
				return postType;
			});
		} else {
			const options = this.getOptions();

			if (options.loading.enable === false) return;

			let items = this.isSingle() ? [...Array(1)] : [...Array(options.loading.elements)];

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
