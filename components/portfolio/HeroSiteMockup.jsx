"use client";

import { STUDIO_SITE_MOCKUP } from "../../data/portfolioProfile";

/**
 * Stylized browser preview for the hero.
 * The stored screenshot still shows the previous layout, including a phone
 * number, so the frame is drawn in code instead of that image.
 */
export default function HeroSiteMockup() {
  return (
    <figure className="min-w-0" aria-label={STUDIO_SITE_MOCKUP.alt}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-3 py-2.5">
          <div className="flex shrink-0 gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          <p className="min-w-0 flex-1 truncate rounded-md border border-white/10 bg-[#070b14] px-3 py-1 text-center text-[11px] font-medium text-zinc-500">
            {STUDIO_SITE_MOCKUP.urlLabel}
          </p>
        </div>

        <div className="space-y-4 bg-[radial-gradient(ellipse_70%_55%_at_20%_0%,rgba(139,92,246,0.22),transparent_60%)] p-4 sm:p-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Presencia que convierte
          </span>
          <p className="max-w-sm text-lg font-bold leading-tight tracking-tight text-white sm:text-2xl">
            Más llamadas, reservas y ventas desde el primer pantallazo.
          </p>
          <div className="flex gap-2">
            <span className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1.5 text-[11px] font-bold text-white">
              Análisis gratis
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-zinc-300">
              Ver proyectos
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {["Velocidad", "SEO", "Reservas"].map((label) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center">
                <p className="text-xs font-semibold text-white sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
