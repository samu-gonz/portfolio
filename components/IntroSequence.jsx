"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroSequence({ onComplete }) {
  const [isZooming, setIsZooming] = useState(false);

  const handleStart = () => {
    if (isZooming) return;
    setIsZooming(true);
    // Tiempo ajustado para que coincida con la sensación de la animación
    setTimeout(() => onComplete(), 1500);
  };

  return (
    <AnimatePresence>
      <motion.section
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0b0f19]"
      >
        {/* Luces de ambiente en el fondo */}
        <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -right-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={
            isZooming
              ? { scale: 12, y: -150, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ 
            duration: 1.5, 
            ease: [0.45, 0, 0.55, 1] 
          }}
          className="relative aspect-square w-full max-w-[800px] p-4 md:p-0"
        >
          {/* ILUSTRACIÓN ESCALABLE */}
          <svg
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full drop-shadow-2xl"
          >
            {/* Fondo y Pared */}
            <rect width="1000" height="1000" fill="#0B0F19" />
            <rect x="0" y="650" width="1000" height="350" fill="#161B28" />
            
            {/* Suelo/Mesa (Línea de horizonte) */}
            <rect x="0" y="720" width="1000" height="280" fill="#C9CED8" />

            {/* MONITOR */}
            <rect x="250" y="200" width="500" height="380" rx="20" fill="#080C14" />
            <rect x="265" y="215" width="470" height="310" rx="10" fill="#0D162D" />
            
            {/* Soporte Monitor */}
            <path d="M460 580H540L560 680H440L460 580Z" fill="#1F2533" />
            <ellipse cx="500" cy="685" rx="100" ry="15" fill="#1F2533" />

            {/* RESPALDO DE LA SILLA (Detrás del personaje) */}
            <path
              d="M380 900C380 750 420 700 500 700C580 700 620 750 620 900V1000H380V900Z"
              fill="#1A2230"
            />
            <path
              d="M400 880C400 780 430 740 500 740C570 740 600 780 600 880V1000H400V880Z"
              fill="#334155"
            />

            {/* CUERPO PERSONAJE (Fino y estilizado) */}
            {/* Camisa */}
            <path
              d="M430 850C430 780 460 760 500 760C540 760 570 780 570 850V1000H430V850Z"
              fill="#1D3A5F"
            />
            {/* Botones Camisa */}
            <circle cx="500" cy="800" r="4" fill="#D1D5DB" fillOpacity="0.8" />
            <circle cx="500" cy="840" r="4" fill="#D1D5DB" fillOpacity="0.8" />
            <circle cx="500" cy="880" r="4" fill="#D1D5DB" fillOpacity="0.8" />

            {/* BRAZOS RECTOS AL TECLADO */}
            <path d="M435 810L460 710H485L460 810Z" fill="#162E4D" /> {/* Izquierdo */}
            <path d="M565 810L540 710H515L540 810Z" fill="#162E4D" /> {/* Derecho */}
            
            {/* MANOS EN EL TECLADO */}
            <circle cx="472" cy="710" r="12" fill="#BF8D69" />
            <circle cx="528" cy="710" r="12" fill="#BF8D69" />

            {/* CUELLO Y CABEZA (Mirando al ordenador) */}
            <rect x="485" y="740" width="30" height="30" fill="#BF8D69" />
            <ellipse cx="500" cy="680" rx="55" ry="65" fill="#BF8D69" />
            {/* Pelo cubre la parte trasera para dar efecto de mirada frontal */}
            <path
              d="M445 680C445 600 470 570 500 570C530 570 555 600 555 680C555 700 540 680 500 680C460 680 445 700 445 680Z"
              fill="#2A201B"
            />
          </svg>

          {/* CÓDIGO DENTRO DE LA PANTALLA (Texto Real para el Zoom) */}
          <div className="absolute left-1/2 top-[29%] h-[18%] w-[28%] -translate-x-1/2 overflow-hidden font-mono text-[6px] text-white opacity-80 md:text-[8px]">
            <div className="mb-1 text-slate-500">workspace/core-engine.ts</div>
            <p className="text-purple-400">const <span className="text-blue-400">pipeline</span> = async () ={">"} &#123;</p>
            <p className="pl-2 text-yellow-400">try &#123;</p>
            <p className="pl-4">state.view = <span className="text-emerald-400">"proyectos"</span>;</p>
            <p className="pl-4">await <span className="text-blue-400">compile</span>(schema);</p>
            <p className="pl-2 text-yellow-400">&#125; catch &#123;</p>
            <p className="pl-4 text-emerald-400">console.log("Done");</p>
            <p className="pl-2 text-yellow-400">&#125;</p>
            <p>&#125;</p>
            <motion.div 
              animate={{ opacity: [0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block h-3 w-1 bg-cyan-400"
            />
          </div>
        </motion.div>

        {/* BOTÓN DE ENTRADA */}
        <motion.div
          animate={isZooming ? { y: 100, opacity: 0 } : { y: 0, opacity: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={handleStart}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/80 px-8 py-4 text-sm font-bold text-white shadow-2xl backdrop-blur-xl transition-all"
          >
            Compilar y Entrar al Sistema 
            <span className="text-lg">➔</span>
          </motion.button>
        </motion.div>

        {/* Overlay final para fundido a negro antes de onComplete */}
        {isZooming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pointer-events-none absolute inset-0 bg-[#0b0f19]"
          />
        )}
      </motion.section>
    </AnimatePresence>
  );
}