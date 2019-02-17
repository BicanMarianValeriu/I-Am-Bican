import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import GetInTouch from '../GetInTouch';
let ScrollMagic;

class CallToAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scenes: []
        }
    }

    shouldComponentUpdate(nextProps) {
        let { pathname } = this.props;
        return (pathname !== nextProps.location.pathname);
    }

    componentDidUpdate() {
        let { pathname } = this.props.location;
        // Dirty hack to reinit SM scene on router location change
        this.state.scenes.forEach(scene => {
            scene.reverse(true); // Set the reverse param to true then after playing it, reset it
            if (pathname !== '/') scene.on('progress', (e) => (e.progress === 1) ? scene.reverse(false) : null)
        });
    }

    componentDidMount() {
        ScrollMagic = require("scrollmagic");

        let controller = new ScrollMagic.Controller();
        let { pathname } = this.props.location;
        let reverse = pathname === '/' ? true : false;
        let scene1 = new ScrollMagic.Scene({
            triggerElement: '.calltoaction',
            triggerHook: .8,
            reverse: reverse
        }).setClassToggle('.calltoaction__text', "fadeInLeft").addTo(controller);

        let scene2 = new ScrollMagic.Scene({
            triggerElement: '.calltoaction',
            triggerHook: .8,
            reverse: reverse
        }).setClassToggle('.calltoaction__buttons', "fadeInRight").addTo(controller);

        this.setState({ scenes: [scene1, scene2] })
    }

    render() {
        return (
            <div className="footer__calltoaction calltoaction">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg text-center text-lg-left calltoaction__text">
                            <h3 className="text text-weight--light">Do you have a design and you want to
                                <strong className="text-font--cursive">bring it to life</strong>?
                            </h3>
                            <p className="lead">Is simple, drop me a message and let's setup a meeting.</p>
                        </div>
                        <div className="col-12 col-lg-auto text-center text-lg-right calltoaction__buttons">
                            <GetInTouch className="calltoaction__button btn-lg" label="Let's Connect" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CallToAction);