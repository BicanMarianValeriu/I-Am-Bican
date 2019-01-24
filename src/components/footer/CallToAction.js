import React, { Component } from 'react';
import GetInTouch from '../GetInTouch';
let ScrollMagic;

export default class CallToAction extends Component { 
    componentDidMount() { 
        // Add Animations
        ScrollMagic = require("scrollmagic"); 

        let controller = new ScrollMagic.Controller(); 

        new ScrollMagic.Scene({
            triggerElement: '.calltoaction',
            triggerHook: .8
        }).setClassToggle('.calltoaction__text', "fadeInLeft").addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: '.calltoaction',
            triggerHook: .8
        }).setClassToggle('.calltoaction__buttons', "fadeInRight").addTo(controller);
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
