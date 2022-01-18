import React from 'react';
import { Link } from 'react-router-dom';

import Title from './../Page/components/Title';
import Content from './../Page/components/Content';
import Media from './../../components/General/Media';

const Item = (props) => {
	const { featured_media, slug } = props;

	return (
		<article className="col-12 col-md-6 col-lg-4 entry entry--portfolio portfolio">
			<Link to={`/portfolio/${slug}/`}>
				<Media mediaId={featured_media} />
			</Link>
			<div className="portfolio__description p-3 p-lg-2 p-xl-3 text-center">
				<Title className="h6 fw-bold" {...props} />
				<Content {...props} />
				<Link to={`/portfolio/${slug}/`} className="portfolio__more btn btn-link fw-bold text-uppercase">
					<span class="me-2">View More</span>
					<i className="fas fa-arrow-right"></i>
				</Link>
			</div>
		</article>
	);
}

export default Item;
