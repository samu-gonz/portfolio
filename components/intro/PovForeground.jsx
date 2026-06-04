export default function PovForeground({ colors }) {
  const keyW = 34;
  const keyH = 16;
  const gap = 5;
  const kbLeft = 448;
  const kbTop = 726;
  const rows = 4;
  const cols = 10;

  const keys = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      keys.push({
        x: kbLeft + c * (keyW + gap),
        y: kbTop + r * (keyH + gap),
        w: keyW,
        h: keyH,
      });
    }
  }

  const enterX = kbLeft + cols * (keyW + gap) + 4;
  const enterY = kbTop;
  const enterDown = 6;

  return (
    <g id="pov-foreground">
      <defs>
        <linearGradient id="skinArmGrad" x1="1500" y1="900" x2="1000" y2="740" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.skinShadow} />
          <stop offset="50%" stopColor={colors.skin} />
          <stop offset="100%" stopColor={colors.skinLight} />
        </linearGradient>
        <linearGradient id="skinPalmGrad" x1="1050" y1="820" x2="980" y2="760" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.skinShadow} />
          <stop offset="55%" stopColor={colors.skin} />
          <stop offset="100%" stopColor={colors.skinLight} />
        </linearGradient>
        <linearGradient id="skinIndexGrad" x1="960" y1="750" x2="940" y2="780" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.skinLight} />
          <stop offset="100%" stopColor={colors.skinShadow} />
        </linearGradient>
        <linearGradient id="rgbUnderglow" x1="800" y1="900" x2="800" y2="700" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="handShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect x="740" y="560" width="120" height="100" fill="#0a0e14" />
      <rect x="756" y="572" width="88" height="76" fill="#0c1018" />

      <path d="M380 900 L420 712 L1180 712 L1220 900 Z" fill="#111827" />
      <path d="M400 900 L432 722 L1168 722 L1200 900 Z" fill="#0a0e17" />
      <path d="M412 900 L440 730 L1160 730 L1188 900 Z" fill="url(#rgbUnderglow)" filter="url(#softGlow)" />

      {keys.map((k, i) => (
        <g key={i}>
          <rect
            x={k.x}
            y={k.y + 4}
            width={k.w}
            height={k.h}
            rx="3"
            fill={i % 2 === 0 ? "rgba(6,182,212,0.26)" : "rgba(139,92,246,0.24)"}
          />
          <rect x={k.x} y={k.y} width={k.w} height={k.h} rx="3.5" fill="#2d3748" stroke="#3d4f63" strokeWidth="1" />
          <rect x={k.x + 2} y={k.y + 2} width={k.w - 4} height={3} rx="1" fill="#4a5568" opacity="0.45" />
        </g>
      ))}

      <g id="enter-key">
        <path
          d={`M${enterX} ${enterY + enterDown + 46}
             L${enterX + 20} ${enterY + enterDown + 46}
             L${enterX + 20} ${enterY + enterDown}
             L${enterX + 108} ${enterY + enterDown}
             L${enterX + 108} ${enterY + enterDown + 18}
             L${enterX} ${enterY + enterDown + 18} Z`}
          fill="rgba(6,182,212,0.3)"
        />
        <path
          d={`M${enterX} ${enterY + enterDown + 46}
             L${enterX + 20} ${enterY + enterDown + 46}
             L${enterX + 20} ${enterY + enterDown}
             L${enterX + 108} ${enterY + enterDown}
             L${enterX + 108} ${enterY + enterDown + 18}
             L${enterX} ${enterY + enterDown + 18} Z`}
          fill="#3a4d62"
          stroke="#4d6178"
          strokeWidth="1.2"
        />
      </g>

      <g filter="url(#handShadow)">
        <path
          d="M1600 900 L1540 900 L1320 820 L1150 768 L1080 772 L1040 820 L1060 900 Z"
          fill="url(#skinArmGrad)"
        />

        <path
          d="M1150 768
             C1135 752 1110 746 1088 752
             C1066 758 1052 778 1048 802
             C1044 826 1056 846 1078 856
             C1100 866 1128 860 1148 844
             L1150 768 Z"
          fill="url(#skinPalmGrad)"
        />

        <path
          d="M1090 762 L1078 788 L1070 812 L1084 818 L1100 792 L1108 768 Z" fill={colors.skinShadow} opacity="0.32" />
        <path
          d="M1118 758 L1106 780 L1100 802"
          fill="none"
          stroke={colors.skinShadow}
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.38"
        />
        <path
          d="M1128 754 L1140 736 L1156 740 L1150 758 L1134 764 Z" fill={colors.skinShadow} opacity="0.28" />
        <path
          d="M1148 748 L1160 734 L1174 740 L1168 756 Z" fill={colors.skinShadow} opacity="0.22" />

        <path
          d="M1148 844
             L1132 812
             L1112 782
             L1092 762
             L1076 752
             L1058 750
             L1046 756
             L1040 768
             L1042 782
             L1054 792
             L1072 798
             L1092 804
             L1112 822
             L1132 848
             Z"
          fill="url(#skinIndexGrad)"
        />
        <path
          d="M1046 756 L1058 750 L1076 752"
          fill="none"
          stroke={colors.skinShadow}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.45"
        />
        <ellipse cx="1044" cy="766" rx="9" ry="7" fill={colors.skinLight} opacity="0.3" />

        <path
          d="M1078 788 L1090 808 L1100 826" fill="none" stroke={colors.skinShadow} strokeWidth="1.8" strokeLinecap="round" opacity="0.32" />
        <path
          d="M1100 826 L1112 844 L1120 858" fill="none" stroke={colors.skinShadow} strokeWidth="1.8" strokeLinecap="round" opacity="0.28" />
        <path
          d="M1112 844 L1124 862 L1130 874" fill="none" stroke={colors.skinShadow} strokeWidth="1.8" strokeLinecap="round" opacity="0.25" />

        <path d="M1138 778 L1126 762 L1116 770 L1126 784 Z" fill={colors.skin} />
      </g>
    </g>
  );
}
