import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { useImage } from 'react-image';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import _find from 'lodash/find';

import { getMedia } from './../../redux/actions/media';
import { Loader } from '.';
import placeholder from './../../static/images/placeholder-bold.png';


const Media = (props) => {

    const { mediaId, getMedia, mediaObj } = props;

    const Image = ({ image }) => {

        const getMediaUrls = () => {
            const { media_details: {
                sizes: {
                    thumbnail: { source_url: lowRes = '' } = {},
                    medium_large: { source_url: highRes = '' } = {}
                } = {}
            } = {} } = image;

            return [highRes, lowRes, placeholder];
        }

        const { src } = useImage({
            srcList: getMediaUrls(),
        });

        return <img className={classNames('wp-media__src', { 'wp-media__src--loading': ! mediaObj })} src={src} alt="" />
    }

    useEffect(() => getMedia(mediaId));

    return (
        <div className="wp-media">
            <div className="wp-media__ratio ratio ratio-16x9">
                <Suspense fallback={<Loader type="spinningBubbles" />}>
                    <Image image={mediaObj} />
                </Suspense>
            </div>
        </div>
    );
}

// Binds Query / Query Result
const mapStateToProps = (store, { mediaId }) => {
    const { media } = store;
    const mediaObj = _find(media, { id: mediaId }) || false;

    return ({ mediaObj });
};

// Connect fetchDispatch function to props.fetchDispatch
const mapDispatchToProps = dispatch => bindActionCreators({ getMedia }, dispatch);

// Export container while connected to store and SSR
export default connect(mapStateToProps, mapDispatchToProps)(Media);