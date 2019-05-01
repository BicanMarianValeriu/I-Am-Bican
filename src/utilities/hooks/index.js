import { useState, useEffect, useRef } from 'react';
import { getScreenType, getWinSize } from './../helpers'

/**
 * Use Window Size
 */
function useWindowSize() {

    const [winSize, setWinSize] = useState(getWinSize);

    useEffect(() => {
        const handleSize = () => setWinSize(getWinSize());

        window.addEventListener('resize', handleSize);

        return () => window.removeEventListener('resize', handleSize);
    }, []);

    return winSize;
}

/**
 * Use Bootstrap Media
 */
function useBootstrapMedia() {

    const [screenType, setScreenType] = useState(getScreenType);

    const resizeEvent = () => setScreenType(getScreenType());

    useEffect(() => {
        window.addEventListener('resize', resizeEvent);

        return () => window.removeEventListener('resize', resizeEvent);
    }, []);

    return screenType;
} 

/**
 * Use Effect After Mount
 * @param function  cb
 * @param mixed     deps
 */
function useEffectAfterMount(cb, deps) {
    const ref = useRef(true);

    useEffect(() => {
        
        if (!ref.current) return cb();

        ref.current = false;

    // eslint-disable-next-line
    }, deps);

}

export { useWindowSize, useBootstrapMedia, useEffectAfterMount };