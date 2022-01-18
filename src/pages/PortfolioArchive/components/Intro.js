import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Like } from 'react-facebook';
import { library } from '@fortawesome/fontawesome-svg-core';

import { isServer } from './../../../utilities/helpers';

const PortfolioStats = ({ pending, isLoading, stats, categories }) => {
    const addIcons = () => {
        const faChevronDown = {
            icon: [
                512,
                512,
                [],
                'f078',
                'M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z'
            ],
            iconName: 'chevron-down',
            prefix: 'fal'
        };

        library.add([faChevronDown]);
    }

    useEffect(() => addIcons());

    return (
        <div className="portfolio-stats">
            <div className="container">
                <div className="row justify-content-center mb-4 pt-5 pb-3 pb-md-4">
                    <div className="col-lg-5 mb-3 mb-lg-0 text-center text-lg-end">
                        <span className="d-block text-uppercase fw-thin">Portfolio</span>
                        <h1 className="portfolio-stats__heading fw-bold mb-2">
                            SHOW
                            <span className="text-primary fw-extra-bold">/</span>
                            CASE
                        </h1>
                        <p className="mt-3 mb-2 offset-lg-3">
                            These projects are just a fraction of my work.
                            Feel free to browse them and take a closer look.
                        </p>
                    </div>
                    <div className="col-lg-5 offset-lg-1 text-center text-lg-start align-self-end">
                        {!isServer && <div className="mb-4 facebook-wide-wrapper overflow-hidden">
                            <Like href="https://www.iambican.com/portfolio/" showFaces share />
                        </div>}
                        <h2 className="portfolio-stats__view fw-semibold d-inline-block pb-3">View My Work</h2>
                        <ul className="portfolio-stats__nav nav justify-content-center justify-content-lg-start mb-0">
                            <li className="nav-item"><a className="nav-link active pl-0" href="#all">VIEW ALL</a></li>
                            <li className="nav-item"><a className="nav-link" href="#websites">Websites</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Binds menu items to navigation container
const mapStateToProps = store => {
    const { ui: {
        pending,
    } } = store;

    return ({ pending });
};

export default connect(mapStateToProps)(PortfolioStats);