import React, { Component } from 'react';

import Article from './article';
import Portfolio from './portfolio';
import Empty from './empty';

class Main extends Component {

	isSingle() {
		const { posts, isSingle } = this.props;
		return (isSingle || 1 === posts.length);
	}

	getClasses() {
		let classes = ['col', 'main'];
		classes.push(this.isSingle() ? 'main--single' : 'main--archive');
		return classes.join(' ');
	}

	renderPosts() {
		const { posts } = this.props;
		if (posts.length) {
			return posts.map((post) => {
				var postType;
				switch (post.type) {
					case 'portfolio': postType = <Portfolio key={post.id} {...post} isSingle={this.isSingle()} />;
						break;
					default: postType = <Article key={post.id} {...post} isSingle={this.isSingle()} />;
				}
				return postType;
			});
		} else {
			var items = this.isSingle() ? [...Array(1)] : [...Array(6)];
			return items.map((val, i) => <Empty key={i} />);
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<main id="postsContainer" className={this.getClasses()}>
						{this.renderPosts()}
					</main>
				</div>
			</div>
		);
	}
}

export default Main;
