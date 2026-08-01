import { useEffect, useRef, useState } from 'react';

// Lightweight scroll-reveal hook. Observes the returned ref and flips
// `visible` to true the first time the element enters the viewport, then
// stops observing (no ongoing scroll listeners, so it stays cheap).
const useReveal = (options = { threshold: 0.15 }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(node);
            }
        }, options);

        observer.observe(node);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [ref, visible];
};

export default useReveal;
