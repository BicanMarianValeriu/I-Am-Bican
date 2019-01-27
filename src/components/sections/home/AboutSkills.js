import React, { Component } from 'react';
import Splitting from 'splitting';

let ScrollMagic;

export default class AboutSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                {
                    title: "React JS",
                    icon: 'fab fa-react fa-fw',
                    description: `One of the reasons (after ES6+) I started to love Javascript so much, and because you can make super fast SPA's.`,
                },
                {
                    title: "WordPress",
                    icon: 'fab fa-wordpress-simple fa-fw',
                    description: `Best things in life are <strong class="text-font--cursive">free</strong>, and WordPress is one of them. As Automatic says: "Code is poetry".`,
                },
                {
                    title: "PHP",
                    icon: 'fab fa-php fa-fw',
                    description: `One of the must-have skills of every full-stack developer. Average with it, I've learned it following WP coding standards.`,
                },
                {
                    title: "GULP/WEBPACK",
                    icon: 'fab fa-gulp fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
                },
                {
                    title: "CSS3/SCSS",
                    icon: 'fab fa-sass fa-fw',
                    description: `You are not a good web developer without CSS3. I use SASS/SCSS to pimp it and have awesome/readable code.`,
                },
                {
                    title: "GIT/Bitbucket",
                    icon: 'fab fa-git fa-fw',
                    description: `Two of my favorite tools for version control. I use them with Bitbucket Desktop APP to manage my repositories.`,
                },
                {
                    title: "WooCommerce",
                    icon: 'fas fa-shopping-cart fa-fw',
                    description: `That's my favorite WP plugin for building amazing shops. I love it since is highly customizable.`,
                },
                {
                    title: "Javascript (ES6+)",
                    icon: 'fab fa-js fa-fw',
                    description: `JavaScript has become one of my favorite programming language lately. From hating it to loving it.`,
                },
                {
                    title: "HTML5",
                    icon: 'fab fa-html5 fa-fw',
                    description: `The must-have skill of every developer. This is what I've learned firstly when I started web development.`,
                }
            ]
        };
    }

    componentDidMount() { 
        // Add Animations
        ScrollMagic = require("scrollmagic");
        
        let controller = new ScrollMagic.Controller();
        let boxes = document.querySelectorAll(".skill-box");

        new ScrollMagic.Scene({
            triggerElement: '.about-skills__headline',
            triggerHook: .8
        }).setClassToggle('.about-skills__headline', "maskUp").addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: '.about-skills__headline',
            triggerHook: .75
        }).setClassToggle('.about-skills__description', "maskUp").addTo(controller);

        for (let i = 0; i < boxes.length; i++) {
            new ScrollMagic.Scene({
                triggerElement: boxes[i],
                triggerHook: .95
            }).setClassToggle(boxes[i], "skill-box--animated").addTo(controller);
        }

        const target = document.querySelector('.about-skills__pre');
        Splitting({ target: target });

        new ScrollMagic.Scene({
            triggerElement: '.about-skills__headline',
            triggerHook: .75
        }).setClassToggle('.about-skills__pre', "about-skills__pre--animated").addTo(controller);
    }

    renderSkills() {
        const { skills } = this.state;
        if (skills.length) {
            let count = 0;
            return skills.map((item, index) => {
                if (index % 3 === 0) count = 0;
                count++;
                let style = {
                    '--animation-delay': 150 * count + 'ms'
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
                            <p className="skill-box__description mb-md-5 pb-3 ml-5" dangerouslySetInnerHTML={{
                                __html: item.description
                            }}></p>
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
                            <div className="mb-2" style={{overflow:'hidden'}}>
                                <h2 className="about-skills__headline mb-0">Amazing Skills</h2>
                            </div>
                            <div className="mb-5" style={{overflow:'hidden'}}>
                                <p className="about-skills__description lead mb-0">...in addition, I'm allways open into learning new things and technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row align-items-baseline">{this.renderSkills()}</div>
                </div>
            </section>
        )
    }
}
