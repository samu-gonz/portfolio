import { PAGE_SECTIONS, SERVICES } from "../../data/portfolioProfile";
import SectionHeader from "./SectionHeader";

const ICONS = {
  "custom-web": (
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="1.6" />
  ),
  "ui-ux-mobile": (
    <>
      <rect x="8" y="3.5" width="8" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  "dynamic-systems": (
    <path d="M12 4.5v3M12 16.5v3M4.5 12h3M16.5 12h3M7.2 7.2l2.1 2.1M14.7 14.7l2.1 2.1M16.8 7.2l-2.1 2.1M9.3 14.7l-2.1 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  ),
};

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

      <div className="grid gap-4 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <article key={service.id} className="glass-card flex flex-col rounded-3xl p-5 sm:p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-violet-200">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                {ICONS[service.id]}
              </svg>
            </span>
            <h3 className="mt-5 text-balance text-lg font-semibold leading-snug tracking-tight text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
