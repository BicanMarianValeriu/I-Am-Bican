import React from 'react'
import { Link } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';
import GetInTouch from '../../../components/General/GetInTouch';

export default () => (
    <div className="about-me__links">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-4 col-lg-3 text-center">
                    <a href="#footer" className="about-me__link" onClick={() => scrollToElement('#footer')}>
                        <i className="fal fa-envelope"></i>
                        <span>Contact Information</span>
                    </a>
                </div>
                <div className="col-4 col-lg-2 text-center">
                    <GetInTouch className="about-me__link" color="link" label="Send Message" />
                </div>
                <div className="col-4 col-lg-3 text-center">
                    <Link to="/portfolio/" className="about-me__link">
                        <i className="fal fa-briefcase"></i>
                        <span>View Portfolio</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
); 