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

	const getLoading = () => {
		const { options: { loading = {} } = {} } = props;
		const defaultLoading = { enable: true, elements: isSingle() ? 1 : 6 };
		return { ...defaultLoading, ...loading };
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
		const { posts = [], loading, loader: Loader = Empty } = props;

		if (loading === true || posts === null || posts.length === 0) {
			const { enable, elements } = getLoading();

			if (enable === false) return;

			const items = isSingle() ? [...Array(1)] : [...Array(elements)];

			return items.map((val, i) => <Loader key={i} />);
		}

		return posts.map((post, i) => {
			let postType;
			const key = post?.id ? post.id : i;
			switch (post?.type) {
				case 'portfolio': postType = isSingle() ?
					<PortfolioSingle key={post?.id} {...post} /> : <PortfolioArchive key={key} {...post} />;
					break;
				default: postType = <Page key={key} {...post} isSingle={isSingle()} />;
			}
			return postType;
		});
	}

	return (<main id="postsContainer" className={getClasses()}>{renderPosts()}</main>);
}

export default Main;
