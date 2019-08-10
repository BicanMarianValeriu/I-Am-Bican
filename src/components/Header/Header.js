import React from 'react';
import { withRouter } from 'react-router-dom';
import className from 'classnames';
import LoginButton from '../General/Login';
import GetInTouch from '../General/GetInTouch';
import Navigation from '../General/Navigation';

export default withRouter(props => {
    const { location: { pathname } } = props;

    const isPage = pathname.split('/')[1];
    const routes = ['/', '/p', '/portfolio/', '/portfolio'];

    const classNames = className(
        'header',
        { 'header--absolute': routes.includes(pathname) || isPage === 'p' },
        [routes.includes(pathname) || isPage === 'p' ? 'header--white' : 'header--blue'],
    );

    const CTA = () => {
        return (
            <div className="header__cta col col-auto">
                <GetInTouch className="header-cta" iconClass="far fa-paper-plane" label="Get In Touch" />
            </div>
        );
    };

    const Menu = () => (
        <div className="header__menu col">
            <Navigation wpMenuId={2} />
        </div>
    );

    const Login = () => {
        return (
            <div className="header__login col col-auto">
                <LoginButton />
            </div>
        );
    };

    return (
        <header id="header" className={classNames} itemScope="" itemType="http://schema.org/WPHeader">
            <div className="header__bar">
                <div className="container-fluid">
                    <div className="row align-items-center no-gutters">
                        <CTA />
                        <Menu />
                        <Login />
                    </div>
                </div>
            </div>
        </header>
    )
});
