/**
 * @param {{ className?: string }} props
 */
export default function TerminalIcon({ className = "h-10 w-10" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="7"
        stroke="currentColor"
        strokeWidth="4.5"
      />
      <path d="M6 20 H58" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path
        d="M20 40 L30 32 L20 24"
        stroke="#22d3ee"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 40 H46"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
