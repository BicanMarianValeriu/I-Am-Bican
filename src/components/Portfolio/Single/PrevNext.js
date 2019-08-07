import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PrevNext extends Component {

    renderLink(context) {
        const { navigation = {} } = this.props;

        const obj = navigation && navigation[context];

        let classes = ['portfolio-prev-next__item', 'portfolio-prev-next__item--' + context];

        if (obj) classes = [...classes, 'portfolio-prev-next__item--has-obj'];
        else classes = [...classes, 'portfolio-prev-next__item--disabled'];

        let arrow = ['fas'];
        if (context === 'next') arrow = [...arrow, 'fa-arrow-right'];
        if (context === 'prev') arrow = [...arrow, 'fa-arrow-left'];

        const label = (context === 'prev') ? 'PREVIOUS PROJECT' : 'NEXT PROJECT';

        const link = obj ? `/portfolio/${obj.slug}/` : '/';
        const title = obj ? obj.title : 'Lorem ipsum dolor';

        return (
            <Link className={classes.join(' ')} to={link}>
                <div className="d-flex align-items-center">
                    {context === 'prev' && <i className={arrow.join(' ')}></i>}
                    <div className="text-right d-none d-sm-block">
                        <span className="portfolio-prev-next__subtitle text-color--primary">{label}</span>
                        <h4 className="portfolio-prev-next__title font-weight-bold mb-0">{title}</h4>
                    </div>
                    {context === 'next' && <i className={arrow.join(' ')}></i>}
                </div>
            </Link>
        );
    }

    render() {
        return (
            <div className="portfolio-prev-next">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between py-4">
                        <div className="col-auto col-sm-4">{this.renderLink('prev')}</div>
                        <div className="col-auto text-center">
                            <ul className="portfolio-prev-next__breadcrumbs justify-content-center mb-0 list-inline">
                                <li className="list-inline-item"><Link to="/">Home</Link></li>
                                <li className="list-inline-item text-muted active">Portfolio</li>
                            </ul>
                            <Link to="/portfolio/" className="portfolio-prev-next__all font-weight-bold">
                                <i className="fas fa-th-large mr-2" aria-label="view all"></i>
                                <span>VIEW ALL</span>
                            </Link>
                        </div>
                        <div className="col-auto col-sm-4 text-right">{this.renderLink('next')}</div>
                    </div>
                </div>
            </div>
        )
    }
}
