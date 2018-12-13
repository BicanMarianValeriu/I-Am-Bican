import React from 'react';
import ReactSVG from 'react-svg'; 

import Facebook from '../../assets/svg/social/facebook.svg';
import Linkedin from '../../assets/svg/social/linkedin.svg';

const Social = () =>
    <ul className="footer__social social social--footer">
        <li className="social__item">
            <a href="https://www.facebook.com/bican.marian.valeriu" rel="noopener noreferrer" target="_blank">
                <ReactSVG src={Facebook} svgClassName="svg-icon svg-icon--social-footer" className="social__icon social__icon--facebook" />
            </a>
        </li>
        <li className="social__item">
            <a href="https://www.linkedin.com/in/marian-valeriu-bican-b12169103/" rel="noopener noreferrer" target="_blank">
                <ReactSVG src={Linkedin} svgClassName="svg-icon svg-icon--social-footer" className="social__icon social__icon--linkedin" />
            </a>
        </li>
    </ul>;

export default Social;