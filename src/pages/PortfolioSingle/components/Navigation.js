import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Loader } from '../../../components/General';

const Navigation = ({ navigation = {}, loading } = {}) => {

    const renderLink = (context) => {
        const obj = navigation && navigation[context];

        let classes = ['portfolio-nav__item', 'portfolio-nav__item--' + context];

        if (obj) classes = [...classes, 'portfolio-nav__item--has-obj'];
        if (loading || !obj) classes = [...classes, 'portfolio-nav__item--disabled', 'text-muted', 'opacity-50'];

        let arrow = ['fas'];
        if (context === 'next') arrow = [...arrow, 'fa-arrow-right', 'ms-3'];
        if (context === 'prev') arrow = [...arrow, 'fa-arrow-left', 'me-3'];

        const label = (context === 'prev') ? 'PREVIOUS PROJECT' : 'NEXT PROJECT';

        const link = obj ? `/portfolio/${obj.slug}/` : '/';
        const title = obj ? obj.title : 'Lorem ipsum dolor';

        return (
            <Link className={classes.join(' ')} to={link}>
                <div className="d-flex align-items-center">
                    {context === 'prev' && <i className={arrow.join(' ')}></i>}
                    <div className="d-none d-sm-block">
                        <span className="small">{label}</span>
                        <h4 className="fw-bold h6 mb-0">{title}</h4>
                    </div>
                    {context === 'next' && <i className={arrow.join(' ')}></i>}
                    {loading && <Loader />}
                </div>
            </Link>
        );
    }

    return (
        <div className="portfolio-nav">
            <Container fluid>
                <Row className="align-items-center justify-content-between py-4">
                    <div className="col-auto col-sm-4 text-start">{renderLink('prev')}</div>
                    <div className="col-auto text-center">
                        <ul className="list-unstyed list-inline mb-0">
                            <li className="list-inline-item"><Link to="/">Home</Link></li>
                            <li className="list-inline-item text-muted active">Portfolio</li>
                        </ul>
                        <Link to="/portfolio/" className="small fw-bold text-black">
                            <i className="fas fa-th-large me-2" aria-label="view all"></i>
                            <span>VIEW ALL</span>
                        </Link>
                    </div>
                    <div className="col-auto col-sm-4 text-end">{renderLink('next')}</div>
                </Row>
            </Container>
        </div>
    )
}

export default Navigation;
