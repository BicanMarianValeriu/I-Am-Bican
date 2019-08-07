import React from 'react';
import Meta from './Meta';
import Title from '../../Entry/Title';

const Header = props =>
    <header className="portfolio__header portfolio-header">
        <div className="container">
            <Title className="text-center" isSingle={true} {...props} />
            <p className="lead text-center mb-3 mb-lg-5">An amazing project developed with love.</p>
            <Meta {...props} />
        </div>
    </header>

export default Header;
