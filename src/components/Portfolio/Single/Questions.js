import React, { Component, Fragment } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { icon } from '@fortawesome/fontawesome-svg-core';
import anime from 'animejs';
import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import ContentLoader from 'react-content-loader';
import VisibilitySensor from 'react-visibility-sensor'
import { getQA, updateQA } from "../../../redux/actions/questions";
import { Accordion } from './../../../utilities/accordion';
import { isServer } from './../../../utilities/helpers';

class PortfolioQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSensor: false,
            animation: null,
        }
        this.props.getQA();
    }

    getIconHTML() {
        const faChevron = {
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

        return icon(faChevron).html[0];
    }

    componentDidUpdate() {
        if (isServer) return;

        const cards = document.querySelectorAll('.accordion .card');

        if (cards.length === 0) return;

        const createOpacityAnimationConfig = animatingIn => ({
            value: animatingIn ? [0, 1] : 0,
            easing: 'linear',
            duration: 800
        });

        const openFirst = () => {
            const button = cards[0].querySelector('button');
            if (button.classList.contains('is-active')) return;
            button.click();
        };

        if (this.state.animation === null) {
            this.setState({
                animation: anime({
                    targets: cards,
                    opacity: createOpacityAnimationConfig(true),
                    translateY: [50, 0],
                    delay: anime.stagger(300, { start: 500 }),
                    easing: 'spring(1, 80, 10)',
                    complete: openFirst,
                    autoplay: false
                }),
                activeSensor: true
            })
        }
    }

    renderLoader() {
        return (
            <ContentLoader
                height={160}
                width={445}
                speed={5}
                primaryColor="#f1f1f1"
                primaryOpacity="0.5"
                secondaryColor="#ecebeb"
            >
                <circle cx="10" cy="20" r="8" />
                <rect x="25" y="15" rx="5" ry="5" width="405" height="10" />
                <circle cx="10" cy="50" r="8" />
                <rect x="25" y="45" rx="5" ry="5" width="405" height="10" />
                <circle cx="10" cy="80" r="8" />
                <rect x="25" y="75" rx="5" ry="5" width="405" height="10" />
                <circle cx="10" cy="110" r="8" />
                <rect x="25" y="105" rx="5" ry="5" width="405" height="10" />
            </ContentLoader>
        );
    }

    renderQA() {
        const { questions = [] } = this.props;

        if (questions.length === 0) return;

        const makeHeadline = text => {
            return <span dangerouslySetInnerHTML={{ __html: `${this.getIconHTML()} ${text}` }}></span>
        };

        return (
            <Accordion>{questions.map((item, i) => {
                return (
                    <Accordion.Item key={i}>
                        <Accordion.Header>{makeHeadline(item.title.rendered)}</Accordion.Header>
                        <Accordion.Body>
                            <span dangerouslySetInnerHTML={{ __html: item.content.rendered }}></span>
                        </Accordion.Body>
                    </Accordion.Item>
                );
            })}</Accordion>
        );
    }

    render() {
        const { isLoading } = this.props;
        const { animation, activeSensor } = this.state;
        const playAnimation = isVisible => {
            if (isVisible) {
                animation.play();
                this.setState({ activeSensor: !activeSensor })
                return;
            }
        }
        return (
            <Fragment>
                <h3 className="lead mt-2">Frequently Asked Questions</h3>
                <hr />
                <VisibilitySensor onChange={playAnimation} active={activeSensor}>
                    {isLoading ? this.renderLoader() : this.renderQA()}
                </VisibilitySensor>
            </Fragment>
        );
    }
}

// Binds menu items to navigation container
const mapStateToProps = (store, props) => {
    const { include = [99, 98, 109, 111] } = props;
    const { qa, ui: { pending: isLoading } } = store;
    const questions = _filter(qa, i => _includes(include, i.id));

    return ({ questions, isLoading });
};

// mapDispatchToProps -> getPage
const mapDispatchToProps = dispatch => bindActionCreators({ getQA, updateQA }, dispatch);

// Export container while connected to store with frontload
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioQuestions);
