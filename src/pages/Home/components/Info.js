import React from 'react';

class AboutContent extends React.Component {

    componentDidMount() {
        var willOpen = true;
        var description = document.querySelector('.about-me__content-text');
        var descButton = document.querySelector('.about-me__content-more');

        descButton.addEventListener('click', function () {
            if (willOpen) {
                description.classList.add('about-me__content-text--opened');
                this.innerHTML = this.getAttribute('data-less-label');
                willOpen = false;
            } else {
                description.classList.remove('about-me__content-text--opened');
                this.innerHTML = this.getAttribute('data-more-label');
                willOpen = true;
            }
        }); 
    } 

    render() {

        return (
            <div className="about-me__content bg-white text-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12 col-lg-6 ms-5 mb-5 mb-lg-4 float-end">
                                <div className="p-3 p-sm-5 shadow-lg">
                                    <h6 className="fw-bold">Personal Details</h6>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <ul className="list-unstyled text-uppercase text-muted small mb-0">
                                                <li><span>Birthday:</span> 02-08-1993</li>
                                                <li><span>Nationality:</span> Romanian</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list-unstyled text-uppercase text-muted small mb-0">
                                                <li><span>Phone:</span> <a href="tel:+40761176106">+40761176106</a></li>
                                                <li><span>eMail:</span> <a href="mailto:marianvaleriubican@gmail.com">mvbican@gmail.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="about-me__content-title text-uppercase">About Me</h2>
                            <div className="about-me__content-text text-dark text-opacity-75">
                                <p>I'm Bican, a full stack web developer from Targu Jiu, Romania.
                                I love to share what I know through my work, articles and tutorials. I've been creating on the web for around 2 years
                                and have become pretty good at it. From a technical standpoint, I spend most of my time working with JavaScript, CSS3,
                                HTML5 and PHP (WordPress).</p>
                                <p>New and open source web technologies make me super excited and I can’t wait to see what is
                                to come of the web in the next few years. I’ve graduated of Targu Jiu UCB University’s Law program and <mark>soon</mark> English Philology. 
                                Why not computer or informatics? Well, this is a hard answer, but this is my passion and I LOVE what I do :).
                                </p>
                            </div>
                            <button className="about-me__content-more btn btn-outline-dark btn-sm"
                                data-less-label="read less"
                                data-more-label="read more">read more</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutContent;
