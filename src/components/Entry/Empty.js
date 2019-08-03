import React from 'react';
import DownloadLoader from '../General/download-loader';
import ContentLoader from "react-content-loader"

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
				<ContentLoader
					height={100}
					width={400}
					speed={3}
					primaryColor="#f3f3f3"
					secondaryColor="#dddddd"
				>
					<rect x="130" y="5" rx="3" ry="3" width="140" height="12" />
					<rect x="50" y="30" rx="3" ry="3" width="130" height="10" />
					<rect x="185" y="30" rx="3" ry="3" width="30" height="10" />
					<rect x="220" y="30" rx="3" ry="3" width="130" height="10" />
					<rect x="90" y="50" rx="3" ry="3" width="60" height="10" />
					<rect x="155" y="50" rx="3" ry="3" width="90" height="10" />
					<rect x="250" y="50" rx="3" ry="3" width="60" height="10" />
					<rect x="175" y="80" rx="3" ry="3" width="50" height="15" />
				</ContentLoader>
			</div>
		</div>
	);
}

export default Empty;