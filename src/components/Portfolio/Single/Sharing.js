import React from 'react'
import { withRouter } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';

export default withRouter((props) => {
    const createUrl = () => {
        let url = `https://www.iambican.com`;
        const { link = '', location: { pathname = '/' } } = props;
        url = url + pathname;
        // Fallback to hardcoded just in case
        return link !== '' ? link : url;
    }

    const socialUrl = createUrl();

    return (
        <StickyContainer className="portfolio__sharing">
            <Sticky>{({ style }) => (
                <div className="portfolio-sharing" style={style}>
                    <FacebookShareButton url={socialUrl} ><i className="fab fa-facebook-square fa-fw" /></FacebookShareButton>
                    <LinkedinShareButton url={socialUrl} ><i className="fab fa-linkedin fa-fw" /></LinkedinShareButton>
                    <TwitterShareButton url={socialUrl} ><i className="fab fa-twitter fa-fw" /></TwitterShareButton>
                    <WhatsappShareButton url={socialUrl} ><i className="fab fa-whatsapp fa-fw" /></WhatsappShareButton>
                </div>)}
            </Sticky>
        </StickyContainer>
    );
});