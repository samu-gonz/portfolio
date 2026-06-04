export default function PovDesk({ colors }) {
  return (
    <>
      <defs>
        <linearGradient id="deskWood" x1="800" y1="600" x2="800" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9a8268" />
          <stop offset="100%" stopColor="#6f5a48" />
        </linearGradient>
      </defs>
      <rect x="0" y="600" width="1600" height="300" fill={colors.wallShade} />
      <rect x="0" y="628" width="1600" height="272" fill="url(#deskWood)" />
      <line x1="0" y1="668" x2="1600" y2="668" stroke={colors.deskLine} strokeWidth="2" opacity="0.35" />
      <line x1="0" y1="720" x2="1600" y2="720" stroke={colors.deskLine} strokeWidth="1.5" opacity="0.25" />
    </>
  );
}
