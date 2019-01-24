import React from 'react';
import Meta from './Meta';
import Title from '../Article/Title';

const Header = props =>
    <header className="portfolio__header portfolio-header">
        <Title {...props} isSingle={true} />
        <p className="lead text-center mb-5">An amazing project developed with love.</p>
        <Meta {...props} />
    </header>

export default Header;
