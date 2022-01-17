import React from 'react';
import Meta from './Meta';
import Title from './../../Page/components/Title';
import { Container } from 'react-bootstrap';

const Header = props =>
    <header className="portfolio__header portfolio-header">
        <Container>
            <Title className="h2 fw-bold text-center" isSingle={true} {...props} />
            <p className="lead text-center mb-3 mb-lg-5">An amazing project developed with love.</p>
            <Meta {...props} />
        </Container>
    </header>

export default Header;
