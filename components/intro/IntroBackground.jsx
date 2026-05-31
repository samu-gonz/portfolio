export default function IntroBackground({ colors }) {
  return (
    <>
      <defs>
        <linearGradient id="monitorGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.monitorGlow} stopOpacity="0.35" />
          <stop offset="100%" stopColor={colors.monitorScreen} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="metalLeg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.metalA} />
          <stop offset="50%" stopColor={colors.metalB} />
          <stop offset="100%" stopColor={colors.metalC} />
        </linearGradient>
      </defs>

      <rect width="1100" height="900" fill={colors.wall} />
      <rect x="0" y="536" width="1100" height="64" fill={colors.wallShade} fillOpacity="0.24" />
      <rect x="74" y="96" width="184" height="26" rx="4" fill="#6b7280" fillOpacity="0.5" />
      <rect x="86" y="102" width="22" height="14" rx="2" fill="#64748b" />
      <rect x="114" y="102" width="22" height="14" rx="2" fill="#475569" />
      <rect x="142" y="102" width="22" height="14" rx="2" fill="#64748b" />
      <rect x="170" y="102" width="22" height="14" rx="2" fill="#475569" />
      <rect x="198" y="102" width="22" height="14" rx="2" fill="#64748b" />
      <path d="M0 600H1100V900H0Z" fill={colors.desk} />
      <path d="M0 640Q550 656 1100 640" stroke={colors.deskLine} strokeWidth="5" fill="none" />
      <path d="M0 742Q550 758 1100 742" stroke={colors.deskLine} strokeWidth="4" fill="none" />

      <path d="M220 192 Q550 152 880 192 V598 C880 628 858 650 828 650 H272 C242 650 220 628 220 598 V192 Z" fill={colors.monitorShell} />
      <path d="M235 206 Q550 176 865 206 V588 C865 604 854 614 838 614 H262 C246 614 235 604 235 588 V206 Z" fill={colors.monitorFrame} />
      <rect x="248" y="216" width="604" height="380" rx="10" fill={colors.monitorScreen} />
      <rect x="248" y="216" width="604" height="380" rx="10" fill="url(#monitorGlow)" />
      <rect x="248" y="216" width="604" height="380" rx="10" fill="none" stroke="#334155" strokeOpacity="0.45" />

      <rect x="536" y="650" width="28" height="24" rx="6" fill={colors.metalC} />
      <path d="M548 674L490 788H525L566 692Z" fill="url(#metalLeg)" />
      <path d="M552 674L610 788H645L570 692Z" fill="url(#metalLeg)" />

      <polygon points="454,790 658,790 700,826 412,826" fill="#1f2937" />
      <polygon points="462,794 652,794 686,823 428,823" fill="#111827" />
      <line x1="438" y1="802" x2="670" y2="802" stroke="#22d3ee" strokeOpacity="0.36" strokeWidth="2" strokeDasharray="5 4" />
      <line x1="446" y1="810" x2="678" y2="810" stroke="#a855f7" strokeOpacity="0.34" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="454" y1="818" x2="686" y2="818" stroke="#22c55e" strokeOpacity="0.24" strokeWidth="2" strokeDasharray="6 5" />

      <ellipse cx="768" cy="824" rx="27" ry="14" fill="#d1d5db" />
      <ellipse cx="768" cy="824" rx="24" ry="12" fill="#f3f4f6" />
      <line x1="768" y1="816" x2="768" y2="825" stroke="#6b7280" strokeWidth="2" />
      <ellipse cx="768" cy="824" rx="29" ry="15" fill="none" stroke="#4b5563" strokeOpacity="0.35" />

      <ellipse cx="872" cy="835" rx="28" ry="7" fill="#000000" fillOpacity="0.12" />
      <rect x="853" y="792" width="38" height="43" rx="8" fill="#f8fafc" />
      <path d="M872 792C863 775 863 760 874 748C881 761 881 776 872 792Z" fill="#3f7f3a" />
      <path d="M860 797C854 782 857 767 868 757C873 769 872 784 860 797Z" fill="#4f9a44" />
      <path d="M882 797C880 781 885 767 897 762C898 776 894 790 882 797Z" fill="#5bb34f" />
      <rect x="942" y="706" width="8" height="110" rx="3" fill="#111827" />
      <rect x="930" y="816" width="32" height="8" rx="4" fill="#1f2937" />
      <path d="M920 704C933 690 960 690 973 704" stroke="#111827" strokeWidth="7" fill="none" />
      <rect x="918" y="708" width="10" height="28" rx="5" fill="#374151" />
      <rect x="965" y="708" width="10" height="28" rx="5" fill="#374151" />
    </>
  );
}
