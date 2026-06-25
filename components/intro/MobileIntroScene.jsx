"use client";

import { motion } from "framer-motion";
import TerminalIcon from "../portfolio/TerminalIcon";
import CodeEditor from "./CodeEditor";

const ZOOM_DURATION_S = 1.45;

/**
 * @param {{ isZooming: boolean }} props
 */
export default function MobileIntroScene({ isZooming }) {
  return (
    <motion.div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-[max(1.25rem,env(safe-area-inset-top))] sm:pb-28"
      animate={isZooming ? { scale: 5.5, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ duration: ZOOM_DURATION_S, ease: [0.2, 0.82, 0.2, 1] }}
      style={{ transformOrigin: "50% 40%" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[#0b0f19]" />
        <div className="absolute inset-0 bg-glow opacity-40" />
        <div className="absolute left-1/2 top-[14%] h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-500/12 blur-3xl" />
        <div className="absolute bottom-[20%] right-[8%] h-40 w-40 rounded-full bg-cyan-500/8 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full max-w-[min(100%,400px)] flex-col items-center">
        <div className="mb-6 flex flex-col items-center gap-2.5">
          <TerminalIcon className="h-10 w-10 text-white/95" />
          <span className="text-sm font-bold tracking-[0.28em] text-white">SG LABS</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
            Inicializando sistema
          </span>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-white/[0.09] bg-[#121820] shadow-[0_28px_90px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#1a2230] px-3.5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-1 flex-1 truncate text-center font-mono text-[10px] font-medium text-slate-500">
              IntroSequence.jsx
            </span>
          </div>

          <div className="h-[min(44vh,300px)] min-h-[210px]">
            <CodeEditor variant="mobile" />
          </div>
        </div>

        <p className="mt-5 max-w-[28ch] text-center text-[11px] leading-relaxed text-slate-500">
          Entorno de desarrollo listo
          <span className="text-slate-600"> · </span>
          pulsa para acceder al portfolio
        </p>
      </div>
    </motion.div>
  );
}
