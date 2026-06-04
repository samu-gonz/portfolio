export default function Desk({ colors, part = "all" }) {
  const keys = Array.from({ length: 9 * 24 });

  const surface = (
    <>
      <defs>
        <linearGradient id="deskWood" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.desk} />
          <stop offset="38%" stopColor="#815f4a" />
          <stop offset="100%" stopColor="#6a4e3e" />
        </linearGradient>
      </defs>
      <rect x="0" y="638" width="1600" height="262" fill="url(#deskWood)" />
      <path d="M0 688Q800 714 1600 688" stroke={colors.deskLine} strokeWidth="5" fill="none" />
      <path d="M0 772Q800 800 1600 772" stroke={colors.deskLine} strokeWidth="4" fill="none" />
    </>
  );

  const foreground = (
    <>
      <polygon points="640,780 942,780 1016,834 562,834" fill="#1f2937" />
      <polygon points="652,786 930,786 996,830 582,830" fill="#0f172a" />
      {keys.map((_, i) => {
        const row = Math.floor(i / 24);
        const col = i % 24;
        const x = 596 + col * 16 + row * 3;
        const y = 792 + row * 4;
        const hue = (i % 24) * 12;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="12"
            height="7"
            rx="1.4"
            fill="#0b1120"
            stroke={`hsla(${hue}, 92%, 66%, 0.35)`}
            strokeWidth="0.7"
            strokeDasharray="1.8 1"
          />
        );
      })}
      <ellipse cx="1088" cy="836" rx="38" ry="20" fill="#d1d5db" />
      <ellipse cx="1088" cy="836" rx="33" ry="17" fill="#f3f4f6" />
      <line x1="1088" y1="824" x2="1088" y2="838" stroke="#6b7280" strokeWidth="2.5" />
      <ellipse cx="1256" cy="852" rx="36" ry="9" fill="#000000" fillOpacity="0.13" />
      <rect x="1232" y="798" width="48" height="54" rx="10" fill="#f8fafc" />
      <path d="M1256 798C1246 776 1246 756 1260 742C1268 760 1268 780 1256 798Z" fill="#3f7f3a" />
      <path d="M1240 804C1233 784 1238 766 1251 753C1256 771 1253 790 1240 804Z" fill="#4f9a44" />
      <path d="M1270 804C1268 786 1275 770 1290 762C1292 780 1287 798 1270 804Z" fill="#5bb34f" />
    </>
  );

  if (part === "back") return surface;
  if (part === "front") return foreground;
  return (
    <>
      {surface}
      {foreground}
    </>
  );
}
