import { ANALYSIS_CTA, LIMITED_AVAILABILITY } from "../../data/agencyProcess";
import { UI } from "./uiTokens";

export default function FirstClientsOffer() {
  const { eyebrow, title, description, perks } = LIMITED_AVAILABILITY;

  return (
    <section id="plazas" aria-labelledby="limited-slots-title" className="rounded-3xl bg-gradient-to-br from-violet-500/50 via-sky-400/25 to-emerald-400/40 p-px">
      <div className="rounded-[calc(1.5rem-1px)] bg-[#070b16] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/90">{eyebrow}</p>
            <h2 id="limited-slots-title" className="mt-3 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">{description}</p>
            <a href="#empezar" className={`${UI.ctaPrimary} mt-7 w-full sm:w-auto`}>
              {ANALYSIS_CTA}
            </a>
          </div>

          <ul className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            {perks.map((perk) => (
              <li key={perk} className="flex gap-3 text-sm leading-relaxed text-zinc-200">
                <span className="mt-0.5 shrink-0 text-emerald-300" aria-hidden>
                  ✓
                </span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
