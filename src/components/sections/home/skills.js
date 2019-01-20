import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { brands } from './../../../functions/svg-icons';
let ScrollMagic;

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            skills: [
                {
                    title: "Plain Javascript",
                    icon: 'fab fa-js fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                },
                {
                    title: "React JS",
                    icon: 'fab fa-react fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                },
                {
                    title: "WordPress",
                    icon: 'fab fa-wordpress-simple fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                }
                ,
                {
                    title: "PHP",
                    icon: 'fab fa-php fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                },
                {
                    title: "WooCommerce",
                    icon: 'fas fa-shopping-cart fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                },
                {
                    title: "HTML5",
                    icon: 'fab fa-html5 fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                },
                {
                    title: "GULP/WEBPACK",
                    icon: 'fab fa-gulp fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                },
                {
                    title: "CSS/SCSS",
                    icon: 'fab fa-sass fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                },
                {
                    title: "GIT/Bitbucket",
                    icon: 'fab fa-git fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                }
            ]
        };
    }

    componentDidMount() {
        // Add Icons to FA Library
        library.add(brands); 

        // Add Animations
        ScrollMagic = require("scrollmagic");
        this.setState({ scrollmagic: true });

        let boxes = document.querySelectorAll(".skill-box"); 

		/* if (window.innerWidth < 576) {
			for (let i = 0; i < boxes.length; i++) boxes[i].classList.add("skill-box--animated"); 
			return;
		} */

		if (this.state.scrollmagic === false) return;

		let controller = new ScrollMagic.Controller();

		for (let i = 0; i < boxes.length; i++) { 
			new ScrollMagic.Scene({
				triggerElement: boxes[i],
				triggerHook: 1
			}).setClassToggle(boxes[i], "skill-box--animated").addTo(controller);
		}
    }

    renderSkills() {
        const { skills } = this.state;
        if (skills.length) {
            return skills.map((item, index) => {
                let style = {
                    '--animation-delay': 100 * index + 'ms'
                }; 
                return (
                    <div id={`skill-box-${index + 1}`} className="col-md-6 col-lg-4" key={index} >
                        <div className="skill-box" style={style}>
                            <h3 className="skill-box__headline font-weight-bold d-flex align-items-center mb-2">
                                <div className="skill-box__icon mr-3">
                                    <i className={item.icon}></i>
                                </div>
                                {item.title}
                            </h3>
                            <p className="skill-box__description mb-md-5 pb-3 ml-5">{item.description}</p>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <section id="about-skills" className="about-skills">
                <div className="container">
                    <div className="row"> 
                        <div className="col text-center">
                            <span className="about-skills__pre text-uppercase text-font--cursive">Just few of my</span>
                            <h2 className="about-skills__headline">Amazing Skills</h2>
                            <p className="about-skills__description lead mb-5 pb-xlg">...in addition, I'm allways open into learning new things and technologies.</p>
                        </div>    
                    </div> 
                    <div className="row row align-items-baseline">{this.renderSkills()}</div>
                </div> 
            </section>
        )
    }
}
