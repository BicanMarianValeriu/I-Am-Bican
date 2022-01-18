import React from 'react';

import Header from './components/Header';
import Content from './../Page/components/Content';
import Social from './components/Social';
import Sharing from './components/Sharing';
import Questions from './components/Questions';

const PortfolioSingle = (props) => {

	const getClassname = () => {
		let classes = ['entry', 'entry--portfolio', 'entry--single', 'portfolio'];
		return classes.join(' ');
	}

	return (
		<article className={getClassname()}>
			<Header {...props} />
			<div className="portfolio-content">
				<div className="container">
					<div className="row py-4 py-md-5 my-2">
						<div className="col-12 col-lg position-relative">
							<Sharing {...props} />
							<Content {...props} isSingle={true} />
						</div>
						<div className="col-12 col-lg-5 mt-3 mt-lg-0 d-flex flex-column">
							<Questions {...props} />
							<Social {...props} />
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default PortfolioSingle;
