import React, { useEffect, useState, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { Accordion } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';

import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import _delayCall from 'lodash/delay';

import anime from 'animejs';
import ContentLoader from 'react-content-loader';
import VisibilitySensor from 'react-visibility-sensor';

import { getQA, updateQA } from './../../../redux/actions/questions';
import { isServer } from './../../../utilities/helpers';

const ContentLoaderRender = () => <ContentLoader {...{
    height: 160,
    width: "100%",
    speed: 5,
    primaryopacity: "0.5",
}}>
    <circle cx="10" cy="20" r="8" />
    <rect x="25" y="15" rx="5" ry="5" width="95%" height="10" />
    <circle cx="10" cy="50" r="8" />
    <rect x="25" y="45" rx="5" ry="5" width="95%" height="10" />
    <circle cx="10" cy="80" r="8" />
    <rect x="25" y="75" rx="5" ry="5" width="95%" height="10" />
    <circle cx="10" cy="110" r="8" />
    <rect x="25" y="105" rx="5" ry="5" width="95%" height="10" />
</ContentLoader>

const Questions = ({ pending, isLoading, getQA, questions }) => {
    const [activeSensor, setActiveSensor] = useState(true);

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

    const onChange = isVisible => {
        if (!pending && isVisible) {
            getQA();
            setActiveSensor(false);
            return;
        }
    };

    const animeRef = useRef();

    const renderQuestions = (questions) => {
        if (activeSensor) return <ContentLoaderRender />;

        if (questions.length === 0) {
            return (<div>No Questions asked. Feel free to ask them in the comments bellow.</div>);
        }

        return (
            <Accordion ref={animeRef}>{questions.map((item, i) => {
                const { title, content } = item;
                return (
                    <Accordion.Item key={i} eventKey={i}>
                        <Accordion.Header>{title?.rendered}</Accordion.Header>
                        <Accordion.Body>
                            <span className="small text-muted" dangerouslySetInnerHTML={{ __html: content?.rendered }}></span>
                        </Accordion.Body>
                    </Accordion.Item>
                );
            })}</Accordion>
        )
    };

    useEffect(() => {
        addIcons();

        if (questions.length === 0) return;

        const animate = _delayCall(() => {
            const cards = document.querySelectorAll('.accordion-item');
            return anime({
                targets: cards,
                opacity: {
                    value: [0, 1],
                    easing: 'linear',
                    duration: 800
                },
                translateY: [30, 0],
                delay: anime.stagger(300),
                easing: 'spring(1, 80, 10)',
            });
        }, 700);

        return () => {
            clearTimeout(animate);
            document.querySelector('.portfolio-questions').classList.remove('portfolio-questions--animated');
        }
    }, [questions]);

    return (
        <div className="portfolio-questions">
            <h3 className="lead text-primary">
                <i className="fal fa-question-circle me-2"></i>
                <span>Frequently Asked Questions</span>
            </h3>
            <div className="my-3 border-bottom border-light" />
            <VisibilitySensor onChange={onChange} active={activeSensor}>
                {!isServer && isLoading ? <ContentLoaderRender /> : renderQuestions(questions)}
            </VisibilitySensor>
        </div>
    );
};

// Binds menu items to navigation container
const mapStateToProps = (store, props) => {
    const { acf: { meta: { questions: include } } } = props;
    const { qa, ui: { pending, pendingQA: isLoading } } = store;
    const questions = _filter(qa, i => _includes(include, i.id));

    return ({ questions, pending, isLoading });
};

// mapDispatchToProps -> getQA
const mapDispatchToProps = dispatch => bindActionCreators({ getQA, updateQA }, dispatch);

const frontload = async props => {
    const { acf: { meta: { questions: include } }, getQA, updateQA } = props;
    const data = await getQA({ include });
    return updateQA(data);
};

export default connect(mapStateToProps, mapDispatchToProps)(
    frontloadConnect(frontload, { onMount: true, onUpdate: false })(Questions)
);