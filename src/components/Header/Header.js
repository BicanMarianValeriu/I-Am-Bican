import React from 'react';
import Menu from './Menu';
import Login from './Login';
import { withRouter } from 'react-router-dom';
import GetInTouch from '../General/GetInTouch';

export default withRouter(props => {
    let classes = ['header'];
    let { location: { pathname } } = props;
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
            <div className="header__cta col">
                <GetInTouch className="header__cta-btn" label="Get In Touch" />
            </div>
        );
    };

    return (
        <header id="header" className={classes.join(' ')} itemScope="" itemType="http://schema.org/WPHeader">
            <div className="header__bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <CTA />
                        <Menu />
                        <Login />
                    </div>
                </div>
            </div>
        </header>
    )
});
