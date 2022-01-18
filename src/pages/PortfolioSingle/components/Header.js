import React from 'react';
import Meta from './Meta';
import Title from './../../Page/components/Title';
import { Container } from 'react-bootstrap';

const Header = props =>
    <div className="portfolio__header bg-light">
        <Container className="py-5">
            <Title className="h2 fw-bold text-center" isSingle={true} {...props} />
            <p className="lead text-center mb-3 mb-lg-5">An amazing project developed with love.</p>
            <Meta {...props} />
        </Container>
    </div>

export default Header;
