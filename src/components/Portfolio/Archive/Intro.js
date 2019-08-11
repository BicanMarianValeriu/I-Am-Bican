import React, { useEffect,/*  useState  */ } from 'react';
//import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Like } from 'react-facebook';
import { library } from '@fortawesome/fontawesome-svg-core';
import { isServer } from './../../../utilities/helpers';

//import _filter from 'lodash/filter';
//import _includes from 'lodash/includes';

//import anime from 'animejs';
//import ContentLoader from 'react-content-loader';
//import { isServer } from './../../../utilities/helpers';

const PortfolioStats = ({ pending, isLoading, stats, categories }) => {
    //const [{ activeSensor }, setState] = useState({ activeSensor: true });

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

    useEffect(() => {
        addIcons();
    });

    return (
        <div className="portfolio-stats">
            <div className="container mb-3">
                <div className="row justify-content-center mb-5 pb-md-5 py-5">
                    <div className="col-lg-5 mb-2 mb-lg-0 text-center text-lg-right">
                        <span className="d-block text-uppercase font-weight-thin">Portfolio</span>
                        <h1 className="portfolio-stats__heading font-weight-bold mb-2">
                            SHOW
                            <span className="text-color-primary font-weight-extra-bold">/</span>
                            CASE
                        </h1>
                        <p className="mt-3 mb-0 offset-lg-3">
                            This projects are just a fraction of my work.
                            Feel free to browse them and take a closer look.
                        </p>
                    </div>
                    <div className="col-lg-5 offset-lg-1 text-center text-lg-left align-self-end">
                        <h2 className="portfolio-stats__view font-weight-semibold d-inline-block pb-3">View My Work</h2>
                        <ul className="portfolio-stats__nav nav justify-content-center justify-content-lg-start mb-4 mb-md-2">
                            <li className="nav-item"><a className="nav-link active pl-0" href="#all">VIEW ALL</a></li>
                            <li className="nav-item"><a className="nav-link" href="#websites">Websites</a></li>
                        </ul>
                        {!isServer && <div className="mb-1">
                            <Like href="https://www.iambican.com/portfolio/" showFaces share />
                        </div>}
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