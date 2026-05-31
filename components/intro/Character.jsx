export default function Character({ colors }) {
  return (
    <>
      {/* Capa 1: silla ergonomica con lumbar */}
      <ellipse cx="800" cy="888" rx="220" ry="18" fill="#000000" fillOpacity="0.2" />
      <path d="M650 900V708C650 654 687 620 746 620H854C913 620 950 654 950 708V900Z" fill={colors.chairA} />
      <path d="M675 900V732C675 694 702 672 746 672H854C898 672 925 694 925 732V900Z" fill={colors.chairB} />
      <path d="M702 900V760C702 732 722 716 758 716H842C878 716 898 732 898 760V900Z" fill={colors.chairC} />
      <rect x="746" y="782" width="108" height="34" rx="10" fill="#2f3a4c" />
      <rect x="782" y="816" width="36" height="82" rx="10" fill="#1f2937" />

      {/* Capa 2: espalda + hombros con volumen */}
      <path d="M566 900C566 776 654 698 800 698C946 698 1034 776 1034 900Z" fill={colors.shirtA} />
      <path d="M618 900C618 806 686 748 800 748C914 748 982 806 982 900Z" fill={colors.shirtB} />
      <path d="M640 900C662 832 728 790 800 790C872 790 938 832 960 900" fill="none" stroke="#163a59" strokeOpacity="0.45" strokeWidth="14" />

      {/* Capa 3: cuello + cabeza + pelo con volumen superior y patillas */}
      <path d="M742 736C742 696 766 666 800 666C834 666 858 696 858 736V770H742Z" fill={colors.skin} />
      <ellipse cx="800" cy="642" rx="70" ry="78" fill={colors.skin} />
      <ellipse cx="731" cy="648" rx="8" ry="13" fill={colors.skin} />
      <ellipse cx="869" cy="648" rx="8" ry="13" fill={colors.skin} />
      <path d="M730 634C730 568 760 520 800 520C840 520 870 568 870 634L852 614C836 596 818 588 800 588C782 588 764 596 748 614Z" fill={colors.hair} />
      <path d="M744 632C744 584 768 552 800 552C832 552 856 584 856 632L842 620C830 610 816 606 800 606C784 606 770 610 758 620Z" fill="#241913" />
      <path d="M730 646L742 610L742 656Z" fill={colors.hair} />
      <path d="M870 646L858 610L858 656Z" fill={colors.hair} />

      {/* Capa 4: auriculares separados */}
      <path d="M742 616C756 588 844 588 858 616" stroke="#111827" strokeWidth="9" fill="none" />
      <rect x="731" y="615" width="12" height="24" rx="4" fill="#374151" />
      <rect x="857" y="615" width="12" height="24" rx="4" fill="#374151" />
    </>
  );
}
