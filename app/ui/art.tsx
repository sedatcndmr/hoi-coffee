type VineSpec = { x: number; length: number; bend: number; phase: number; spacing: number };

const vineClusters: VineSpec[][] = [
  [
    { x: 31, length: 174, bend: 8, phase: 0.2, spacing: 25 },
    { x: 91, length: 294, bend: 11, phase: 1.1, spacing: 27 },
    { x: 151, length: 218, bend: 9, phase: 2.3, spacing: 26 },
    { x: 214, length: 126, bend: 7, phase: 0.7, spacing: 24 },
  ],
  [
    { x: 39, length: 152, bend: 9, phase: 1.8, spacing: 24 },
    { x: 102, length: 251, bend: 10, phase: 0.5, spacing: 28 },
    { x: 162, length: 310, bend: 8, phase: 2.6, spacing: 27 },
    { x: 222, length: 193, bend: 7, phase: 1.3, spacing: 25 },
  ],
];

function Vine({ x, length, bend, phase, spacing }: VineSpec) {
  // Stem and leaves share attachment points, including the terminal leaf.
  const count = Math.round(length / spacing);
  const nodes = Array.from({ length: count + 1 }, (_, i) => {
    const y = i * length / count;
    return { x: x + Math.sin(y / 65 + phase) * bend, y };
  });
  const stem = nodes.map((node, i) => {
    if (i === 0) return `M${node.x} ${node.y}`;
    const prev = nodes[i - 1];
    const middle = (prev.y + node.y) / 2;
    return `C${prev.x} ${middle} ${node.x} ${middle} ${node.x} ${node.y}`;
  }).join(" ");

  return (
    <g className="vine-strand">
      <path d={stem} />
      {nodes.slice(1).map((node, i) => {
        const side = (i + Math.round(phase)) % 2 ? 1 : -1;
        const size = 0.82 + (i % 3) * 0.09;
        const tip = side * 25 * size;
        const drop = (19 + (i % 2) * 5) * size;
        return (
          <g key={i} transform={`translate(${node.x} ${node.y})`}>
            <path className="vine-leaf" d={`M0 0 C${side * 16 * size} -9 ${side * 32 * size} 0 ${tip} ${drop} C${side * 9 * size} ${drop + 1} ${side * 2} 10 0 0Z`} />
            <path className="vine-vein" d={`M0 0 Q${side * 12 * size} 4 ${tip} ${drop}`} />
          </g>
        );
      })}
    </g>
  );
}

export function Vines() {
  return (
    <div className="vines" aria-hidden="true">
      {vineClusters.map((cluster, i) => (
        <svg key={i} className={`vine-cluster vine-cluster-${i === 0 ? "left" : "right"}`} viewBox="0 0 260 340" fill="none" focusable="false">
          <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            {cluster.map(vine => <Vine key={vine.x} {...vine} />)}
          </g>
        </svg>
      ))}
    </div>
  );
}

export function Art({kind="cup"}:{kind?:string}){return <svg viewBox="0 0 260 190" className="line-art" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{kind==="plant"?<><path d="M98 123h66l-10 45h-46zM130 123V55M130 94c-42 0-43-34-43-34s41-1 43 34ZM131 76c42 0 40-36 40-36s-39 1-40 36ZM131 117c37-3 45-26 45-26s-39-9-45 26Z"/></>:kind==="book"?<><path d="M130 68c-28-20-58-15-74-7v97c28-13 50-7 74 8 23-15 49-21 75-8V61c-26-12-50-12-75 7v98M69 82c17-4 31-1 45 6M69 97c17-4 31-1 45 6M145 89c17-9 33-11 46-7M145 105c17-9 33-11 46-7"/></>:<><ellipse cx="122" cy="163" rx="79" ry="9"/><path d="M62 86h119l-9 49c-7 32-90 32-99 0ZM181 94c47-16 44 50-8 43M77 87c9-6 73-9 88 0M104 62c-17-23 19-27 2-48M132 62c-17-23 19-27 2-48M157 62c-17-19 15-24 5-39"/></>}</g></svg>}
