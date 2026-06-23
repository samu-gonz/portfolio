import { UI } from "./uiTokens";

/**
 * @param {{ eyebrow: string; title: string; titleAs?: keyof JSX.IntrinsicElements; titleId?: string }} props
 */
export default function SectionHeader({ eyebrow, title, titleAs: TitleTag = "h2", titleId }) {
  return (
    <header>
      <p className={UI.sectionEyebrow}>{eyebrow}</p>
      <TitleTag id={titleId} className="mt-2 text-2xl font-bold tracking-tight text-zinc-50 sm:mt-3">
        {title}
      </TitleTag>
    </header>
  );
}
