import React from 'react';
import { traces, chip, vias } from '../../others/circuit.js';

// Pulse timing per trace: different lengths and start points, so the data
// never moves in lockstep. Negative delays start each pulse mid-run.
const timing = (index) => ({
    '--run': `${4.2 + (index * 1.7) % 3.4}s`,
    '--wait': `${-((index * 2.3) % 5)}s`,
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
            <rect x={chip.x} y={chip.y} width={chip.width} height={chip.height} rx="4" />
            <path d={chip.pins} />
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

// Ambient layer for the hero and contact sections: two soft glows, a faint
// engineering grid, and circuit traces coming in from both edges with data
// pulses running along them. The right-hand circuit is the same drawing
// turned through 180° (see .circuit-right). Purely decorative.
const Backdrop = ({ variant = '' }) => (
    <div className={`backdrop ${variant}`} aria-hidden="true">
        <span className="backdrop-glow backdrop-glow-a"></span>
        <span className="backdrop-glow backdrop-glow-b"></span>
        <span className="backdrop-grid"></span>
        <Circuit side="left" />
        <Circuit side="right" />
    </div>
);

export default Backdrop;
