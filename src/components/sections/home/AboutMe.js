import React, { Component } from "react";
import { Link } from "react-router-dom";
import scrollToElement from 'scroll-to-element';

// Components
import AboutMeInfo from "./AboutMeInfo";
import GetInTouch from '../../GetInTouch';
import { TweenMax, Power2 } from "gsap/umd/TweenMax";

// Assets 
import Bican from "./../../../static/images/bican.jpg";
import BicanOld from "./../../../static/images/bican-old.jpg";

export default class AboutMe extends Component {
	componentDidMount() {
		this._handleMouseMoveBound = this._onMouseMove.bind(this);
		this._handleMouseLeaveBound = this._onMouseLeave.bind(this);

		this.handlePictureChange();
		this.setupEventHandlers();
	}

	setupEventHandlers() {
		let image = document.querySelector(".about-me__profile");
		if (!image) return;

		const maybeInit = () => {
			if (window.innerWidth < 991) {
				image.removeEventListener('mousemove', this._handleMouseMoveBound);
			} else {
				image.addEventListener('mousemove', this._handleMouseMoveBound);
			};
		}

		image.addEventListener('mousemove', this._handleMouseMoveBound);
		image.addEventListener('mouseleave', this._handleMouseLeaveBound);

		window.addEventListener('load', maybeInit);
		window.addEventListener('resize', maybeInit);
	}

	handlePictureChange() {
		let images = document.querySelectorAll(".about-me__profile div");
		setInterval(() => {
			let randomImg = images[Math.floor(Math.random() * images.length)];
			for (var i = 0, len = images.length; i < len; i++) images[i].classList.remove("shown");
			randomImg.classList.add("shown");
		}, 5000);
	}

	_onMouseMove(e) {
		let image = document.querySelector(".about-me__profile"), mouseX, mouseY;
		e = e || window.event;

		mouseX = e.pageX;
		mouseY = e.pageY;

		let xPos = (mouseX / image.offsetWidth) * 100 - 100,
			yPos = (mouseY / image.offsetHeight) * 100 - 100;

		TweenMax.to(image, 0.5, {
			rotationY: 0.15 * xPos,
			rotationX: -0.15 * yPos,
			scale: 1.07,
			ease: Power2.easeOut,
			transformPerspective: 500,
			transformOrigin: "center"
		});
	}

	_onMouseLeave() {
		let image = document.querySelector(".about-me__profile");
		TweenMax.to(image, 0.5, { rotationY: 0, rotationX: 0, scale: 1 })
	}

	_onLinkClick() {
		scrollToElement('#footer');
	}

	render() {
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
								<a href="#footer" className="about-me__link" onClick={this._onLinkClick.bind(this)}>
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
}
