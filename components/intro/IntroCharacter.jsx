export default function IntroCharacter({ colors }) {
  return (
    <>
      <ellipse cx="550" cy="888" rx="182" ry="18" fill="#000000" fillOpacity="0.2" />
      <path d="M426 900V724C426 678 456 650 510 650H590C644 650 674 678 674 724V900Z" fill={colors.chairA} />
      <path d="M446 900V740C446 707 468 686 506 686H594C632 686 654 707 654 740V900Z" fill={colors.chairB} />
      <path d="M468 900V760C468 736 484 722 514 722H586C616 722 632 736 632 760V900Z" fill={colors.chairC} />
      <rect x="524" y="776" width="52" height="24" rx="8" fill="#313d4f" />
      <rect x="541" y="800" width="18" height="76" rx="8" fill="#1f2937" />
      <rect x="512" y="770" width="76" height="36" rx="10" fill="none" stroke="#111827" strokeOpacity="0.4" />

      <path d="M356 900C356 786 438 714 550 714C662 714 744 786 744 900Z" fill={colors.shirtA} />
      <path d="M396 900C396 814 458 760 550 760C642 760 704 814 704 900Z" fill={colors.shirtB} />
      <path d="M506 748C506 712 524 684 550 684C576 684 594 712 594 748V774H506Z" fill={colors.skin} />
      <ellipse cx="550" cy="672" rx="60" ry="66" fill={colors.skin} />
      <ellipse cx="491" cy="674" rx="7" ry="11" fill={colors.skin} />
      <ellipse cx="609" cy="674" rx="7" ry="11" fill={colors.skin} />

      {/* Cabello más definido para que no se vea "cortado" */}
      <path d="M490 668C490 612 518 572 550 572C582 572 610 612 610 668L595 652C583 639 568 632 550 632C532 632 517 639 505 652Z" fill={colors.hair} />
      <path d="M500 666C500 624 523 596 550 596C577 596 600 624 600 666L589 656C579 647 566 642 550 642C534 642 521 647 511 656Z" fill="#241913" />
      <path d="M500 640C512 620 588 620 600 640" stroke="#111827" strokeWidth="8" fill="none" />
      <rect x="492" y="638" width="10" height="20" rx="4" fill="#374151" />
      <rect x="598" y="638" width="10" height="20" rx="4" fill="#374151" />
    </>
  );
}
