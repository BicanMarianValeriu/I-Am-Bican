import { useEffect, useRef } from 'react';

/**
 * Use Effect After Mount
 * @param function  cb
 * @param mixed     deps
 */
export default function useEffectAfterMount(cb, deps) {
    const ref = useRef(true);

    useEffect(() => {
        if (!ref.current) return cb();
        ref.current = false;
    // eslint-disable-next-line
    }, deps);
}