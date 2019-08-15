import { useState, useEffect } from 'react';
import { getWinSize } from './../helpers'

/**
 * Use Window Size
 */
export default function useWindowSize() {

    const [winSize, setWinSize] = useState(getWinSize);

    useEffect(() => {
        const handleSize = () => setWinSize(getWinSize());

        window.addEventListener('resize', handleSize);

        return () => window.removeEventListener('resize', handleSize);
    }, []);

    return winSize;
}