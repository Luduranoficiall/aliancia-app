export default function LogoAliancia({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="300" y2="300">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#E5C100" />
        </linearGradient>
      </defs>

      <circle cx="150" cy="150" r="140" stroke="url(#gold)" strokeWidth="12" />

      <path
        d="M150 70C200 70 235 110 235 150C235 190 200 230 150 230C100 230 65 190 65 150C65 110 100 70 150 70Z"
        stroke="url(#gold)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M115 150C115 125 132 108 150 108C168 108 185 125 185 150C185 175 168 192 150 192C132 192 115 175 115 150Z"
        stroke="url(#gold)"
        strokeWidth="14"
      />
    </svg>
  );
}
