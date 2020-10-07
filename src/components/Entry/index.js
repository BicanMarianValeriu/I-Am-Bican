import React from 'react';
import classnames from 'classnames';

import Title from './Title';
import Content from './Content';

export default function Article(props) {
	const getClasses = () => {
		const { type, isSingle } = props;
		return classnames('entry', `entry--${isSingle ? 'single' : 'archive'}`, `entry--${type}`, `${type}`);
	}

	return (
		<article className={getClasses()}>
			{!props.isSingle && <Title {...props} />}
			<Content {...props} />
		</article>
	);
};
