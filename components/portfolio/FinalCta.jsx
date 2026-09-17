"use client";

import { FREE_ANALYSIS } from "../../data/agencyProcess";
import FreeAnalysisForm from "./FreeAnalysisForm";

/**
 * @param {{ id?: string }} props
 */
function BenefitIcon({ id }) {
  const common = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "none",
  };

  if (id === "response-time") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 8v4.2l2.4 1.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "no-commitment") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8.5 12.2 11 14.7 15.6 9.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="5" y="4.5" width="14" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function FinalCta() {
  return (
    <section
      id="empezar"
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900/40"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 80% 20%, rgba(34,211,238,0.1), transparent 55%), linear-gradient(160deg, #12161f 0%, #0a0c12 100%)",
        }}
      />

      <div className="relative z-[1] grid gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-10 xl:gap-12 2xl:px-12 2xl:py-14 3xl:gap-16 3xl:px-16 3xl:py-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90">
            Solicita análisis gratuito
          </p>
          <h2
            id="final-cta-title"
            className="mt-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl 3xl:text-[2.125rem]"
          >
            {FREE_ANALYSIS.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base 3xl:max-w-2xl 3xl:text-lg">
            {FREE_ANALYSIS.description}
          </p>

          <ul className="mt-6 space-y-3">
            {FREE_ANALYSIS.benefits.map((benefit) => (
              <li key={benefit.id} className="flex gap-3">
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/70 text-cyan-400"
                  aria-hidden
                >
                  <BenefitIcon id={benefit.id} />
                </span>
                <span>
                  <span className="block text-sm font-medium text-zinc-100">{benefit.title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-zinc-400">
                    {benefit.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-5 sm:p-6 xl:p-7 2xl:p-8">
          <FreeAnalysisForm />
        </div>
      </div>
    </section>
  );
}
