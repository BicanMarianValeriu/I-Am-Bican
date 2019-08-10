import React, { useEffect, useState, useRef } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core';

import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import _delayCall from 'lodash/delay';

import anime from 'animejs';
import ContentLoader from 'react-content-loader';
import VisibilitySensor from 'react-visibility-sensor';

import { getQA } from "../../../redux/actions/questions";
import { Accordion } from './../../../utilities/accordion';
import { isServer } from './../../../utilities/helpers';

const Questions = ({ pending, isLoading, getQA, questions }) => {
    const [{ activeSensor }, setState] = useState({ activeSensor: true });

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
        const faQuestionCircle = {
            icon: [
                512,
                512,
                [],
                'f059',
                'M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z'
            ],
            iconName: 'question-circle',
            prefix: 'fal'
        };

        library.add([faQuestionCircle, faChevronDown]);
    }

    const createOpacityAnimationConfig = animatingIn => ({
        value: animatingIn ? [0, 1] : 0,
        easing: 'linear',
        duration: 800
    });

    const animationComplete = cards => {
        const button = cards[0].querySelector('button');
        const container = document.querySelector('.portfolio-questions');
        container.classList.add('portfolio-questions--animated');
        if (button.classList.contains('is-active')) return;
        button.click();
    };

    const onChange = isVisible => {
        if (!pending && isVisible) {
            getQA();
            setState({ activeSensor: false });
            return;
        }
    };

    const animeRef = useRef();
    const hasQuestions = questions.length !== 0;

    useEffect(() => {
        addIcons();

        if (!hasQuestions) return;

        const animate = _delayCall(() => {
            const cards = document.querySelectorAll('.accordion .card');
            return anime({
                targets: cards,
                opacity: createOpacityAnimationConfig(true),
                translateY: [50, 0],
                delay: anime.stagger(300),
                easing: 'spring(1, 80, 10)',
                complete: () => animationComplete(cards)
            });
        }, 500);

        return () => {
            clearTimeout(animate);
        }
    }, [hasQuestions]);

    return (
        <div className="portfolio-questions">
            <h3 className="lead mt-2">
                <i className="fal fa-question-circle"></i>
                <span> Frequently Asked Questions</span>
            </h3>
            <hr />
            <div className="portfolio-questions__wrapper">
                <VisibilitySensor onChange={onChange} active={activeSensor}>
                    {!isServer && (isLoading || pending) ? () => {
                        const loaderProps = {
                            height: 160,
                            width: 445,
                            speed: 5,
                            primaryColor: "#f1f1f1",
                            primaryOpacity: "0.5",
                            secondaryColor: "#ecebeb"
                        }
                        return (
                            <ContentLoader {...loaderProps}>
                                <circle cx="10" cy="20" r="8" />
                                <rect x="25" y="15" rx="5" ry="5" width="405" height="10" />
                                <circle cx="10" cy="50" r="8" />
                                <rect x="25" y="45" rx="5" ry="5" width="405" height="10" />
                                <circle cx="10" cy="80" r="8" />
                                <rect x="25" y="75" rx="5" ry="5" width="405" height="10" />
                                <circle cx="10" cy="110" r="8" />
                                <rect x="25" y="105" rx="5" ry="5" width="405" height="10" />
                            </ContentLoader>
                        )
                    }
                        : <Accordion ref={animeRef}>{questions.map((item, i) => {
                            const { title, content } = item;
                            return (
                                <Accordion.Item key={i}>
                                    <Accordion.Header><i className="fal fa-chevron-down"></i> {title.rendered}</Accordion.Header>
                                    <Accordion.Body>
                                        <span dangerouslySetInnerHTML={{ __html: content.rendered }}></span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })}</Accordion>}
                </VisibilitySensor>
            </div>
        </div>
    );
};

// Binds menu items to navigation container
const mapStateToProps = (store, props) => {
    const { include = [99, 98, 109, 111] } = props;
    const { qa, ui: { pending, pendingQA: isLoading } } = store;
    const questions = _filter(qa, i => _includes(include, i.id));

    return ({ questions, pending, isLoading });
};

// mapDispatchToProps -> getQA
const mapDispatchToProps = dispatch => bindActionCreators({ getQA }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Questions);