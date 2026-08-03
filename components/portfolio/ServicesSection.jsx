import { PAGE_SECTIONS, SERVICES } from "../../data/portfolioProfile";
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

      <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
        {SERVICES.map((service, index) => (
          <article
            key={service.id}
            className="rounded-2xl border border-zinc-800/70 bg-zinc-900/25 p-5 transition duration-300 hover:border-zinc-700 hover:bg-zinc-900/45 sm:p-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
              0{index + 1}
            </span>
            <h3 className="mt-3 text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
