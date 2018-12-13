import React, { Component } from 'react'; 
let ScrollMagic;

// Components
export default class AboutExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollmagic: false,
            experience: [
                {
                    jobTitle: 'WordPress/Frontend Developer',
                    company: 'AM2 Studio / myZone',
                    description: `Contacted by Andrej - AM2Studio CEO, via Facebook, setup an interview and got a simple project 
                    to do. While I was guided by a senior front end developer and a couple of new tools where introduced to 
                    me (BEM, SCSS, GIT + more), I completed the project in about a 3 weeks training period. After that, my first developed 
                    site was live - <a href="http://www.solidevents.ca/" target="_blank">SolidEvents</a> (not maintained anymore) - and I got hired.`,
                    meta: {
                        from: '5 May 2017',
                        to: new Date().toDateString(),
                        location: 'Remote / Home'
                    }
                },
                {
                    jobTitle: 'Freelancer',
                    company: 'Individuals',
                    description: `I'm into web development since I was in highschool, however I really started to learn
                    more about it since 2015, when I started to develop my own WordPress theme, named
                    <a href="https://www.wecodeart.com/" target="_blank">WeCodeArt Framework</a>. The idea was simple 
                    - to build something fast and non-bloated with tons of features that you will never use.`,
                    meta: {
                        from: 'Sep 2015',
                        to: '5 May 2017',
                        location: 'Home'
                    }
                }
            ]
        };
    }

    componentDidMount() {
        ScrollMagic = require('scrollmagic');
        this.setState({ scrollmagic: true });

        var timelineBar = document.querySelector('.timeline__bar');
        var timelineBoxes = document.querySelectorAll('.timeline-box');
        var firstBox = timelineBoxes[0];
        var lastBox = timelineBoxes[timelineBoxes.length - 1];

        var adjustHeight = function () {
            let a, b;
            if (window.innerWidth < 768) {
                a = firstBox.offsetHeight;
                b = firstBox.offsetHeight - firstBox.offsetTop - 65;
            } else {
                a = firstBox.offsetHeight / 2;
                b = lastBox.offsetHeight / 2;
            }
            // Set Timeline Bar Top and Bottom
            timelineBar.style.top = a + 'px';
            timelineBar.style.bottom = b + 'px';
        };

        adjustHeight();

        setTimeout(() => {
            window.onresize = () => adjustHeight();
        }, 500);
    }

    componentDidUpdate() {
        this.handleAnimations();
    }

    handleAnimations() {
        let boxes = document.querySelectorAll('.timeline-box');
        let boxesA = document.querySelectorAll('.timeline-box__animation');

        if (window.innerWidth < 576) {
            for (let i = 0; i < boxes.length; i++) boxesA[i].classList.add('timeline-box__animation--ended');
            for (let i = 0; i < boxes.length; i++) boxes[i].classList.add('timeline-box--animated');
            return;
        };

        if (this.state.scrollmagic === false) return;

        let controller = new ScrollMagic.Controller();

        for (let i = 0; i < boxes.length; i++) {
            new ScrollMagic.Scene({
                triggerElement: boxesA[i],
                triggerHook: .85,
            })
                .setClassToggle(boxesA[i], 'timeline-box__animation--ended')
                .addTo(controller);
            new ScrollMagic.Scene({
                triggerElement: boxes[i],
                triggerHook: .80,
            })
                .setClassToggle(boxes[i], 'timeline-box--animated')
                .addTo(controller);
        }
    }

    getDaysInMonths(date) {
        let monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
        let monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
        return monthLength;
    }

    renderWorkDuration({ from, to }) {
        let dateFrom = new Date(from), dateTo = new Date(to);
        let date2_UTC = new Date(Date.UTC(dateTo.getUTCFullYear(), dateTo.getUTCMonth(), dateTo.getUTCDate()));
        let date1_UTC = new Date(Date.UTC(dateFrom.getUTCFullYear(), dateFrom.getUTCMonth(), dateFrom.getUTCDate()));
        let yAppendix, mAppendix, dAppendix;
        //--------------------------------------------------------------
        let days = date2_UTC.getDate() - date1_UTC.getDate();
        if (days < 0) {
            date2_UTC.setMonth(date2_UTC.getMonth() - 1);
            days += this.getDaysInMonths(date2_UTC);
        }
        //--------------------------------------------------------------
        let months = date2_UTC.getMonth() - date1_UTC.getMonth();
        if (months < 0) {
            date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
            months += 12;
        }
        //--------------------------------------------------------------
        let years = date2_UTC.getFullYear() - date1_UTC.getFullYear();
        yAppendix = (years > 1) ? " years" : " year";
        mAppendix = (months > 1) ? " months" : " month";
        dAppendix = (days > 1) ? " days" : " day";

        return years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix;
    }

    renderExperience() {
        const { experience } = this.state;
        if (experience.length) {
            return experience.map((item, index) => {
                const { from, to } = item.meta;
                const idPrefix = 'timeline-box-';
                return (
                    <article id={idPrefix.concat(index + 1)} className="timeline-boxes__item timeline-box" key={index}>
                        <div className="timeline-box__animation">
                            <div className="row">
                                <div className="timeline-box__meta col col-sm-12 col-md-5 col-lg-4 col-xl-3">
                                    <div className="timeline-box__meta-range">
                                        <span className="timeline-box__meta-range__from">
                                            <span className="text-uppercase">From</span>
                                            <span className="timeline-box__meta-range__from-date">{from}</span>
                                        </span>
                                        <span className="timeline-box__meta-range__to">
                                            <span className="text-uppercase">To</span>
                                            <span className="timeline-box__meta-range__to-date">
                                                {to === new Date().toDateString() ? 'Present' : to}
                                            </span>
                                        </span>
                                        <p className="timeline-box__meta-range__age">
                                            ({this.renderWorkDuration({ from, to })})
                                        </p>
                                    </div>
                                    <div className="timeline-box__meta-company">
                                        <h5 className="timeline-box__meta-company__name">{item.company}</h5>
                                        <span className="timeline-box__meta-company__loc">{item.meta.location}</span>
                                    </div>
                                </div>
                                <div className="timeline-box__content col col-sm-12 col-md-7 col-lg-8 col-xl-9">
                                    <h4 className="timeline-box__content-headline">{item.jobTitle}</h4>
                                    <p className="timeline-box__content-description"
                                        dangerouslySetInnerHTML={{ __html: item.description }}></p>
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
                                <div className="timeline__bar"></div>
                                <div className="timeline__boxes">
                                    {this.renderExperience()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}