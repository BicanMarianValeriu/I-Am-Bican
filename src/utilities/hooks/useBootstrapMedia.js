import { useState, useEffect } from 'react';
import { getScreenType } from './../helpers';

/**
 * Use Bootstrap Media
 */
export default function useBootstrapMedia(value, type) {

    const [media, setMedia] = useState(getScreenType(value, type));

    const resizeEvent = () => setMedia(getScreenType(value, type));

    useEffect(() => {
        window.addEventListener('resize', resizeEvent);
        return () => window.removeEventListener('resize', resizeEvent);
        // eslint-disable-next-line
    }, []);

    return media;
}