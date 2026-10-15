import React from 'react';
import { traces, vias } from '../../others/circuit.js';

// Pulse timing per trace: slow, and each on its own cycle so the pulses
// never move in lockstep. Negative delays start each one mid-cycle.
const timing = (index) => ({
    '--run': `${8 + (index * 1.9) % 4}s`,
    '--wait': `${-((index * 3.1) % 8)}s`,
});

const Circuit = ({ side }) => (
    <svg
        className={`circuit circuit-${side}`}
        viewBox="0 0 600 900"
        preserveAspectRatio="xMinYMid slice"
        focusable="false"
    >
        <g className="circuit-traces">
            {traces.map((trace) => <path key={trace.d} d={trace.d} />)}
        </g>
        <g className="circuit-vias">
            {vias.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />)}
        </g>
        <g className="circuit-pulses">
            {traces.filter((trace) => trace.pulse).map((trace, index) => (
                <path key={trace.d} d={trace.d} pathLength="100" style={timing(index)} />
            ))}
        </g>
    </svg>
);

// Ambient layer for the hero and contact sections: two faint glows and
// circuit traces coming in from both edges, with an occasional data pulse
// running along them. The right-hand circuit is the same drawing turned
// through 180° (see .circuit-right). Purely decorative.
const Backdrop = ({ variant = '' }) => (
    <div className={`backdrop ${variant}`} aria-hidden="true">
        <span className="backdrop-glow backdrop-glow-a"></span>
        <span className="backdrop-glow backdrop-glow-b"></span>
        <Circuit side="left" />
        <Circuit side="right" />
    </div>
);

export default Backdrop;
