import { GUARANTEES, PAGE_SECTIONS } from "../../data/portfolioProfile";
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

      <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
        {GUARANTEES.map((guarantee) => (
          <article
            key={guarantee.id}
            className="rounded-2xl border border-zinc-800/70 bg-zinc-900/25 p-5 sm:p-6"
          >
            <h3 className="text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
              {guarantee.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{guarantee.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
