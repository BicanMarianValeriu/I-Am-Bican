import React from 'react';
import classnames from 'classnames';

import Title from './components/Title';
import Content from './components/Content';

export default function Article(props) {
	const getClasses = () => {
		const { type, isSingle } = props;

		return classnames('entry', `entry--${type}`, `entry--${isSingle ? 'single' : 'archive'}`);
	}

	return (
		<article className={getClasses()}>
			{!props.isSingle && <Title {...props} />}
			<Content {...props} />
		</article>
	);
};
