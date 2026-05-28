"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function IntroSequence({ onComplete }) {
  const [isZooming, setIsZooming] = useState(false);

  const handleStart = () => {
    if (isZooming) return;
    setIsZooming(true);
    setTimeout(() => onComplete(), 1450);
  };

  return (
    <AnimatePresence>
      <motion.section
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0b0f19] p-4"
      >
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

        <motion.div
          initial={{ scale: 1, rotateX: 0, rotateY: 0, opacity: 1 }}
          animate={
            isZooming
              ? { scale: 10, x: 0, y: -130, rotateX: -4, rotateY: 2, opacity: 0 }
              : { scale: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, opacity: 1 }
          }
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-900/40 p-6 shadow-[0_20px_70px_rgba(2,6,23,0.55)] backdrop-blur-md md:p-10"
          style={{ transformStyle: "preserve-3d", perspective: 1200 }}
        >
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-[#d7dbe1]">
            <div className="absolute right-14 top-8 h-44 w-44 border border-slate-300/80 bg-[#e9edf2]">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-300/80" />
              <div className="absolute bottom-0 left-1/2 top-0 w-px bg-slate-300/80" />
            </div>

            <div className="absolute bottom-16 right-20 h-14 w-4 rounded-full bg-slate-700">
              <div className="absolute -left-24 top-2 h-1.5 w-24 rotate-[20deg] rounded-full bg-slate-700" />
              <div className="absolute -left-[9.5rem] -top-4 h-10 w-24 rounded-full bg-slate-800" />
              <div className="absolute -left-4 top-12 h-2 w-10 rounded-full bg-slate-800" />
            </div>

            <div className="absolute bottom-16 left-1/2 h-14 w-14 rounded-full bg-slate-300 shadow-inner" />
            <div className="absolute bottom-14 right-48 h-10 w-12 rounded-b-2xl rounded-t-xl bg-slate-600/85" />
            <div className="absolute bottom-[3.75rem] left-14 h-8 w-16 rounded-t-xl bg-[#806044]" />
            <div className="absolute bottom-23 left-16 h-14 w-12 rounded-t-full bg-[#3f612f]" />
            <div className="absolute bottom-23 left-24 h-10 w-9 rounded-t-full bg-[#4d7338]" />

            <div className="relative min-h-[420px] p-6 md:min-h-[510px] md:p-8">
              <div className="absolute bottom-10 left-0 right-0 h-5 bg-[#b6bcc4]" />

              <div className="absolute bottom-14 left-1/2 h-[11.5rem] w-52 -translate-x-1/2 rounded-[44%] bg-[#2f76c0] md:h-[13.5rem] md:w-[15.5rem]" />
              <div className="absolute bottom-[248px] left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#b88665] md:bottom-[292px]" />
              <div className="absolute bottom-[228px] left-1/2 h-10 w-24 -translate-x-1/2 rounded-full bg-[#377ec6] md:bottom-[272px]" />
              <div className="absolute bottom-0 left-1/2 h-36 w-44 -translate-x-1/2 rounded-t-[44%] bg-slate-200 shadow-[0_-8px_20px_rgba(0,0,0,0.1)]" />

              {/* Monitor con codigo miniatura sintactico para reforzar narrativa tecnica. */}
              <motion.div
                animate={isZooming ? { scale: 1.08, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute bottom-[110px] left-1/2 h-52 w-72 -translate-x-1/2 rounded-2xl border-[8px] border-slate-900 bg-[#0f172a] md:h-56 md:w-80"
              >
                <div className="border-b border-white/10 px-3 py-2 text-[10px] text-slate-400">
                  portfolio.tsx - VS Code
                </div>
                <div className="space-y-1.5 px-3 py-2 font-mono text-[10px] leading-relaxed md:text-[11px]">
                  <p className="text-indigo-300">
                    <span className="text-fuchsia-300">const</span> buildPipeline
                    <span className="text-slate-300"> = </span>
                    <span className="text-cyan-300">async</span>
                    <span className="text-slate-300"> () =&gt; {"{"}</span>
                  </p>
                  <p className="pl-3 text-slate-300">
                    <span className="text-cyan-300">await</span> deploy(
                    <span className="text-emerald-300">jsonSchema</span>);
                  </p>
                  <p className="pl-3 text-slate-300">
                    secureTx(<span className="text-amber-300">javaService</span>);
                  </p>
                  <p className="pl-3 text-slate-300">
                    setState(<span className="text-sky-300">nextView</span>);
                    <span className="ml-1 inline-block h-3 w-1 animate-pulse bg-cyan-300 align-middle" />
                  </p>
                  <p className="text-slate-300">{"}"}</p>
                </div>
              </motion.div>
              <div className="absolute bottom-[92px] left-1/2 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-slate-700" />
              <div className="absolute bottom-[74px] left-1/2 h-3 w-40 -translate-x-1/2 rounded-full bg-slate-800/90" />
            </div>
          </div>

          <motion.div
            animate={isZooming ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-300/10"
          />
        </motion.div>

        <motion.button
          onClick={handleStart}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="glass-card absolute bottom-8 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/45"
        >
          Compilar y Entrar <ArrowIcon />
        </motion.button>

        {isZooming ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute inset-0 bg-[#0b0f19]"
          />
        ) : null}
      </motion.section>
    </AnimatePresence>
  );
}
