import { useEffect, useRef, useState } from 'react';

// Scroll-reveal hook. Flips `visible` the first time the element reaches the
// reveal line, then detaches.
//
// Deliberately position-based rather than IntersectionObserver: an observer
// only reports when the intersection *changes* between frames, so jumping the
// viewport past a section — an anchor link, Cmd+End, a fast flick — can skip
// the notification entirely and leave that section stuck at opacity 0. Reading
// the rect on a rAF-throttled scroll handles arriving from either direction.
const useReveal = ({ ratio = 0.92 } = {}) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        let frame = 0;
        let done = false;

        const detach = () => {
            if (frame) window.cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };

        const measure = () => {
            frame = 0;
            if (done) return;
            // Covers both directions: entering from below, or already passed.
            if (node.getBoundingClientRect().top <= window.innerHeight * ratio) {
                done = true;
                setVisible(true);
                detach();
            }
        };

        function onScroll() {
            if (!frame) frame = window.requestAnimationFrame(measure);
        }

        measure();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return detach;
    }, [ratio]);

    return [ref, visible];
};

export default useReveal;
