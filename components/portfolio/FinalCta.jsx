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

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Correo de soporte
            </p>
            <a
              href={PROFILE.links.email}
              className="mt-1 inline-flex text-base font-semibold text-violet-200 underline-offset-4 transition hover:text-white hover:underline"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>

        <FreeAnalysisForm />
      </div>
    </section>
  );
}
