import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    const listener = () => {
        setScrollY(window.pageYOffset - window.innerHeight / 2);
    };

    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    });
    return {
        scrollY,
    };
};
