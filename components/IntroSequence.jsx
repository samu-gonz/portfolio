"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const SCENE = "/intro-scene.png";
const BG = "/intro-bg.png";
const HAND = "/intro-hand.png";

const HAND_HOVER_Y = -22;
const HAND_CLIP = "polygon(74% 58%, 100% 58%, 100% 100%, 76% 100%)";
const HAND_MASK = "0.74,0.58 1,0.58 1,1 0.76,1";

export default function IntroSequence({ onComplete, onEnter }) {
  const [isZooming, setIsZooming] = useState(false);
  const [useHandPng, setUseHandPng] = useState(true);
  const [useBgPng, setUseBgPng] = useState(true);
  const handControls = useAnimation();
  const handleEnter = onEnter ?? onComplete;

  const ejecutarEntrada = async () => {
    if (isZooming || !handleEnter) return;

    await handControls.start({
      y: [HAND_HOVER_Y - 6, 34, HAND_HOVER_Y + 2],
      transition: { duration: 0.58, ease: [0.33, 0, 0.2, 1], times: [0, 0.48, 1] },
    });

    setIsZooming(true);
    setTimeout(() => handleEnter(), 900);
  };

  return (
    <AnimatePresence>
      <motion.section
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0b0f19] p-4 select-none"
      >
        <motion.div
          animate={isZooming ? { scale: 10, x: 0, y: -100, opacity: 0 } : { scale: 1, x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.45, ease: [0.2, 0.82, 0.2, 1] }}
          className="relative aspect-[16/9] w-full max-w-[1400px] overflow-hidden rounded-2xl shadow-[0_28px_56px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.06]"
        >
          {useBgPng ? (
            <Image
              src={BG}
              alt=""
              fill
              priority
              quality={100}
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center"
              onError={() => setUseBgPng(false)}
            />
          ) : (
            <>
              <svg className="absolute h-0 w-0" aria-hidden>
                <defs>
                  <mask id="intro-scene-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                    <rect width="1" height="1" fill="white" />
                    <polygon points={HAND_MASK} fill="black" />
                  </mask>
                </defs>
              </svg>
              <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${SCENE})`, backgroundPosition: "54% 80%" }}
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat [mask:url(#intro-scene-mask)] [-webkit-mask:url(#intro-scene-mask)]"
                style={{ backgroundImage: `url(${SCENE})` }}
                role="img"
                aria-label="Espacio de trabajo con monitor y teclado"
              />
            </>
          )}

          {useHandPng ? (
            <motion.img
              src={HAND}
              alt=""
              animate={handControls}
              initial={{ y: HAND_HOVER_Y }}
              onError={() => setUseHandPng(false)}
              className="pointer-events-none absolute bottom-[1%] right-[12%] z-[6] w-[36%] max-w-[480px] h-auto drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
              style={{ transformOrigin: "70% 85%" }}
            />
          ) : (
            <motion.div
              animate={handControls}
              initial={{ y: HAND_HOVER_Y }}
              className="pointer-events-none absolute inset-0 z-[6] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${SCENE})`,
                clipPath: HAND_CLIP,
                transformOrigin: "88% 90%",
              }}
              aria-hidden
            />
          )}

          <div className="absolute inset-x-0 bottom-[19%] z-10 flex justify-center px-6">
            <motion.button
              type="button"
              onClick={ejecutarEntrada}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isZooming}
              className="group flex w-full max-w-[420px] items-center justify-center gap-2.5 rounded-full border border-white/[0.12] bg-[#121820]/95 px-9 py-4 text-[15px] font-semibold tracking-tight text-white shadow-[0_14px_40px_rgba(0,0,0,0.75)] backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/50 hover:bg-indigo-600 hover:shadow-[0_16px_44px_rgba(79,70,229,0.45)] disabled:opacity-70"
            >
              Pulsar Enter y Entrar al Sistema
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
