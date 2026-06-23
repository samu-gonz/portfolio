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
        strokeWidth="4"
      />
      <rect x="10" y="10" width="44" height="13" fill="currentColor" />
      <path
        d="M21 38 L29 32 L21 26"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 38 H43"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
