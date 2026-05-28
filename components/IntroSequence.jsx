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
            <div className="absolute bottom-[5.75rem] left-16 h-14 w-12 rounded-t-full bg-[#3f612f]" />
            <div className="absolute bottom-[5.75rem] left-24 h-10 w-9 rounded-t-full bg-[#4d7338]" />

            <div className="relative min-h-[420px] p-6 md:min-h-[510px] md:p-8">
              <div className="absolute bottom-10 left-0 right-0 h-5 bg-[#b6bcc4]" />

              <motion.div
                animate={isZooming ? { scale: 1.08, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute bottom-[110px] left-1/2 z-10 h-52 w-72 -translate-x-1/2 rounded-2xl border-[8px] border-slate-900 bg-[#0f172a] md:h-56 md:w-80"
              >
                <div className="border-b border-white/10 px-3 py-2 text-[10px] text-slate-400">
                  coding-session.tsx - VS Code
                </div>

                {/* El codigo se ve solo en las esquinas para un look mas cinematografico. */}
                <div className="relative h-[calc(100%-1.75rem)] overflow-hidden">
                  <div className="absolute left-0 top-0 h-24 w-40 bg-gradient-to-br from-[#0b1733] via-[#0e1b39] to-transparent p-2 font-mono text-[9px] leading-relaxed md:text-[10px]">
                    <p className="text-indigo-300">
                      <span className="text-fuchsia-300">const</span> init ={" "}
                      <span className="text-cyan-300">async</span>
                    </p>
                    <p className="text-slate-300">
                      <span className="text-cyan-300">await</span>{" "}
                      secure(<span className="text-emerald-300">json</span>)
                    </p>
                  </div>

                  <div className="absolute right-0 top-0 h-24 w-40 bg-gradient-to-bl from-[#0b1733] via-[#0e1b39] to-transparent p-2 font-mono text-right text-[9px] leading-relaxed md:text-[10px]">
                    <p className="text-slate-300">
                      <span className="text-amber-300">java</span>.tx()
                    </p>
                    <p className="text-sky-300">
                      render(<span className="text-cyan-300">state</span>)
                      <span className="ml-1 inline-block h-2.5 w-1 animate-pulse bg-cyan-300 align-middle" />
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/96 to-[#0f172a]/98" />
                </div>
              </motion.div>

              {/* Silueta humana mas realista, vista de espaldas. */}
              <div className="absolute bottom-0 left-1/2 z-20 h-[345px] w-[255px] -translate-x-1/2 md:h-[385px] md:w-[280px]">
                <svg viewBox="0 0 280 385" className="h-full w-full" aria-hidden="true">
                  <path
                    d="M86 367C86 348 102 334 122 334H158C178 334 194 348 194 367V385H86V367Z"
                    fill="#CFD5DD"
                  />
                  <path
                    d="M84 246C84 214 109 191 140 191C171 191 196 214 196 246V340H84V246Z"
                    fill="#2F76C0"
                  />
                  <path
                    d="M98 232C108 218 122 210 140 210C158 210 172 218 182 232L170 252C162 243 151 238 140 238C129 238 118 243 110 252L98 232Z"
                    fill="#3D84CC"
                  />
                  <path
                    d="M58 258C61 233 79 215 102 212L108 240C95 244 85 254 82 268L76 300H56L58 258Z"
                    fill="#2B6DB2"
                  />
                  <path
                    d="M222 258C219 233 201 215 178 212L172 240C185 244 195 254 198 268L204 300H224L222 258Z"
                    fill="#2B6DB2"
                  />
                  <path
                    d="M120 192C120 177 128 168 140 168C152 168 160 177 160 192V208H120V192Z"
                    fill="#B88463"
                  />
                  <ellipse cx="140" cy="149" rx="42" ry="44" fill="#B88463" />
                  <path
                    d="M98 150C98 121 117 99 143 99C163 99 180 113 183 133C176 131 169 131 162 132C155 120 141 114 127 117C115 120 106 129 102 141L98 150Z"
                    fill="#4A352C"
                  />
                  <path
                    d="M100 142C104 115 125 98 150 101C168 103 182 116 186 134C178 138 171 143 165 149C157 140 147 135 136 135C124 135 112 141 104 151L100 142Z"
                    fill="#5B4135"
                  />
                </svg>
              </div>
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
