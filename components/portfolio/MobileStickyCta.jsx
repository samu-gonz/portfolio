"use client";

import { PROFILE } from "../../data/portfolioProfile";

/**
 * Barra fija en móvil para contactar sin hacer scroll hasta el final.
 *
 * @param {{ onRequestContact?: () => void }} props
 */
export default function MobileStickyCta({ onRequestContact }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800/80 bg-zinc-950/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={PROFILE.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-zinc-600 px-3 py-3 text-xs font-semibold text-zinc-100 transition active:scale-[0.98]"
        >
          WhatsApp
        </a>
        <button
          type="button"
          onClick={onRequestContact}
          className="inline-flex flex-[1.4] items-center justify-center rounded-full bg-cyan-400 px-3 py-3 text-xs font-bold text-[#041018] transition active:scale-[0.98]"
        >
          Análisis gratis
        </button>
      </div>
    </div>
  );
}
