import React, { useEffect } from 'react';
import { useImage } from 'react-image';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import _find from 'lodash/find';

import { getMedia } from './../../redux/actions/media';
import { Loader } from '.';
import placeholder from './../../static/images/placeholder-bold.png';


const Media = ({ mediaId }) => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(getMedia(mediaId)), [dispatch, mediaId]);

    const { mediaObj } = useSelector(({ media }) => ({ mediaObj: _find(media, { id: mediaId }) || false }));

    const Image = ({ image }) => {

        const { alt_text } = mediaObj;

        const getMediaUrls = () => {
            const { media_details: {
                sizes: {
                    thumbnail: { source_url: lowRes = '' } = {},
                    medium_large: { source_url: highRes = '' } = {}
                } = {}
            } = {} } = image;

            return [highRes, lowRes, placeholder];
        }

        const { src, isLoading } = useImage({
            srcList: getMediaUrls(),
            useSuspense: false
        });

        if (isLoading) {
            return <Loader type="spinningBubbles" />
        }

        return (
            <img
                className={classNames('wp-media__src', { 'wp-media__src--holder': src === placeholder })}
                src={src}
                alt={alt_text}
            />
        );
    }

    return (
        <div className="wp-media">
            <div className="wp-media__ratio ratio ratio-16x9">
                <Image image={mediaObj} />
            </div>
        </div>
    );
}

// Export container while connected to store and SSR
export default Media;