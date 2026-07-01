const R = 90;

/** Seed-of-life circle centers: one center, six on the hexagonal ring. */
const CENTERS: Array<[number, number]> = [[0, 0]];
for (let i = 0; i < 6; i++) {
  const a = (Math.PI / 3) * i;
  CENTERS.push([Math.cos(a) * R, Math.sin(a) * R]);
}
for (let i = 0; i < 12; i++) {
  const a = (Math.PI / 6) * i;
  const d = i % 2 === 0 ? 2 * R : Math.sqrt(3) * R;
  CENTERS.push([Math.cos(a) * d, Math.sin(a) * d]);
}

export default function GeometryBackdrop({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="-400 -400 800 800"
      fill="none"
      aria-hidden
    >
      {CENTERS.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={R}
          stroke="currentColor"
          strokeWidth="0.75"
        />
      ))}
      <circle cx={0} cy={0} r={3 * R} stroke="currentColor" strokeWidth="0.75" />
      <circle cx={0} cy={0} r={3 * R + 14} stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}
