"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroSequence({ onComplete }) {
  const [isZooming, setIsZooming] = useState(false);

  const handleStart = () => {
    if (isZooming) return;
    setIsZooming(true);
    // Transición fluida sincronizada con el zoom a la pantalla
    setTimeout(() => onComplete(), 1500);
  };

  return (
    <AnimatePresence>
      <motion.section
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-[#eef1f5]"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={
            isZooming
              ? { scale: 5.5, y: 140, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ 
            duration: 1.5, 
            ease: [0.4, 0, 0.2, 1] 
          }}
          className="relative aspect-square w-full max-w-[900px] p-4 md:p-0"
        >
          {/* ILUSTRACIÓN EXACTA VECTORIAL (image_bc724a.jpg) */}
          <svg
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full select-none"
          >
            {/* Fondo de la habitación (Pared clara y línea de zócalo/mesa) */}
            <rect width="1000" height="1000" fill="#EEF1F5" />
            <rect x="0" y="620" width="1000" height="12" fill="#D2D7E0" />
            <rect x="0" y="632" width="1000" height="88" fill="#DCE1E9" />
            
            {/* Superficie de la mesa gris de oficina */}
            <rect x="0" y="720" width="1000" height="280" fill="#E1E5ED" />
            <rect x="0" y="720" width="1000" height="4" fill="#C2C8D4" />

            {/* SOPORTE DEL MONITOR */}
            <path d="M470 630H530L545 685H455L470 630Z" fill="#111622" />
            <ellipse cx="500" cy="685" rx="85" ry="12" fill="#192030" />

            {/* MONITOR PRINCIPAL (Bordes gruesos y redondeados) */}
            <rect x="190" y="190" width="620" height="470" rx="42" fill="#0E131F" />
            {/* Pantalla útil interna */}
            <rect x="215" y="215" width="570" height="415" rx="24" fill="#111827" />

            {/* TECLADO CON PERSPECTIVA */}
            <path d="M320 725H680L715 785H285L320 725Z" fill="#242F41" />
            <path d="M323 728H677L708 780H292L323 728Z" fill="#18202C" />
            {/* Dibujo de líneas de rejilla simulando las teclas de la imagen */}
            <path d="M340 735H660M335 745H665M330 755H670M325 765H675M315 775H685" stroke="#2D3A4E" strokeWidth="2" />
            <path d="M370 728L350 780M420 728L405 780M480 728L475 780M540 728L545 780M600 728L615 780M650 728L675 780" stroke="#2D3A4E" strokeWidth="1.5" />

            {/* SILLA DE OFICINA (Estructura inferior y respaldo) */}
            {/* Base/Pistón */}
            <rect x="488" y="880" width="24" height="120" fill="#0B0F17" />
            {/* Soporte del respaldo */}
            <path d="M475 830H525L520 920H480L475 830Z" fill="#151C28" />
            
            {/* Respaldo de la silla */}
            <path d="M380 920C380 640 620 640 620 920V980H380V920Z" fill="#1F2633" />
            {/* Cojín interior del respaldo */}
            <path d="M405 910C405 675 595 675 595 910V980H405V910Z" fill="#374151" />

            {/* Reposabrazos izquierdo */}
            <path d="M350 835H400V855H350V835Z" fill="#18202C" />
            <path d="M365 855V930H385V855H365Z" fill="#111622" />
            {/* Reposabrazos derecho */}
            <path d="M600 835H650V855H600V835Z" fill="#18202C" />
            <path d="M615 855V930H635V855H615Z" fill="#111622" />

            {/* CUERPO DEL PROGRAMADOR */}
            {/* Hombros y torso */}
            <path d="M410 830C410 760 440 735 500 735C560 735 590 760 590 830V1000H410V830Z" fill="#2E5B88" />
            {/* Capa de sombra/diseño superior de la sudadera azul */}
            <path d="M435 765C460 750 540 750 565 765L590 830H410L435 765Z" fill="#3B6F9F" />

            {/* Brazos rectos que se abren de manera natural hacia los lados del teclado */}
            <path d="M425 760L310 740L335 765L435 795Z" fill="#254A70" /> {/* Brazo Izquierdo */}
            <path d="M575 760L690 740L665 765L565 795Z" fill="#254A70" /> {/* Brazo Derecho */}

            {/* Manos (Círculos color carne reposando sobre el teclado) */}
            <circle cx="312" cy="742" r="14" fill="#E0A985" />
            <circle cx="688" cy="742" r="14" fill="#E0A985" />

            {/* Cuello */}
            <rect x="482" y="705" width="36" height="40" fill="#E0A985" />
            <path d="M482 730C495 742 505 742 518 730V745H482V730Z" fill="#C6926E" />

            {/* Cabeza (Forma base) */}
            <ellipse cx="500" cy="635" rx="58" ry="68" fill="#E0A985" />
            
            {/* Orejas */}
            <circle cx="438" cy="640" r="11" fill="#E0A985" />
            <circle cx="562" cy="640" r="11" fill="#E0A985" />

            {/* Cabello castaño oscuro (Cubre la nuca y define la vista desde atrás) */}
            <path d="M442 630C438 535 470 515 500 515C530 515 562 535 558 630C558 655 542 640 500 640C458 640 442 655 442 630Z" fill="#2F231D" />
            {/* Brillo/Textura del cabello */}
            <path d="M455 580C470 545 530 545 545 580C525 565 475 565 455 580Z" fill="#423229" />
          </svg>

          {/* CAPA DE INTERFAZ DE CÓDIGO (Texto real superpuesto para nitidez y efecto de escalado) */}
          <div className="absolute left-[24.5%] top-[24%] h-[38%] w-[51%] overflow-hidden font-mono text-[9px] leading-normal tracking-wide text-[#A9B2C3] antialiased md:text-[11px]">
            {/* Cabecera del archivo */}
            <div className="mb-4 text-[#4B5563] opacity-90 select-none">workspace/core-engine.ts</div>
            
            {/* Estructura del Editor */}
            <div className="space-y-0.5 font-medium">
              <p>
                <span className="text-[#C084FC]">const</span>{" "}
                <span className="text-[#60A5FA]">pipeline</span> ={" "}
                <span className="text-[#34D399]">async</span> () =&#123;&gt;&#125; &#123;
              </p>
              
              <p className="pl-4 text-[#FBBF24]">try &#123;</p>
              
              <p className="pl-8">
                state.view = <span className="text-[#34D399]">"proyectos"</span>;
              </p>
              
              <p className="pl-8 text-[#9CA3AF]">
                <span className="text-[#C084FC]">const</span> <span className="text-[#E879F9]">schema</span> = &#123;
              </p>
              
              <p className="pl-12">
                model: <span className="text-[#34D399]">"gpt-4.1"</span>,
              </p>
              
              <p className="pl-12">
                temperature: <span className="text-[#FBBF24]">0.2</span>,
              </p>
              
              <p className="pl-8 text-[#9CA3AF]">&#125;;</p>
              
              <p className="pl-8">
                <span className="text-[#C084FC]">await</span>{" "}
                <span className="text-[#60A5FA]">compile</span>(schema);
              </p>
              
              <p className="pl-4 text-[#FBBF24]">&#125; <span className="text-[#C084FC]">catch</span> &#123;</p>
              
              <p className="pl-8">
                console.log(<span className="text-[#34D399]">"Done"</span>);
              </p>
              
              <p className="pl-4 text-[#FBBF24]">&#125;</p>
              
              <p>&#125;</p>
            </div>

            {/* Cursor parpadeante integrado */}
            <motion.div 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 1, ease: "steps(2)" }}
              className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-[#22D3EE]"
            />
          </div>
        </motion.div>

        {/* CONTENEDOR FLOTANTE DEL BOTÓN (Estilo barra inferior idéntica) */}
        <motion.div
          animate={isZooming ? { y: 150, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-12 left-1/2 z-20 w-full max-w-[540px] -translate-x-1/2 px-4"
        >
          <button
            onClick={handleStart}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#1E2533] py-4 px-6 text-base font-semibold text-white shadow-[0_15px_40px_rgba(15,23,42,0.3)] transition-all hover:bg-[#151A24] active:scale-[0.99]"
          >
            <span>Compilar y Entrar al Sistema</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">➔</span>
          </button>
        </motion.div>

        {/* Cortina final para desvanecimiento elegante */}
        {isZooming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="pointer-events-none absolute inset-0 bg-[#111827]"
          />
        )}
      </motion.section>
    </AnimatePresence>
  );
}