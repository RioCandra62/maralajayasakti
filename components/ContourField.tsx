/**
 * Static topographic-style contour field. Decorative only (aria-hidden).
 * Paths are deterministic so server and client output always match.
 */

type Props = {
  className?: string;
  /** Number of nested contour lines. */
  levels?: number;
  /** Animate stroke draw-in (hero only). */
  animate?: boolean;
  /** Offsets the field's seed so different instances are not identical. */
  seed?: number;
};

const W = 1200;
const H = 800;

function ring(cx: number, cy: number, base: number, seed: number, k: number) {
  const pts: string[] = [];
  const steps = 120;
  for (let s = 0; s <= steps; s++) {
    const t = (s / steps) * Math.PI * 2;
    const wob =
      1 +
      0.13 * Math.sin(2 * t + seed + k * 0.11) +
      0.08 * Math.sin(3 * t + seed * 1.7 - k * 0.07) +
      0.045 * Math.sin(5 * t + seed * 0.6 + k * 0.19);
    const r = base * wob;
    const x = cx + r * 1.35 * Math.cos(t);
    const y = cy + r * 0.9 * Math.sin(t);
    pts.push(`${s === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join("");
}

export function ContourField({
  className,
  levels = 22,
  animate = false,
  seed = 1,
}: Props) {
  const cx = W * 0.58;
  const cy = H * 0.5;
  const paths = Array.from({ length: levels }, (_, i) => {
    const base = 18 + i * 17;
    return ring(cx - i * 1.6, cy + i * 0.9, base, seed, i);
  });
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={`${animate ? "hero-contour" : "contour"} ${className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          style={{ ["--i" as string]: i }}
          opacity={i % 5 === 0 ? 1 : 0.6}
        />
      ))}
    </svg>
  );
}

