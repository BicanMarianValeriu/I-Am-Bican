import React from 'react';
import DownloadLoader from '../download-loader';

const Empty = (props) => {
	let { options } = props;
	let classes = {
		...{
			outer: 'placeholder',
			inner: 'entry entry--empty'
		},
		...options.classes
	}
	options.classes = classes;

	const getWrapperClass = context => {
		return options.classes[context];
	}

	return (
		<div className={getWrapperClass('outer')}>
			<div className={getWrapperClass('inner')}>
				<DownloadLoader />
			</div>
		</div>
	);
}

export default Empty;