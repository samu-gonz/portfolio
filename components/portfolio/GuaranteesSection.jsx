import { GUARANTEES, PAGE_SECTIONS } from "../../data/portfolioProfile";
import ContentCard from "./ContentCard";
import SectionHeader from "./SectionHeader";

export default function GuaranteesSection() {
  const { guarantees } = PAGE_SECTIONS;
  const sectionTitleId = `${guarantees.id}-title`;

  return (
    <section id={guarantees.id} aria-labelledby={sectionTitleId} className="space-y-6 sm:space-y-8">
      <SectionHeader
        eyebrow={guarantees.eyebrow}
        title={guarantees.title}
        titleAs="h2"
        titleId={sectionTitleId}
      />

      <div className="flex flex-col gap-5 sm:gap-6">
        {GUARANTEES.map((guarantee) => (
          <ContentCard key={guarantee.id} {...guarantee} />
        ))}
      </div>
    </section>
  );
}
