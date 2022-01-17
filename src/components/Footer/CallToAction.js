import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { GetInTouch } from './../General';

let ScrollMagic;

const CallToAction = () => {
    const { pathname } = useLocation();
    const [animations, setAnimations] = useState([]);
    const [pathName, setNewPathName] = useState(true);

    useEffect(() => {
        ScrollMagic = require("scrollmagic");

        const controller = new ScrollMagic.Controller();

        // Return early if location is the same
        if (pathName === pathname) return;

        const scene1 = new ScrollMagic.Scene({
            triggerElement: '.calltoaction',
            triggerHook: .8,
            reverse: false
        }).setClassToggle('.calltoaction__text', "fadeInLeft").addTo(controller);

        const scene2 = new ScrollMagic.Scene({
            triggerElement: '.calltoaction',
            triggerHook: .8,
            reverse: false
        }).setClassToggle('.calltoaction__buttons', "fadeInRight").addTo(controller);

        // Set Animations
        setAnimations([scene1, scene2]);

        // Set new location
        setNewPathName(pathname);

        // Reset Scene
        animations.forEach(scene => {
            setTimeout(() => scene.reverse(true), 100); // reset after 200ms, after scroll up
            scene.on('progress', e => (e.progress === 1) ? scene.reverse(false) : null)
        });

        // Clean
        return () => animations.forEach(scene => scene.destroy());

        // eslint-disable-next-line
    }, [pathname]);

    return (
        <div className="footer__calltoaction calltoaction">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg text-center text-lg-start calltoaction__text">
                        <h3 className="fw-light">Do you have a design and you want to
                            <strong className="font-cursive">bring it to life</strong>?
                        </h3>
                        <p className="lead">Is simple, drop me a message and let's setup a meeting.</p>
                    </div>
                    <div className="col-12 col-lg-auto text-center text-lg-end calltoaction__buttons">
                        <GetInTouch className="calltoaction__button btn-lg" iconClass="far fa-paper-plane" label="Let's Connect" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction; 
