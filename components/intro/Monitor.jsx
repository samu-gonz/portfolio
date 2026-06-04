export default function Monitor({ colors }) {
  return (
    <>
      <defs>
        <linearGradient id="metalLeg" x1="800" y1="560" x2="800" y2="660" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.metalB} />
          <stop offset="100%" stopColor={colors.metalC} />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill={colors.wall} />

      <rect x="320" y="48" width="960" height="532" rx="28" fill={colors.monitorShell} />
      <rect x="340" y="66" width="920" height="496" rx="18" fill={colors.monitorFrame} />

      <rect x="788" y="564" width="24" height="22" rx="5" fill={colors.metalC} />
      <rect x="796" y="586" width="8" height="58" rx="3" fill="url(#metalLeg)" />
      <path d="M800 586L768 648H784L800 610Z" fill="url(#metalLeg)" />
      <path d="M800 586L832 648H816L800 610Z" fill="url(#metalLeg)" />
    </>
  );
}
