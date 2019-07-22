import React from 'react';
import { withRouter } from 'react-router-dom';
import Copyright from './Copyright';
import Social from './Social';
import Newsletter from './Newsletter';
import Navigation from '../General/Navigation';
import ClientLogos from './ClientLogos';
import CallToAction from './CallToAction';

export default withRouter( props => { 
    return (
        <footer id="footer" className="footer" itemScope="" itemType="http://schema.org/WPFooter">
            <CallToAction />
            <ClientLogos />
            <div className="footer__newsletter footer-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="footer-newsletter__title mb-0 text-center text-lg-left">Subscribe to my <strong>Newsletter</strong></h4>
                            <p className="footer-newsletter__subtitle mb-0 mb-lg-4 text-center text-lg-left">Get awesome news about my work.</p>
                        </div>
                        <div className="col-lg-6">
                            <Newsletter />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left">
                            <Copyright />
                            <Social />
                        </div>
                        <div className="col-md-6">
                            <Navigation className="footer__menu" wpMenuId={7} menuClass="nav justify-content-center justify-content-md-end" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
});