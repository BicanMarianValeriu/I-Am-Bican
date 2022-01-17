import React, { useEffect } from 'react';
import anime from 'animejs';
import { getMousePos } from './../../../utilities/helpers';
import { useWindowSize } from './../../../utilities/hooks';

// Components
import AboutMeInfo from './Info';
import AboutMeLinks from './Links';

// Assets 
import Bican from './../../../static/images/bican.jpg';
import BicanCartoon from './../../../static/images/bican-cartoon.jpg';

const Component = () => {
	const { width: windowWidth } = useWindowSize();

	const _onMouseMove = (e) => {
		const image = e.target.closest('.about-me__profile');

		const { x, y } = getMousePos(e);

		const getRotation = (a, axis, s) => a * ((axis / s) * 100 - 100);

		anime({
			targets: image,
			rotateY: getRotation(0.2, x, image.offsetWidth),
			rotateX: getRotation(-0.2, y, image.offsetHeight),
			scale: 1.07,
			easing: 'easeOutElastic',
			perspective: 650
		})
	}

	const _onMouseLeave = (e) => {
		anime({
			targets: e.target.closest('.about-me__profile'),
			scale: 1,
			translateX: 0,
			translateY: 0,
			translateZ: 0,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			easing: 'easeOutElastic'
		})
	}

	useEffect(() => {
		const images = document.querySelectorAll('.about-me__profile div');

		if (images.length) {
			setInterval(() => {
				let randomImg = images[Math.floor(Math.random() * images.length)];
				for (let i = 0, len = images.length; i < len; i++) images[i].classList.remove('shown');
				randomImg.classList.add('shown');
			}, 5000);
		};
	}, []);

	useEffect(() => {
		const image = document.querySelector(".about-me__profile");

		if (!image) return;

		if (windowWidth > 991) {
			image.addEventListener('mousemove', _onMouseMove);
			image.addEventListener('mouseleave', _onMouseLeave);
		}

		return (() => {
			image.removeEventListener('mousemove', _onMouseMove);
			image.removeEventListener('mouseleave', _onMouseLeave);
		})
	}, [windowWidth]);

	return (
		<section id="about-me" className="about-me position-relative bg-primary text-white">
			<div className="about-me__intro py-lg-5">
				<div className="container">
					<div className="row align-items-center align-items-lg-start">
						<div className="col-sm-5 col-lg-4 about-me__image">
							<div className="about-me__image-wrap">
								<div className="about-me__profile shadow">
									<div className="shown" style={{ backgroundImage: `url('${BicanCartoon}')` }} />
									<div style={{ backgroundImage: `url('${Bican}')` }} />
									<svg className="about-me__profile-decoration" viewBox="0 0 300 415">
										<path d="M20.5,20.5h260v375h-260V20.5z"></path>
									</svg>
								</div>
							</div>
						</div>
						<div className="col-sm-7 col-lg-8 align-self-end mb-4 mb-lg-0">
							<h1 className="about-me__headline fw-bold lh-1 mb-4">Bican Marian Valeriu</h1>
							<p className="lead lh-1 mb-2 mb-md-3">WordPress/React Developer at myZone/AM2Studio</p>
							<p className="lead lh-1 mb-1 mb-md-2">Targu Jiu, Gorj, Romania</p>
						</div>
					</div>
				</div>
			</div>
			<AboutMeLinks />
			<AboutMeInfo />
		</section>
	);
}

export default Component;
