"use client";

import { FIRST_CLIENTS_OFFER } from "../../data/agencyProcess";

/**
 * @param {{ onRequestContact?: () => void }} props
 */
export default function FirstClientsOffer({ onRequestContact }) {
  const { eyebrow, title, description, perks } = FIRST_CLIENTS_OFFER;

  return (
    <section
      id="primeros-clientes"
      aria-labelledby="first-clients-title"
      className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-zinc-900/40"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 0% 50%, rgba(34,211,238,0.1), transparent 55%), linear-gradient(145deg, #10151f 0%, #0a0c12 100%)",
        }}
      />

      <div className="relative z-[1] grid gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90">{eyebrow}</p>
          <h2
            id="first-clients-title"
            className="mt-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {description}
          </p>

          <button
            type="button"
            onClick={onRequestContact}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#041018] transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Quiero ser proyecto piloto
          </button>
        </div>

        <ul className="space-y-3 rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-5 sm:p-6">
          {perks.map((perk) => (
            <li key={perk} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
              <span className="mt-0.5 shrink-0 text-cyan-400" aria-hidden>
                ✓
              </span>
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
