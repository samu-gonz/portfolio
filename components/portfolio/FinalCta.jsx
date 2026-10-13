import { FREE_ANALYSIS } from "../../data/agencyProcess";
import { PROFILE } from "../../data/portfolioProfile";
import FreeAnalysisForm from "./FreeAnalysisForm";

export default function FinalCta() {
  return (
    <section
      id="empezar"
      aria-labelledby="final-cta-title"
      className="scroll-mt-24 pb-6 lg:pb-0"
    >
      <div className="glass-card grid gap-8 rounded-3xl px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/90">
            {FREE_ANALYSIS.eyebrow}
          </p>
          <h2 id="final-cta-title" className="mt-3 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {FREE_ANALYSIS.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {FREE_ANALYSIS.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {FREE_ANALYSIS.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-200">
                <span className="mt-0.5 shrink-0 text-emerald-300" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-zinc-500">
            También puedes escribir a{" "}
            <a
              href={PROFILE.links.email}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-violet-200 underline-offset-4 hover:text-white hover:underline"
            >
              {PROFILE.email}
            </a>
            .
          </p>
        </div>

        <FreeAnalysisForm />
      </div>
    </section>
  );
}
