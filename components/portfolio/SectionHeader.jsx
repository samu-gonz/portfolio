import { UI } from "./uiTokens";

/**
 * @param {{ eyebrow: string; title: string; titleAs?: keyof JSX.IntrinsicElements; titleId?: string }} props
 */
export default function SectionHeader({ eyebrow, title, titleAs: TitleTag = "h2", titleId }) {
  return (
    <header>
      <p className={UI.sectionEyebrow}>{eyebrow}</p>
      <TitleTag
        id={titleId}
        className="mt-3 max-w-3xl text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        {title}
      </TitleTag>
    </header>
  );
}
