import React from 'react';

// Ambient layer for the hero and contact sections: a slowly drifting dot
// grid and two soft glows, faded out towards the edges. Purely decorative.
const Backdrop = ({ variant = '' }) => (
    <div className={`backdrop ${variant}`} aria-hidden="true">
        <span className="backdrop-dots"></span>
        <span className="backdrop-glow backdrop-glow-a"></span>
        <span className="backdrop-glow backdrop-glow-b"></span>
    </div>
);

export default Backdrop;
