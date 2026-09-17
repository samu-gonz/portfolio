"use client";

import { useState } from "react";
import { STUDIO_SITE_MOCKUP } from "../../data/portfolioProfile";

/**
 * Browser-frame preview of sglabsstudio.com for the agency hero.
 * Drop a new screenshot at `public/hero/sglabsstudio.png` to replace it.
 */
export default function HeroSiteMockup() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="mb-16 mt-8 sm:mt-10 lg:mb-0 3xl:mt-12" aria-label={STUDIO_SITE_MOCKUP.alt}>
      <div className="overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-950 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-3 border-b border-zinc-800/80 bg-zinc-900/90 px-3 py-2.5">
          <div className="flex shrink-0 gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          <p className="min-w-0 flex-1 truncate rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1 text-center text-[11px] font-medium text-zinc-500">
            {STUDIO_SITE_MOCKUP.urlLabel}
          </p>
        </div>

        <div className="relative h-[180px] overflow-hidden bg-[#0b0f19] sm:h-auto sm:aspect-[16/10] xl:max-h-[520px] 3xl:max-h-[560px]">
          {failed ? (
            <HeroSiteMockupFallback />
          ) : (
            <img
              src={STUDIO_SITE_MOCKUP.src}
              alt={STUDIO_SITE_MOCKUP.alt}
              width={1440}
              height={900}
              onError={() => setFailed(true)}
              className="h-full w-full object-cover object-top"
            />
          )}
        </div>
      </div>
    </figure>
  );
}

function HeroSiteMockupFallback() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(ellipse_70%_55%_at_50%_30%,rgba(34,211,238,0.08),transparent_65%)] px-6 text-center">
      <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
        Estudio de Desarrollo &amp; Diseño Web
      </span>
      <p className="max-w-md text-lg font-bold tracking-tight text-white sm:text-xl">
        Diseñamos páginas web ultra rápidas que convierten visitas en clientes.
      </p>
    </div>
  );
}
