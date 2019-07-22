import React, { Component } from "react";
import { humanDuration } from "../../../utilities/helpers";
import _debounce from 'lodash/debounce';
import anime from 'animejs';

let ScrollMagic;

// Components
export default class AboutExperience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			controller: null,
			scenes: [],
			experience: [
				{
					jobTitle: "WordPress/Frontend Developer",
					company: "AM2 Studio / myZone",
					description: `Contacted by Andrej - AM2Studio CEO, via Facebook, setup an interview and got a simple project 
                    to do. While I was guided by a senior front end developer and a couple of new tools where introduced to 
                    me (BEM, SCSS, GIT + more), I completed the project in about a 3 weeks training period. After that, my first developed 
                    site was live - <a href="http://www.solidevents.ca/" target="_blank">SolidEvents</a> (not maintained anymore) - and I got hired.`,
					location: "Remote / Home",
					duration: {
						from: "5 May 2017",
						to: new Date().toDateString(),
					}
				},
				{
					jobTitle: "Freelancer",
					company: "Individual",
					description: `I'm into web development since I was in highschool, however I really started to learn
                    more about it since 2015, when I started to develop my own WordPress theme, named
                    <a href="https://www.wecodeart.com/" target="_blank">WeCodeArt Framework</a>. The idea was simple 
                    - to build something fast and non-bloated with tons of features that you will never use.`,
					location: "Home",
					duration: {
						from: "Sep 2015",
						to: "5 May 2017",
					}
				}
			]
		};
	}

	componentDidMount() {
		ScrollMagic = require("scrollmagic");

		const controller = new ScrollMagic.Controller();

		const timelineBar = document.querySelector(".timeline__bar");
		const timelineBoxes = document.querySelectorAll(".timeline-box");
		const firstBox = timelineBoxes[0];
		const lastBox = timelineBoxes[timelineBoxes.length - 1];

		const adjustHeight = () => {
			let a, b;
			a = firstBox.offsetHeight / 2;
			b = lastBox.offsetHeight / 2;
			// Set Timeline Bar Top and Bottom
			timelineBar.style.top = a + "px";
			timelineBar.style.bottom = b + "px";
		};

		adjustHeight();

		const animeObj = anime({
			targets: timelineBar.firstChild,
			height: [0, '100%'],
			easing: 'linear',
			duration: timelineBar.clientHeight,
			autoplay: false
		});

		const scene = new ScrollMagic.Scene({ triggerElement: firstBox, duration: timelineBar.clientHeight, triggerHook: .75 })
			.addTo(controller).on('progress', e => animeObj.seek(animeObj.duration * e.progress));

		const updateScene = () => scene.duration(timelineBar.clientHeight);

		window.addEventListener('resize', _debounce(updateScene, 50));
		window.addEventListener('resize', _debounce(adjustHeight, 150));

		this.handleAnimations(controller);
	}

	componentDidUpdate() {
		this.state.scenes.forEach(scene => {
			setTimeout(() => scene.reverse(true), 200); // reset after 200ms, after scroll up
			scene.on('progress', (e) => (e.progress === 1) ? scene.reverse(false) : null)
		});
	}

	handleAnimations(controller) {
		const boxes = document.querySelectorAll(".timeline-box");
		const boxesA = document.querySelectorAll(".timeline-box__animation");

		let scenes = [];

		for (let i = 0; i < boxes.length; i++) {

			scenes.push(new ScrollMagic.Scene({
				triggerElement: boxesA[i],
				triggerHook: .85
			}).setClassToggle(boxesA[i], "timeline-box__animation--ended").addTo(controller));

			new ScrollMagic.Scene({
				triggerElement: boxes[i],
				triggerHook: .75
			}).setClassToggle(boxes[i], "timeline-box--animated").addTo(controller);

		}

		this.setState({ scenes });
	}

	renderExperience() {
		const { experience } = this.state;
		if (experience.length) {
			return experience.map((item, index) => {
				const { from, to } = item.duration;
				const idPrefix = "timeline-box-";
				return (
					<article
						id={idPrefix.concat(index + 1)}
						className="timeline-boxes__item timeline-box"
						key={index}
					>
						<div className="timeline-box__animation">
							<div className="row">
								<div className="timeline-box__meta col col-sm-12 col-md-5 col-lg-4 col-xl-3 pt-3 px-3 p-md-4 d-flex flex-column justify-content-center">
									<div className="timeline-box__meta-range d-flex justify-content-between">
										<span className="timeline-box__meta-range__from">
											<span className="text-uppercase">From:</span>
											<span className="timeline-box__meta-range__from-date">
												{from}
											</span>
										</span>
										<span className="timeline-box__meta-range__to">
											<span className="text-uppercase">To:</span>
											<span className="timeline-box__meta-range__to-date">
												{to === new Date().toDateString() ? "Present" : to}
											</span>
										</span>
									</div>
									<p className="timeline-box__meta-duration">({humanDuration({ from, to })})</p>
									<div className="timeline-box__meta-company d-flex flex-row flex-md-column justify-content-between">
										<h5 className="timeline-box__meta-company__name">
											{item.company}
										</h5>
										<span className="timeline-box__meta-company__loc">
											{item.location}
										</span>
									</div>
								</div>
								<div className="timeline-box__content col col-sm-12 col-md-7 col-lg-8 col-xl-9 pt-1 px-3 pb-2 p-md-3 p-md-4 p-xl-5 d-flex flex-column justify-content-center">
									<h4 className="timeline-box__content-headline">{item.jobTitle}</h4>
									<p className="timeline-box__content-description mb-0" dangerouslySetInnerHTML={{ __html: item.description }} />
								</div>
							</div>
						</div>
					</article>
				);
			});
		}
	}

	render() {
		return (
			<section id="about-experience" className="about-experience">
				<div className="container">
					<div className="row">
						<div className="col">
							<h2 className="about-experience__headline text-uppercase">Experience</h2>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="about-experience__timeline timeline">
								<div className="timeline__bar">
									<div className="timeline__bar-inner"></div>
								</div>
								<div className="timeline__boxes">{this.renderExperience()}</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
