import React from 'react';

//import Branding from './header/branding';
import Menu from './header/menu';
import Login from './header/login';

export default () => (
    <header id="header" className="header" itemScope="" itemType="http://schema.org/WPHeader">
        <div className="header__bar">
            <div className="container">
                <div className="row">
                    {/* <Branding /> */}
                    <Menu />
                    <Login />
                </div>
            </div>
        </div>
    </header>
);