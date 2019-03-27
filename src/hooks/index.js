import { useState, useEffect, useCallback } from 'react';

function useWindowWidth() {
    const [winSize, setWinSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleSize = () => setWinSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener('resize', handleSize);

        return () => window.removeEventListener('resize', handleSize);
    });

    return winSize;
}

/**
 * Hook useFormInput
 * @param {string} initialValue 
 */
function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    let onChange = useCallback(e => setValue(e.target.value), []);

    return { value, onChange };
}

export { useWindowWidth, useFormInput };