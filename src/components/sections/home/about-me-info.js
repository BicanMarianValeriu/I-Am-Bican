import React from 'react';

const AboutContent = () =>
    <div className="about-me__content">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="col-lg-6 ml-5 mb-5 mb-lg-4 float-right about-me__box box-shadow box-shadow--big">
                        <h4>Personal Details</h4>
                        <div className="row">
                            <div className="col-md-5">
                                <ul className="about-me__box-list p-0 mb-0">
                                    <li><span>Birthday:</span> 02-08-1993</li>
                                    <li><span>Nationality:</span> Romanian</li>
                                </ul>
                            </div>
                            <div className="col-md-7">
                                <ul className="about-me__box-list p-0 mb-0">
                                    <li><span>Phone:</span> <a href="tel:+40761176106">+40761176106</a></li>
                                    <li><span>eMail:</span> <a href="mailto:marianvaleriubican@gmail.com">marianvaleriubican@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2 className="about-me__content-title text-uppercase">About Me</h2>
                    <p className="about-me__content-text">I'm Bican, a full stack web developer from Targu Jiu, Romania. 
                    I love to share what I know through my work, articles and tutorials. I've been creating on the web for around 2 years
                    and have become pretty good at it. From a technical standpoint, I spend most of my time working with JavaScript, CSS3,
                    HTML5 and PHP (WordPress).</p> 
                    <p className="about-me__content-text">New and open source web technologies make me super excited and I can’t wait to see what is
                    to come of the web in the next few years. I’ve graduated of Targu Jiu UCB University’s Law program and soon Foreign Language: 
                    English. Why not computer or informatics? Well, this is a hard answer, but this is my passion and I LOVE what I do :).
                    </p>
                </div>
            </div>
        </div>
    </div>;

export default AboutContent;