import React from 'react';
import ContentLoader from 'react-content-loader';
import { Loader } from './../../components/General';

const Empty = () => {
	return (
		<div className="col-12 col-md-6 col-lg-4 entry entry--empty">
			<Loader />
			<ContentLoader height={100} width="100%" speed={3}>
				<rect x="25%" y="5" rx="3" ry="3" width="50%" height="12" />
				<rect x="5%" y="30" rx="3" ry="3" width="30%" height="10" />
				<rect x="40%" y="30" rx="3" ry="3" width="20%" height="10" />
				<rect x="65%" y="30" rx="3" ry="3" width="30%" height="10" />
				<rect x="15%" y="50" rx="3" ry="3" width="15%" height="10" />
				<rect x="35%" y="50" rx="3" ry="3" width="30%" height="10" />
				<rect x="70%" y="50" rx="3" ry="3" width="15%" height="10" />
				<rect x="35%" y="80" rx="3" ry="3" width="30%" height="15" />
			</ContentLoader>
		</div>
	);
}

export default Empty;