import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PrevNext extends Component {
    render() {
        return (
            <div className="portfolio-prev-next">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between py-4">
                        <div className="col-auto">
                            <a className="portfolio-prev-next__item portfolio-prev-next__item--prev" href="portfolio-detail-2.html">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-arrow-left text-color--primary"></i>
                                    <div className="d-none d-sm-block">
                                        <span className="portfolio-prev-next__subtitle text-color--primary">PREVIOUS PROJECT</span>
                                        <h4 className="portfolio-prev-next__title font-weight-bold mb-0">Lorem Ipsumn</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-auto text-center">
                            <ul className="portfolio-prev-next__breadcrumbs justify-content-center mb-0 list-inline">
                                <li className="list-inline-item"><Link to="/">Home</Link></li>
                                <li className="list-inline-item text-muted active">Portfolio</li>
                            </ul>
                            <Link to="/portfolio" className="portfolio-prev-next__all font-weight-bold">
                                <i className="fas fa-th-large mr-2" aria-label="view all"></i>
                                <span>VIEW ALL</span>
                            </Link>
                        </div>
                        <div className="col-auto">
                            <a className="portfolio-prev-next__item portfolio-prev-next__item--next" href="portfolio-detail-3.html">
                                <div className="d-flex align-items-center">
                                    <div className="text-right d-none d-sm-block">
                                        <span className="portfolio-prev-next__subtitle text-color--primary">NEXT PROJECT</span>
                                        <h4 className="portfolio-prev-next__title font-weight-bold mb-0">Lorem Ipsumn</h4>
                                    </div>
                                    <i className="fas fa-arrow-right text-color--primary"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
