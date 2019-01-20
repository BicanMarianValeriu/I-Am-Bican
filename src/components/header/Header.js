import React from 'react'; 
import Menu from './menu';
import Login from './login';

export default () => (
    <header id="header" className="header" itemScope="" itemType="http://schema.org/WPHeader">
        <div className="header__bar">
            <div className="container">
                <div className="row"> 
                    <Menu />
                    <Login />
                </div>
            </div>
        </div>
    </header>
);