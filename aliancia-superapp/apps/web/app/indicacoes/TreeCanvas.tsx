"use client";
import { useEffect, useRef } from "react";
// @ts-ignore no types for panzoom
import panzoom from "panzoom";

export default function TreeCanvas({ nodes }: { nodes: { x: number; y: number; name: string }[] }) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      panzoom(ref.current);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        overflow: "hidden",
        border: "1px solid rgba(255,215,0,0.3)",
        borderRadius: 20
      }}
    >
      <svg ref={ref} width={2000} height={2000} style={{ background: "#050505" }}>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={30} fill="#FFD700" />
            <text x={n.x - 25} y={n.y + 5} fill="#000" fontSize="18">
              {n.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
