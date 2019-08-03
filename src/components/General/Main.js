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
		const defaultLoading = { enable: true, classes: { outer: 'placeholder' }, elements: this.isSingle() ? 1 : 6 };
		return { loading: { ...defaultLoading, ...options.loading } };
	}

	getClasses() {
		const { loading, className } = this.props;

		const classes = ['main', this.isSingle() ? 'main--single' : 'main--archive', {
			'main--is-loading': loading,
			[className]: className !== undefined
		}];

		return classNames(classes);
	}

	renderPosts() {
		const { posts = [], loading } = this.props;

		if (loading !== true && posts.length > 0) {
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
		return (
			<main id="postsContainer" className={this.getClasses()}>{this.renderPosts()}</main>
		);
	}
}

export default Main;
