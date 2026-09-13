import { useEffect, useState } from 'react';

// Tracks which section is currently under the header so the nav can highlight
// it. Reads positions on scroll (rAF-throttled) rather than keeping an
// observer per section, which keeps the "last one passed" rule simple.
const useActiveSection = (ids, offset = 140) => {
    const key = ids.join('|');
    const [active, setActive] = useState('');

    useEffect(() => {
        let frame = 0;

        const measure = () => {
            frame = 0;
            const nodes = key.split('|')
                .map((id) => document.getElementById(id))
                .filter(Boolean);
            if (!nodes.length) return;

            const scrolled = window.scrollY;
            let current = '';

            nodes.forEach((node) => {
                if (node.getBoundingClientRect().top + scrolled - offset <= scrolled) {
                    current = node.id;
                }
            });

            // Anything within a screen of the bottom counts as the last section,
            // which short final sections can never reach on their own.
            if (window.innerHeight + scrolled >= document.documentElement.scrollHeight - 4) {
                current = nodes[nodes.length - 1].id;
            }

            setActive(current);
        };

        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(measure);
        };

        measure();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            if (frame) window.cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [key, offset]);

    return active;
};

export default useActiveSection;
