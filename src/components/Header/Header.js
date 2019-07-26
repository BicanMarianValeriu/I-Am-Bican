import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginButton from '../General/Login';
import GetInTouch from '../General/GetInTouch';
import Navigation from '../General/Navigation';

export default withRouter(props => {
    let classes = ['header'];
    const { location: { pathname } } = props;
    let isPage = pathname.split('/')[1];
    const routes = ['/', 'p', '/portfolio'];

    // On home/page/portfolio we need the header to overlap content 
    if (routes.includes(pathname) || isPage === 'p') {
        classes.push('header--absolute');
        classes.push('header--white');
    } else classes.push(['header--blue']);

    // Home (index.html due to https redirect)
    if (pathname === '/') classes.push(['header--home']);

    const CTA = () => {
        return (
            <div className="header__cta col col-auto">
                <GetInTouch className="header-cta" label="Get In Touch" />
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
        <header id="header" className={classes.join(' ')} itemScope="" itemType="http://schema.org/WPHeader">
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
