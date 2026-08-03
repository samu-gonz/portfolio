"use client";

import { PROFILE } from "../../data/portfolioProfile";

/**
 * @param {{ onRequestContact?: () => void }} props
 */
export default function FinalCta({ onRequestContact }) {
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

      <div className="relative z-[1] px-6 py-10 text-center sm:px-10 sm:py-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Siguiente paso</p>
        <h2
          id="final-cta-title"
          className="mt-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl"
        >
          ¿Quieres ver qué mejorarías en tu web actual?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          Análisis gratuito y sin compromiso. Ideal si quieres ser de los primeros proyectos y
          empezar con condiciones favorables.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onRequestContact}
            className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#041018] transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
          >
            Solicitar Análisis Gratuito
          </button>
          <a
            href={PROFILE.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-zinc-600 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-400 hover:text-white sm:w-auto"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
