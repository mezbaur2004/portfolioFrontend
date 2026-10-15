// Geometry for the circuit-board backdrop: bundles of PCB-style traces that
// enter from the page edge, bend at 45° and end on a via. Drawn in a
// 600 x 900 box; the backdrop places one copy on each side of the section.

const LANE = 14;
// Parallel traces keep their spacing through a 45° bend only if each lane
// starts its bend a little earlier or later than its neighbour:
// LANE * tan(22.5°).
const BEND = LANE * 0.4142;

const round = (n) => Math.round(n * 10) / 10;
const toPath = (points) => points
    .map(([x, y], i) => `${i ? 'L' : 'M'}${round(x)} ${round(y)}`)
    .join('');

// One bundle of `lanes` traces running right from x = 0, bending by `shift`
// (down when positive) at `bendAt`, and ending at `ends[k]`. `vertical`
// mirrors it across the diagonal so it enters from the top edge instead.
const bundle = ({ at, lanes, bendAt, shift, ends, pulses = [], vertical = false }) =>
    Array.from({ length: lanes }, (_, k) => {
        const y = at + k * LANE;
        const x1 = bendAt - Math.sign(shift) * BEND * k;
        const x2 = x1 + Math.abs(shift);
        let points = [[0, y], [x1, y], [x2, y + shift], [ends[k], y + shift]];
        if (vertical) points = points.map(([px, py]) => [py, px]);
        return {
            d: toPath(points),
            end: points[points.length - 1],
            pulse: pulses.includes(k),
        };
    });

// Laid out around the hero copy: the longer runs sit above and below the
// text block, and the traces level with it stay short. One pulse per bundle.
export const traces = [
    ...bundle({ at: 96, lanes: 4, bendAt: 120, shift: 28, ends: [300, 262, 316, 240], pulses: [1] }),
    ...bundle({ at: 330, lanes: 3, bendAt: 70, shift: -42, ends: [150, 176, 132], pulses: [1] }),
    ...bundle({ at: 600, lanes: 4, bendAt: 96, shift: 56, ends: [180, 150, 185, 130], pulses: [2] }),
    ...bundle({ at: 780, lanes: 2, bendAt: 120, shift: -40, ends: [380, 330], pulses: [0] }),
];

// Vias: where each trace ends
export const vias = traces.map((trace) => trace.end);
