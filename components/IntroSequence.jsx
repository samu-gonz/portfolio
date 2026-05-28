"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#0b0f19] p-4"
      >
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

        <motion.div
          initial={{ scale: 1, rotateX: 0, rotateY: 0, opacity: 1 }}
          animate={
            isZooming
              ? { scale: 14, x: 0, y: -185, rotateX: -5, rotateY: 2.5, opacity: 0 }
              : { scale: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, opacity: 1 }
          }
          transition={{ duration: 1.55, ease: [0.2, 0.82, 0.2, 1] }}
          className="relative w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-900/45 p-4 shadow-[0_20px_70px_rgba(2,6,23,0.55)] backdrop-blur-md md:p-8"
          style={{ transformStyle: "preserve-3d", perspective: 1200 }}
        >
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-[#d9dde4]">
            <svg viewBox="0 0 1200 700" className="h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e6e9ef" />
                  <stop offset="100%" stopColor="#c9ced8" />
                </linearGradient>
                <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d7b896" />
                  <stop offset="100%" stopColor="#bf9b78" />
                </linearGradient>
                <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d162d" />
                  <stop offset="100%" stopColor="#0f1b36" />
                </linearGradient>
                <linearGradient id="hairFadeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2a201b" />
                  <stop offset="55%" stopColor="#4a362d" />
                  <stop offset="100%" stopColor="#bd8a66" />
                </linearGradient>
                <linearGradient id="hairFadeRight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2a201b" />
                  <stop offset="55%" stopColor="#4a362d" />
                  <stop offset="100%" stopColor="#bd8a66" />
                </linearGradient>
              </defs>

              <rect width="1200" height="700" fill="url(#wallGrad)" />
              <rect x="0" y="510" width="1200" height="190" fill="#b9bec8" />

              {/* Poster abstracto texturizado en pared */}
              <rect x="875" y="85" width="210" height="250" rx="6" fill="#f3f6fb" stroke="#c7ccd5" strokeWidth="4" />
              <rect x="892" y="102" width="176" height="216" rx="4" fill="#e3e7f0" />
              <path d="M900 280L948 214L989 246L1032 183L1064 226" stroke="#4f46e5" strokeWidth="7" fill="none" />
              <path d="M902 162L972 136L1058 176" stroke="#06b6d4" strokeWidth="6" fill="none" />
              <circle cx="950" cy="256" r="20" fill="#10b981" fillOpacity="0.35" />
              <circle cx="1028" cy="140" r="14" fill="#6366f1" fillOpacity="0.4" />
              <rect x="912" y="110" width="148" height="18" rx="4" fill="#c7d0de" fillOpacity="0.9" />
              <path d="M900 306H1062" stroke="#c8d1de" strokeWidth="4" />
              <path d="M900 126H1062" stroke="#c8d1de" strokeWidth="3" strokeDasharray="4 6" />

              {/* Escritorio y accesorios */}
              <rect x="70" y="465" width="1060" height="34" rx="10" fill="url(#deskGrad)" />
              <rect x="85" y="499" width="16" height="201" fill="#6e7077" />
              <rect x="1098" y="499" width="16" height="201" fill="#6e7077" />
              <ellipse cx="600" cy="507" rx="190" ry="10" fill="black" fillOpacity="0.1" />
              <rect x="486" y="486" width="230" height="16" rx="6" fill="#252a35" />
              <ellipse cx="600" cy="503" rx="130" ry="6" fill="black" fillOpacity="0.1" />
              <rect x="740" y="492" width="42" height="8" rx="4" fill="#fafafa" />
              <ellipse cx="761" cy="503" rx="28" ry="4" fill="black" fillOpacity="0.1" />

              {/* Taza y humo */}
              <ellipse cx="882" cy="489" rx="30" ry="6" fill="black" fillOpacity="0.1" />
              <path d="M860 451H905V486H860Z" fill="#2f3f53" />
              <ellipse cx="882" cy="451" rx="22" ry="4.5" fill="#3d5169" />
              <ellipse cx="882" cy="451.5" rx="14" ry="2.8" fill="#6f8092" />
              <path d="M905 457C917 457 921 463 921 470C921 477 917 482 905 482" stroke="#2f3f53" strokeWidth="5" fill="none" />
              <path d="M875 444C875 434 880 426 886 420" stroke="#d5d9e2" strokeWidth="3" fill="none" className="steam" />
              <path d="M891 447C891 437 896 429 902 423" stroke="#d5d9e2" strokeWidth="3" fill="none" className="steam steam--delay" />

              {/* Planta */}
              <ellipse cx="163" cy="490" rx="34" ry="7" fill="black" fillOpacity="0.1" />
              <rect x="135" y="444" width="56" height="45" rx="8" fill="#8d6b4f" />
              <path d="M163 444C154 424 155 406 169 393C176 410 177 427 163 444Z" fill="#3f7038" />
              <path d="M150 445C142 429 145 414 158 403C164 419 162 432 150 445Z" fill="#4a8340" />
              <path d="M176 447C171 431 175 417 188 409C192 425 188 438 176 447Z" fill="#5a944d" />

              {/* Monitor panoramico */}
              <ellipse cx="600" cy="510" rx="112" ry="14" fill="#1a2130" fillOpacity="0.35" />
              <rect x="390" y="220" width="420" height="255" rx="18" fill="#0b111f" />
              <rect x="405" y="235" width="390" height="220" rx="10" fill="url(#monitorGrad)" />
              <rect x="565" y="475" width="70" height="18" rx="6" fill="#495065" />
              <ellipse cx="600" cy="505" rx="95" ry="12" fill="#1f2533" />

              {/* Persona realista de espaldas */}
              <ellipse cx="600" cy="646" rx="130" ry="18" fill="black" fillOpacity="0.1" />
              {/* Silla ergonomica negra */}
              <path d="M500 640C500 560 538 518 600 518C662 518 700 560 700 640V700H500V640Z" fill="#1f232c" />
              <path d="M520 628C520 565 551 535 600 535C649 535 680 565 680 628V700H520V628Z" fill="#2a2f3a" />
              <rect x="580" y="640" width="40" height="38" rx="8" fill="#191d26" />
              <path d="M515 664C515 644 533 629 555 629H646C668 629 686 644 686 664V700H515V664Z" fill="#cfd4dc" />
              <path d="M478 481C478 430 531 387 600 387C669 387 722 430 722 481V635H478V481Z" fill="#274a72" />
              <path d="M500 474C530 433 567 413 600 413C633 413 670 433 700 474L679 511C656 488 628 474 600 474C572 474 544 488 521 511L500 474Z" fill="#335f8f" />
              {/* Cuello integrado de manera fluida con hombros */}
              <path d="M563 402C563 379 578 364 600 364C622 364 637 379 637 402V418H563V402Z" fill="#bd8a66" />
              <path d="M454 496C462 452 492 425 530 419L536 456C513 462 495 479 487 504L476 548H450L454 496Z" fill="#294769" />
              <path d="M746 496C738 452 708 425 670 419L664 456C687 462 705 479 713 504L724 548H750L746 496Z" fill="#294769" />
              <ellipse cx="600" cy="323" rx="58" ry="60" fill="#bd8a66" />
              {/* Corte de pelo low fade con degradado a piel */}
              <path d="M543 321C543 286 567 256 603 256C638 256 663 285 666 318C644 304 622 296 600 296C579 296 560 302 543 321Z" fill="#2b211d" />
              <path d="M548 328C555 306 573 291 596 288V352C574 350 556 342 548 328Z" fill="url(#hairFadeLeft)" />
              <path d="M652 328C645 306 627 291 604 288V352C626 350 644 342 652 328Z" fill="url(#hairFadeRight)" />
            </svg>

            <motion.div
              animate={isZooming ? { scale: 1.25, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.95, ease: "easeInOut" }}
              className="absolute left-1/2 top-[34%] z-10 h-[31%] w-[34%] -translate-x-1/2 rounded-xl border border-cyan-300/20 bg-[#0f1b36]/95 shadow-[0_0_30px_rgba(14,165,233,0.15)]"
            >
              <div className="border-b border-white/10 px-3 py-2 font-mono text-[10px] text-slate-400">
                workspace/core-engine.ts
              </div>
              <div className="h-[calc(100%-1.8rem)] overflow-hidden px-3 py-2 font-mono text-[8.5px] leading-relaxed text-slate-300 md:text-[9.5px]">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">pipeline</span> = <span className="text-emerald-400">async</span> () =&gt; {"{"}</p>
                <p className="pl-3"><span className="text-yellow-400">try</span> {"{"}</p>
                <p className="pl-6"><span className="text-blue-400">state</span>.view = <span className="text-emerald-400">"proyectos"</span>;</p>
                <p className="pl-6"><span className="text-purple-400">const</span> schema = {"{"}</p>
                <p className="pl-9"><span className="text-blue-400">model</span>: <span className="text-emerald-400">"gpt-4.1"</span>,</p>
                <p className="pl-9"><span className="text-blue-400">temperature</span>: <span className="text-yellow-400">0.2</span>,</p>
                <p className="pl-9"><span className="text-blue-400">stream</span>: <span className="text-yellow-400">true</span>,</p>
                <p className="pl-9"><span className="text-blue-400">guards</span>: [<span className="text-emerald-400">"rate_limit"</span>, <span className="text-emerald-400">"sanitizer"</span>],</p>
                <p className="pl-6">{"};"}</p>
                <p className="pl-6"><span className="text-purple-400">await</span> <span className="text-blue-400">compile</span>(schema);</p>
                <p className="pl-6"><span className="text-purple-400">const</span> <span className="text-blue-400">javaTx</span> = <span className="text-blue-400">backend</span>.beginTransaction();</p>
                <p className="pl-6"><span className="text-blue-400">javaTx</span>.commit();</p>
                <p className="pl-3">{"}"} <span className="text-yellow-400">catch</span> (error) {"{"}</p>
                <p className="pl-6"><span className="text-blue-400">console</span>.error(error);</p>
                <p className="pl-3">{"}"}</p>
                <p>{"}"}<span className="ml-1 inline-block h-2.5 w-1 animate-pulse bg-cyan-300 align-middle" /></p>
              </div>
            </motion.div>
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
          Compilar y Entrar al Sistema ➔
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
