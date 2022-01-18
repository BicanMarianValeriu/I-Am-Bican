import React from 'react';
import classNames from 'classnames';

import Page from './../../pages/Page/Item';
import Empty from './../../pages/Page/Empty';
import PortfolioSingle from './../../pages/PortfolioSingle/Item';
import PortfolioArchive from './../../pages/PortfolioArchive/Item';

const Main = (props) => {

	const isSingle = () => {
		const { posts, isSingle } = props;
		return (isSingle || 1 === posts.length);
	}

	const getOptions = () => {
		const { options = {} } = props;
		const defaultLoading = { enable: true, classes: [ 'placeholder' ], elements: isSingle() ? 1 : 6 };
		return { loading: { ...defaultLoading, ...options.loading } };
	}

	const getClasses = () => {
		const { loading, className } = props;

		const classes = ['main', isSingle() ? 'main--single' : 'main--archive', {
			'main--is-loading': loading,
			[className]: className !== undefined
		}];

		return classNames(classes);
	}

	const renderPosts = () => {
		const { posts = [], loading, loader: Loader = Empty} = props;

		if (loading !== true && posts.length > 0) {
			return posts.map(post => {
				let postType;
				switch (post.type) {
					case 'portfolio': postType = isSingle() ?
						<PortfolioSingle key={post.id} {...post} /> : <PortfolioArchive key={post.id} {...post} />;
						break;
					default: postType = <Page key={post.id} {...post} isSingle={isSingle()} />;
				}
				return postType;
			});
		} else {
			const { loading = {} } = getOptions();

			if (loading.enable === false) return;

			const items = isSingle() ? [...Array(1)] : [...Array(loading.elements)];

			return items.map((val, i) => <Loader key={i} options={{ ...loading }} />);
		}
	}

	return (<main id="postsContainer" className={getClasses()}>{renderPosts()}</main>);
}

export default Main;
