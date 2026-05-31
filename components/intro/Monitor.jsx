export default function Monitor({ colors }) {
  return (
    <>
      <defs>
        <radialGradient id="wallGlow" cx="50%" cy="32%" r="42%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.24" />
          <stop offset="55%" stopColor="#1e3a8a" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="monitorGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.monitorGlow} stopOpacity="0.34" />
          <stop offset="100%" stopColor={colors.monitorScreen} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="metalLeg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.metalA} />
          <stop offset="50%" stopColor={colors.metalB} />
          <stop offset="100%" stopColor={colors.metalC} />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill={colors.wall} />
      <rect x="0" y="560" width="1600" height="78" fill={colors.wallShade} fillOpacity="0.25" />
      <ellipse cx="800" cy="320" rx="470" ry="225" fill="url(#wallGlow)" />

      {/* Ultrawide con curva superior usando Q */}
      <path
        d="M350 170 Q800 125 1250 170 V600 C1250 635 1226 660 1191 660 H409 C374 660 350 635 350 600 V170 Z"
        fill={colors.monitorShell}
      />
      <path
        d="M368 188 Q800 146 1232 188 V582 C1232 604 1218 618 1196 618 H404 C382 618 368 604 368 582 V188 Z"
        fill={colors.monitorFrame}
      />
      <rect x="386" y="206" width="828" height="392" rx="10" fill={colors.monitorScreen} />
      <rect x="386" y="206" width="828" height="392" rx="10" fill="url(#monitorGlow)" />

      {/* Base angular metalizada */}
      <rect x="782" y="660" width="36" height="30" rx="7" fill={colors.metalC} />
      <path d="M800 690L724 842H770L815 722Z" fill="url(#metalLeg)" />
      <path d="M800 690L876 842H922L785 722Z" fill="url(#metalLeg)" />
    </>
  );
}
