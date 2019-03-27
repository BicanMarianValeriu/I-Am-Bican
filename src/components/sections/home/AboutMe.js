import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import anime from 'animejs';
import scrollToElement from 'scroll-to-element';
import { getMousePos } from "../../../utilities/helpers";
import { useWindowWidth } from "../../../hooks";

// Components
import AboutMeInfo from "./AboutMeInfo";
import GetInTouch from '../../General/GetInTouch';

// Assets 
import Bican from "./../../../static/images/bican.jpg";
import BicanOld from "./../../../static/images/bican-old.jpg";

export default () => {
	const { width: windowWidth } = useWindowWidth();

	const _onMouseMove = (e) => {
		const image = document.querySelector(".about-me__profile");

		const { x, y } = getMousePos(e);

		const getRotation = (a, axis, s) => a * ((axis / s) * 100 - 100);

		anime({
			targets: [image],
			rotateY: getRotation(0.2, x, image.offsetWidth),
			rotateX: getRotation(-0.2, y, image.offsetHeight),
			scale: 1.07,
			easing: 'easeOutElastic',
			perspective: 650
		})
	}

	const _onMouseLeave = () => {
		anime({
			targets: document.querySelector(".about-me__profile"),
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

	const _onLinkClick = () => scrollToElement('#footer');

	useEffect(() => {
		const images = document.querySelectorAll(".about-me__profile div");

		if (images.length) {
			setInterval(() => {
				let randomImg = images[Math.floor(Math.random() * images.length)];
				for (var i = 0, len = images.length; i < len; i++) images[i].classList.remove("shown");
				randomImg.classList.add("shown");
			}, 5000);
		};
	}, [])

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
		<section id="about-me" className="about-me">
			<div className="about-me__background" />
			<div className="about-me__intro">
				<div className="container">
					<div className="row align-items-center align-items-lg-start">
						<div className="col-sm-5 col-lg-4 about-me__image">
							<div className="about-me__image-wrap">
								<div className="about-me__profile box-shadow box-shadow--profile">
									<div className="shown" style={{ backgroundImage: `url('${Bican}')` }} />
									<div style={{ backgroundImage: `url('${BicanOld}')` }} />
									<svg className="about-me__profile-decoration" viewBox="0 0 300 415">
										<path d="M20.5,20.5h260v375h-260V20.5z"></path>
									</svg>
								</div>
							</div>
						</div>
						<div className="col-sm-7 col-lg-8 about-me__info">
							<h1 className="about-me__headline mb-4">Bican Marian Valeriu</h1>
							<p className="about-me__subline mb-2 mb-md-3">WordPress/React Developer at myZone/AM2Studio</p>
							<p className="about-me__subline mb-1 mb-md-2">Targu Jiu, Gorj, Romania</p>
						</div>
					</div>
				</div>
			</div>
			<div className="about-me__links">
				<div className="container">
					<div className="row justify-content-end">
						<div className="col-4 col-lg-3 text-center">
							<a href="#footer" className="about-me__link" onClick={_onLinkClick}>
								<i className="far fa-envelope"></i>
								<span>Contact Information</span>
							</a>
						</div>
						<div className="col-4 col-lg-2 text-center">
							<GetInTouch className="about-me__link btn-link" label="Send Message" />
						</div>
						<div className="col-4 col-lg-3 text-center">
							<Link to="/portfolio" className="about-me__link">
								<i className="fas fa-puzzle-piece"></i>
								<span>View Portfolio</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<AboutMeInfo />
		</section>
	);
} 