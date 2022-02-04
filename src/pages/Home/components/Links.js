import React from 'react'
import { Link } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';
import { Container, Row, Col } from 'react-bootstrap';
import GetInTouch from '../../../components/General/GetInTouch';

const Component = () => (
    <div className="about-me__links position-relative bg-white">
        <Container>
            <Row className="justify-content-end gx-0">
                <Col xs={4} lg={3} className="text-center">
                    <a href="#about-experience" className="about-me__link text-primary" onClick={() => scrollToElement('#about-experience')}>
                        <i className="fal fa-briefcase"></i>
                        <span>Experience</span>
                    </a>
                </Col>
                <Col xs={4} lg={2} className="text-center">
                    <GetInTouch className="about-me__link text-primary" color="link" label="Send Message" />
                </Col>
                <Col xs={4} lg={3} className="text-center">
                    <Link to="/portfolio/" className="about-me__link text-primary">
                        <i className="fal fa-briefcase"></i>
                        <span>View Portfolio</span>
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Component;