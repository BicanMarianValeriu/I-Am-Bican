import React from 'react';
import { Like } from 'react-facebook';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import className from 'classnames';

import LoginButton from './../General/Login';
import GetInTouch from './../General/GetInTouch';
import Navigation from './../General/Navigation';
import { isServer } from './../../utilities/helpers';

const Header = () => {
    const { pathname } = useLocation();

    const isPage = pathname.split('/')[1];
    const routes = ['/', '/p'];

    const classNames = className(
        'header',
        { 'header--absolute': routes.includes(pathname) || isPage === 'p' },
        [routes.includes(pathname) || isPage === 'p' ? 'header--white' : 'header--blue'],
    );

    return (
        <header id="header" className={classNames} itemScope="" itemType="http://schema.org/WPHeader">
            <div className="header__bar">
                <Container fluid={true}>
                    <Row className="row flex-nowrap align-items-center no-gutters">
                        <Col xs="auto" className="header__cta">
                            <GetInTouch color="link" className="header-cta" iconClass="far fa-paper-plane" label="Get In Touch" />
                        </Col>
                        <Col xs="auto" className="header__social">
                            {isMobile || isServer ? null : <Like href="https://www.facebook.com/wecodeart/" showFaces={false} share action="recommend" />}
                        </Col>
                        <Col className="header__menu">
                            <Navigation className="test" wpMenuId={2} />
                        </Col>
                        <Col xs="auto" className="header__login">
                            <LoginButton />
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
};

export default Header;
