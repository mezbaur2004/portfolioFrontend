import React from 'react';

const SectionHeading = ({ eyebrow, title, sub, centered = false }) => (
    <div className={`section-head ${centered ? 'is-centered' : ''}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
    </div>
);

export default SectionHeading;
