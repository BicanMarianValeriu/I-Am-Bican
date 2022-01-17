import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';

const Sharing = (props) => {
    const { pathname = '/' } = useLocation();
    
    const createUrl = () => {
        let url = `https://www.iambican.com`;
        const { link = '' } = props;
        url = url + pathname;
        // Fallback to hardcoded just in case
        return link !== '' ? link : url;
    }

    const socialUrl = createUrl();

    return (
        <div className="portfolio__sharing">
            <div className="portfolio-sharing" >
                <FacebookShareButton url={socialUrl} ><i className="fab fa-facebook-square fa-fw" /></FacebookShareButton>
                <LinkedinShareButton url={socialUrl} ><i className="fab fa-linkedin fa-fw" /></LinkedinShareButton>
                <TwitterShareButton url={socialUrl} ><i className="fab fa-twitter fa-fw" /></TwitterShareButton>
                <WhatsappShareButton url={socialUrl} ><i className="fab fa-whatsapp fa-fw" /></WhatsappShareButton>
            </div>
        </div>
    );
};

export default Sharing;