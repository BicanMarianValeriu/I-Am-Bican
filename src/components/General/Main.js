import React, { Component } from 'react';
import classNames from 'classnames';

import Article from '../Entry';
import PortfolioSingle from '../Portfolio/PortfolioSingle';
import PortfolioArchive from '../Portfolio/PortfolioArchive';
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
		const { classes: { inner } } = this.getOptions();
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
				let postType;
				switch (post.type) {
					case 'portfolio': postType = this.isSingle() ?
						<PortfolioSingle key={post.id} {...post} /> : <PortfolioArchive key={post.id} {...post} />;
						break;
					default: postType = <Article key={post.id} {...post} isSingle={this.isSingle()} />;
				}
				return postType;
			});
		} else {
			const { loading = {} } = this.getOptions();

			if (loading.enable === false) return;

			const items = this.isSingle() ? [...Array(1)] : [...Array(loading.elements)];

			return items.map((val, i) => <Empty key={i} options={{ ...loading }} />);
		}
	}

	render() {
		const { classes: { outer, inner } } = this.getOptions();
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
