"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Monitor from "./intro/Monitor";
import Character from "./intro/Character";
import Desk from "./intro/Desk";
import CodeEditor from "./intro/CodeEditor";

export default function IntroSequence({ onComplete }) {
  const [isZooming, setIsZooming] = useState(false);

  const handleStart = () => {
    if (isZooming) return;
    setIsZooming(true);
    setTimeout(() => onComplete(), 1450);
  };

  const colors = {
    wall: "#9aa2b1",
    wallShade: "#838b9a",
    desk: "#7a5946",
    deskLine: "#8d6a55",
    monitorShell: "#1f2430",
    monitorFrame: "#2b3242",
    monitorScreen: "#0b1020",
    monitorGlow: "#1a2f55",
    metalA: "#cbd5e1",
    metalB: "#94a3b8",
    metalC: "#475569",
    shirtA: "#234b77",
    shirtB: "#2f5f95",
    skin: "#c99572",
    hair: "#36261f",
    chairA: "#202838",
    chairB: "#364357",
    chairC: "#5b6677",
    cyan: "#7dcfff",
    purple: "#bb9af7",
    green: "#9ece6a",
    yellow: "#e0af68",
  };

  return (
    <AnimatePresence>
      <motion.section
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0b0f19]"
      >
        <motion.div
          animate={isZooming ? { scale: 11.2, x: 0, y: -168, opacity: 0 } : { scale: 1, x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.45, ease: [0.2, 0.82, 0.2, 1] }}
          className="relative w-full max-w-7xl aspect-[16/9] p-4"
        >
          <svg viewBox="0 0 1600 900" className="h-full w-full drop-shadow-2xl" aria-hidden="true">
            <Monitor colors={colors} />
            <Desk colors={colors} />
            <Character colors={colors} />
          </svg>

          <CodeEditor colors={colors} />
        </motion.div>

        <motion.button
          onClick={handleStart}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="absolute right-20 top-10 rounded-xl border border-slate-500/50 bg-[#2d3139]/80 px-6 py-3 font-bold text-white shadow-xl backdrop-blur-md transition hover:bg-slate-700/80"
        >
          Compilar y Entrar al Sistema {"->"}
        </motion.button>
      </motion.section>
    </AnimatePresence>
  );
}