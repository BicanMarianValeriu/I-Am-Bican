import React from 'react';
import DownloadLoader from '../General/download-loader';

const Empty = props => {
	const { options = {} } = props;
	const { classes = {} } = options;
	
	const mergedClasses = {
		...{
			outer: 'placeholder',
			inner: 'entry entry--empty'
		},
		...classes
	}

	const getWrapperClass = context => {
		return mergedClasses[context];
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