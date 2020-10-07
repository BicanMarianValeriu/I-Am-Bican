import React from 'react';
import { withRouter } from 'react-router-dom';
import { Like } from 'react-facebook';
import { Container, Row, Col } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import className from 'classnames';
import LoginButton from '../General/Login';
import GetInTouch from '../General/GetInTouch';
import Navigation from '../General/Navigation';
import { isServer } from '../../utilities/helpers';

export default withRouter(props => {
    const { location: { pathname } } = props;

    const isPage = pathname.split('/')[1];
    const routes = ['/', '/p'];

    const classNames = className(
        'header',
        { 'header--absolute': routes.includes(pathname) || isPage === 'p' },
        [routes.includes(pathname) || isPage === 'p' ? 'header--white' : 'header--blue'],
    );

    const CTA = () => {
        return (
            <Col className="header__cta col col-auto">
                <GetInTouch color="link" className="header-cta" iconClass="far fa-paper-plane" label="Get In Touch" />
            </Col>
        );
    };

    const Menu = () => (
        <Col className="header__menu col col-auto">
            <Navigation wpMenuId={2} />
        </Col>
    );

    const Login = () => {
        return (
            <Col className="header__login col col-auto">
                <LoginButton />
            </Col>
        );
    };

    const FBPage = () => {
        if (isMobile || isServer) return <div className="header__social col col-auto ml-auto mr-0 pr-2"></div>;
        return (
            <div className="header__social col col-auto ml-auto mr-0 pr-2">
                <Like href="https://www.facebook.com/wecodeart/" showFaces share action="recommend" />
            </div>
        )
    }

    return (
        <header id="header" className={classNames} itemScope="" itemType="http://schema.org/WPHeader">
            <div className="header__bar">
                <Container fluid={true}>
                    <Row className="row flex-nowrap align-items-center no-gutters">
                        <CTA />
                        <FBPage />
                        <Menu />
                        <Login />
                    </Row>
                </Container>
            </div>
        </header>
    )
});
