import Link from "next/link";
import { LEGAL_IDENTITY, PROFILE } from "../../data/portfolioProfile";
import { ANALYSIS_CTA } from "../../data/agencyProcess";
import { UI } from "./uiTokens";

const FACTS = [
  "La misma persona que te responde diseña y programa la web.",
  "Precio, alcance y plazos por escrito antes de empezar.",
  "Sin comerciales, sin plantilla cerrada y sin desaparecer al publicar.",
];

export default function AboutStudio() {
  return (
    <section id="estudio" aria-labelledby="estudio-title" className="scroll-mt-24">
      <div className="glass-card grid gap-8 rounded-3xl px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-10 lg:px-10">
        <div className="flex items-center gap-4 lg:flex-col lg:items-start">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/30 via-sky-400/20 to-emerald-400/20 text-lg font-bold tracking-wide text-white"
            aria-hidden
          >
            SG
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{LEGAL_IDENTITY.holder}</p>
            <p className="mt-1 text-sm text-zinc-400">{PROFILE.location}</p>
            <p className="mt-1 text-sm text-zinc-500">Trato directo</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/90">Quién hay detrás</p>
          <h2 id="estudio-title" className="mt-3 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Hablas conmigo, no con una agencia.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Soy Samuel González Rodríguez. Diseño y desarrollo yo las webs de SG Labs Studio, desde
            Canarias, para negocios locales y empresas que quieren más llamadas y reservas. No hay un
            equipo de cuentas en medio: si escribes, te contesto yo y la web la construyo yo.
          </p>
          <ul className="mt-5 space-y-2.5">
            {FACTS.map((fact) => (
              <li key={fact} className="flex gap-3 text-sm leading-relaxed text-zinc-200">
                <span className="mt-0.5 shrink-0 text-emerald-300" aria-hidden>
                  ✓
                </span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#empezar" className={`${UI.ctaPrimary} w-full sm:w-auto`}>
              {ANALYSIS_CTA}
            </a>
            <Link href={PROFILE.cvUrl} className={`${UI.ctaSecondary} w-full sm:w-auto`}>
              Ver currículum
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
