export default function Character({ colors }) {
  return (
    <g id="developer-character">
      <defs>
        <linearGradient id="hairFadeGrad" x1="800" y1="500" x2="800" y2="620" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.hair} />
          <stop offset="75%" stopColor={colors.hair} />
          <stop offset="100%" stopColor={colors.skin} />
        </linearGradient>
      </defs>

      <ellipse cx="800" cy="894" rx="220" ry="12" fill="#06080c" />

      <path d="M568 900V768C568 728 608 708 668 702V900Z" fill={colors.chairA} />
      <path d="M1032 900V768C1032 728 992 708 932 702V900Z" fill={colors.chairA} />
      <path
        d="M668 900V818C668 788 728 772 800 768C872 772 932 788 932 818V900Z"
        fill={colors.chairB}
      />

      <path
        d="M520 900L508 828Q504 758 572 732L688 718L912 718L1028 732Q1096 758 1092 828L1080 900Z"
        fill={colors.shirtA}
      />
      <path
        d="M568 900L558 832Q556 778 612 758L720 744L880 744L988 758Q1044 778 1042 832L1032 900Z"
        fill={colors.shirtB}
      />
      <path
        d="M560 808Q700 752 800 748Q900 752 1040 808"
        fill="none"
        stroke={colors.shirtSeam}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M758 718L800 738L842 718L838 726L800 746L762 726Z" fill={colors.shirtCollar} />

      <path
        d="M762 718L768 658Q768 650 800 648Q832 650 832 658L838 718Z"
        fill={colors.skin}
      />

      <ellipse cx="800" cy="588" rx="58" ry="56" fill={colors.skin} />

      <path
        d="M748 612C748 538 772 512 800 508C828 512 852 538 852 612C852 572 828 544 800 540C772 544 748 572 748 612Z"
        fill="url(#hairFadeGrad)"
      />

      <path
        d="M742 556Q800 532 858 556"
        stroke="#0f1419"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="728" y="564" width="20" height="32" rx="8" fill="#252f3d" />
      <rect x="852" y="564" width="20" height="32" rx="8" fill="#252f3d" />
    </g>
  );
}
