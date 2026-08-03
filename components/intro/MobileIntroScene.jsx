"use client";

import TerminalIcon from "../portfolio/TerminalIcon";
import MonitorLandingContent from "./MonitorLandingContent";

/**
 * Compact intro for phones and tablets.
 *
 * @param {{
 *   onPrimaryCta?: () => void;
 *   onSecondaryCta?: () => void;
 * }} props
 */
export default function MobileIntroScene({ onPrimaryCta, onSecondaryCta }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-[max(1.25rem,env(safe-area-inset-top))] sm:pb-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[#0b0f19]" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 20%, rgba(34, 211, 238, 0.1), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[min(100%,420px)] flex-col items-center">
        <div className="mb-5 flex flex-col items-center gap-2 sm:mb-6">
          <TerminalIcon className="h-9 w-9 text-white/95 sm:h-10 sm:w-10" />
          <span className="text-sm font-bold tracking-[0.28em] text-white">SG LABS</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            Estudio digital · Desarrollo web
          </span>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c111c] shadow-[0_28px_90px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="min-h-[min(52vh,380px)]">
            <MonitorLandingContent
              compact
              onPrimaryCta={onPrimaryCta}
              onSecondaryCta={onSecondaryCta}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
