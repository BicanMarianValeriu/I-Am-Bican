import React, { Component } from 'react';  
import { isServer } from './../../../utilities/helpers';

let ScrollMagic;
let Splitting;

class AboutSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scenes: [],
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
                    title: "CSS3/SCSS/BEM",
                    icon: 'fab fa-sass fa-fw',
                    description: `You are not a good web developer without CSS3. I use SASS/SCSS to pimp it and BEM for awesome/readable code.`,
                },
                {
                    title: "GIT/Bitbucket",
                    icon: 'fab fa-git fa-fw',
                    description: `Two of my favorite services for version control. I use them with Bitbucket Desktop APP to manage my repositories.`,
                },
                {
                    title: "WooCommerce",
                    icon: 'fal fa-shopping-cart fa-fw',
                    description: `That's my favorite WP plugin for building amazing shops. I love it since is highly customizable.`,
                },
                {
                    title: "GULP/WEBPACK",
                    icon: 'fab fa-gulp fa-fw',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc.`,
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
                },
            ]
        };
    }

    componentDidMount() {
        // Add Animations
        ScrollMagic = require("scrollmagic");
        Splitting = require("splitting");

        let controller = new ScrollMagic.Controller();
        let boxes = document.querySelectorAll(".skill-box");

        const scene1 = new ScrollMagic.Scene({
            triggerElement: '.about-skills__headline',
            triggerHook: .85
        }).setClassToggle('.about-skills__headline', "maskUp").addTo(controller);

        const scene2 = new ScrollMagic.Scene({
            triggerElement: '.about-skills__headline',
            triggerHook: .85
        }).setClassToggle('.about-skills__description', "maskUp").addTo(controller);

        let boxesScenes = [];
        for (let i = 0; i < boxes.length; i++) {
            boxesScenes[i] = new ScrollMagic.Scene({
                triggerElement: boxes[i],
                triggerHook: .95
            }).setClassToggle(boxes[i], "skill-box--animated").addTo(controller);
        }

        const target = document.querySelector('.about-skills__pre');
        Splitting({ target: target });

        const scenePre = new ScrollMagic.Scene({
            triggerElement: '.about-skills__headline',
            triggerHook: .75
        }).setClassToggle('.about-skills__pre', "about-skills__pre--animated").addTo(controller);

        this.setState({ scenes: [scene1, scene2, ...boxesScenes, scenePre] })

    }

    componentDidUpdate() {
        const { scenes } = this.state;
        scenes.forEach(scene => {
            setTimeout(() => scene.reverse(true), 200); // reset after 200ms, after scroll up
            scene.on('progress', (e) => (e.progress === 1) ? scene.reverse(false) : null)
        });
    }

    renderSkills() {
        const { skills } = this.state;
        if (skills.length) {
            let count = 0;
            return skills.map((item, index) => {
                if (index % 3 === 0) count = 0;
                count++;

                let delay;
                if (!isServer) delay = window.innerWidth > 992 ? 150 * count : 0;
                else delay = 0;

                const style = {
                    '--animation-delay': delay + 'ms'
                };
                return (
                    <div id={`skill-box-${index + 1}`} className="col-md-6 col-lg-4" key={index} >
                        <div className="skill-box" style={style}>
                            <h3 className="h6 fw-bold text-uppercase d-flex align-items-center mb-2">
                                <div className="me-3 text-primary">
                                    <i className={item.icon}></i>
                                </div>
                                {item.title}
                            </h3>
                            <p className="small text-muted mb-md-5 pb-3 ml-5" dangerouslySetInnerHTML={{
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
            <section id="about-skills" className="about-skills position-relative py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <span className="about-skills__pre fw-bold text-uppercase text-primary">Just few of my</span>
                            <div className="mb-2" style={{ overflow: 'hidden' }}>
                                <h2 className="about-skills__headline mb-0">Amazing Skills</h2>
                            </div>
                            <div className="mb-5" style={{ overflow: 'hidden' }}>
                                <p className="about-skills__description lead mb-0">...in addition, I'm allways open into learning new things and technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-baseline">{this.renderSkills()}</div>
                </div>
            </section>
        )
    }
}

export default AboutSkills;
