import React, { Component } from "react";
import { humanDuration } from "../../../utilities/helpers";
import _debounce from 'lodash/debounce';

let ScrollMagic;

// Components
export default class AboutExperience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scenes: [],
			experience: [
				{
					jobTitle: "WordPress/Frontend Developer",
					company: "AM2 Studio / myZone",
					description: `Contacted by Andrej - AM2Studio CEO, via Facebook, setup an interview and got a simple project 
                    to do. While I was guided by a senior front end developer and a couple of new tools where introduced to 
                    me (BEM, SCSS, GIT + more), I completed the project in about a 3 weeks training period. After that, my first developed 
                    site was live - <a href="http://www.solidevents.ca/" target="_blank">SolidEvents</a> (not maintained anymore) - and I got hired.`,
					meta: {
						from: "5 May 2017",
						to: new Date().toDateString(),
						location: "Remote / Home"
					}
				},
				{
					jobTitle: "Freelancer",
					company: "Individual",
					description: `I'm into web development since I was in highschool, however I really started to learn
                    more about it since 2015, when I started to develop my own WordPress theme, named
                    <a href="https://www.wecodeart.com/" target="_blank">WeCodeArt Framework</a>. The idea was simple 
                    - to build something fast and non-bloated with tons of features that you will never use.`,
					meta: {
						from: "Sep 2015",
						to: "5 May 2017",
						location: "Home"
					}
				}
			]
		};
	}

	componentDidMount() {
		ScrollMagic = require("scrollmagic");

		var timelineBar = document.querySelector(".timeline__bar");
		var timelineBoxes = document.querySelectorAll(".timeline-box");
		var firstBox = timelineBoxes[0];
		var lastBox = timelineBoxes[timelineBoxes.length - 1];

		const adjustHeight = function () { 
			let a, b;
			if (window.innerWidth < 768) {
				a = firstBox.offsetHeight;
				b = firstBox.offsetHeight - firstBox.offsetTop - 65;
			} else {
				a = firstBox.offsetHeight / 2;
				b = lastBox.offsetHeight / 2;
			}
			// Set Timeline Bar Top and Bottom
			timelineBar.style.top = a + "px";
			timelineBar.style.bottom = b + "px";
		};

		adjustHeight();

		window.addEventListener('resize', _debounce(adjustHeight, 150));

		this.handleAnimations();
	}

	componentDidUpdate() {
		this.state.scenes.forEach(scene => {
			setTimeout(() => scene.reverse(true), 200); // reset after 200ms, after scroll up
			scene.on('progress', (e) => (e.progress === 1) ? scene.reverse(false) : null)
		});
	}

	handleAnimations() {
		let boxes = document.querySelectorAll(".timeline-box");
		let boxesA = document.querySelectorAll(".timeline-box__animation");

		let controller = new ScrollMagic.Controller();

		var scenes = [];
		for (let i = 0; i < boxes.length; i++) {

			scenes.push(new ScrollMagic.Scene({
				triggerElement: boxesA[i],
				triggerHook: 0.85
			}).setClassToggle(boxesA[i], "timeline-box__animation--ended").addTo(controller));

			scenes.push(new ScrollMagic.Scene({
				triggerElement: boxes[i],
				triggerHook: 0.8
			}).setClassToggle(boxes[i], "timeline-box--animated").addTo(controller));

		}

		this.setState({ scenes });
	}

	renderExperience() {
		const { experience } = this.state;
		if (experience.length) {
			return experience.map((item, index) => {
				const { from, to } = item.meta;
				const idPrefix = "timeline-box-";
				return (
					<article
						id={idPrefix.concat(index + 1)}
						className="timeline-boxes__item timeline-box"
						key={index}
					>
						<div className="timeline-box__animation">
							<div className="row">
								<div className="timeline-box__meta col col-sm-12 col-md-5 col-lg-4 col-xl-3">
									<div className="timeline-box__meta-range">
										<span className="timeline-box__meta-range__from">
											<span className="text-uppercase">From</span>
											<span className="timeline-box__meta-range__from-date">
												{from}
											</span>
										</span>
										<span className="timeline-box__meta-range__to">
											<span className="text-uppercase">To</span>
											<span className="timeline-box__meta-range__to-date">
												{to === new Date().toDateString() ? "Present" : to}
											</span>
										</span>
										<p className="timeline-box__meta-range__age">
											({humanDuration({ from, to })})
                    					</p>
									</div>
									<div className="timeline-box__meta-company">
										<h5 className="timeline-box__meta-company__name">
											{item.company}
										</h5>
										<span className="timeline-box__meta-company__loc">
											{item.meta.location}
										</span>
									</div>
								</div>
								<div className="timeline-box__content col col-sm-12 col-md-7 col-lg-8 col-xl-9">
									<h4 className="timeline-box__content-headline">
										{item.jobTitle}
									</h4>
									<p
										className="timeline-box__content-description"
										dangerouslySetInnerHTML={{ __html: item.description }}
									/>
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
								<div className="timeline__bar" />
								<div className="timeline__boxes">{this.renderExperience()}</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
