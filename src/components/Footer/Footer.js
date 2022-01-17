import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from '../General';
import Copyright from './Copyright';
import Social from './Social';
import Newsletter from './Newsletter';
// import ClientLogos from './ClientLogos';
import CallToAction from './CallToAction';

const Footer = () => {
    return (
        <footer id="footer" className="footer" itemScope="" itemType="http://schema.org/WPFooter">
            <CallToAction />
            {/* <ClientLogos /> */}
            <div className="footer__newsletter footer-newsletter">
                <Container className="border-top border-bottom border-light">
                    <Row className="py-3 py-lg-5 align-items-center">
                        <Col lg={6} xl={7}>
                            <h4 className="mb-0 text-center text-lg-start">Subscribe to my <strong>Newsletter</strong></h4>
                            <p className="mb-0 text-center text-lg-start">Get awesome news about my work.</p>
                        </Col>
                        <Col lg={6} xl={5} className="mt-3 mt-lg-0">
                            <Newsletter />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col md={6} className="text-center text-md-start my-3">
                            <Copyright />
                            <Social />
                        </Col>
                        <Col md={6} className="my-3">
                            <Navigation className="footer__menu" wpMenuId={7} menuClass="nav justify-content-center justify-content-md-end" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
};

export default Footer;
