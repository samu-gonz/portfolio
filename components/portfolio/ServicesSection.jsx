import { PAGE_SECTIONS, SERVICES } from "../../data/portfolioProfile";
import ContentCard from "./ContentCard";
import SectionHeader from "./SectionHeader";

export default function ServicesSection() {
  const { services } = PAGE_SECTIONS;
  const sectionTitleId = `${services.id}-title`;

  return (
    <section id={services.id} aria-labelledby={sectionTitleId} className="space-y-6 sm:space-y-8">
      <SectionHeader
        eyebrow={services.eyebrow}
        title={services.title}
        titleAs="h2"
        titleId={sectionTitleId}
      />

      <div className="flex flex-col gap-5 sm:gap-6">
        {SERVICES.map((service) => (
          <ContentCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
