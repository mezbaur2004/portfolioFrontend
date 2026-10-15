import React from 'react';
import useReveal from '../../others/useReveal.js';

// Headings reveal themselves: the eyebrow's rule draws in, then the title and
// sub-line rise in after it.
const SectionHeading = ({ eyebrow, title, sub, centered = false }) => {
    const [ref, visible] = useReveal();

    return (
        <div
            ref={ref}
            className={`section-head heading-reveal ${centered ? 'is-centered' : ''} ${visible ? 'is-visible' : ''}`}
        >
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="section-title">{title}</h2>
            {sub && <p className="section-sub">{sub}</p>}
        </div>
    );
};

export default SectionHeading;
