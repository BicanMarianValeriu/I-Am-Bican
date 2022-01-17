import React from 'react';

const Social = () =>
    <ul className="footer__social social social--footer list-inline d-inline-block mb-0">
        <li className="list-inline-item social__item vertical-align-middle">
            <a href="https://www.facebook.com/bican.marian.valeriu" rel="noopener noreferrer" target="_blank">
                <div className="social__icon social__icon--facebook">
                    <i className="fab fa-facebook-square fa-fw"></i>
                </div>
            </a>
        </li>
        <li className="list-inline-item social__item vertical-align-middle">
            <a href="https://www.linkedin.com/in/marian-valeriu-bican-b12169103/" rel="noopener noreferrer" target="_blank">
                <div className="social__icon social__icon--linkedin">
                    <i className="fab fa-linkedin fa-fw"></i>
                </div>
            </a>
        </li>
    </ul>;

export default Social;
