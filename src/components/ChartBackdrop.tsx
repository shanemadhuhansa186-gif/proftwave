export function ChartBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 1200 640"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 18 }, (_, i) => {
        const x = 40 + i * 64;
        const up = i % 3 !== 0;
        const high = 140 + ((i * 37) % 180);
        const low = high + 90 + ((i * 13) % 70);
        const open = high + 24;
        const close = low - 28;
        const color = up ? "#3ee07a" : "#5b7c99";
        return (
          <g key={x}>
            <line x1={x} x2={x} y1={high} y2={low} stroke={color} strokeWidth="2" />
            <rect
              x={x - 8}
              y={Math.min(open, close)}
              width="16"
              height={Math.max(18, Math.abs(close - open))}
              fill={color}
              opacity={up ? 0.85 : 0.4}
            />
          </g>
        );
      })}
    </svg>
  );
}
