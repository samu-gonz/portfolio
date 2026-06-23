"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const COMMAND = "samuelgonz --init-portfolio";
const PROMPT = "guest@portfolio:~$ ";
const CHAR_DELAY_MS = 58;
const ENTER_FLASH_MS = 220;
const ENTER_HOLD_MS = 380;
const FADE_MS = 520;

/**
 * @param {{ onComplete?: () => void }} props
 */
export default function TerminalSplash({ onComplete }) {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState("typing");
  const [showResponse, setShowResponse] = useState(false);
  const [cursorBright, setCursorBright] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (phase !== "typing") return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setTyped(COMMAND);
      const timer = window.setTimeout(() => setPhase("enter"), 120);
      return () => window.clearTimeout(timer);
    }

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTyped(COMMAND.slice(0, index));

      if (index >= COMMAND.length) {
        window.clearInterval(interval);
        window.setTimeout(() => setPhase("enter"), 280);
      }
    }, CHAR_DELAY_MS);

    return () => window.clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "enter") return undefined;

    setCursorBright(true);
    const flashTimer = window.setTimeout(() => setCursorBright(false), ENTER_FLASH_MS);
    const responseTimer = window.setTimeout(() => setShowResponse(true), ENTER_FLASH_MS + 80);
    const exitTimer = window.setTimeout(() => setPhase("exiting"), ENTER_FLASH_MS + ENTER_HOLD_MS);

    return () => {
      window.clearTimeout(flashTimer);
      window.clearTimeout(responseTimer);
      window.clearTimeout(exitTimer);
    };
  }, [phase]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Inicializando portfolio"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exiting" ? 0 : 1 }}
      transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (phase === "exiting") onComplete?.();
      }}
    >
      <div
        className={`w-full max-w-2xl font-mono text-sm leading-relaxed sm:text-base ${
          cursorBright ? "brightness-125" : ""
        } transition-[filter] duration-150`}
      >
        <p className="text-emerald-400">
          <span className="text-zinc-500">{PROMPT}</span>
          {typed}
          {phase !== "exiting" && (
            <span
              aria-hidden
              className={`ml-0.5 inline-block text-emerald-300 ${
                phase === "enter" ? "animate-pulse" : "terminal-cursor"
              }`}
            >
              ▊
            </span>
          )}
        </p>

        {showResponse && (
          <p className="mt-2 text-zinc-500">
            <span className="text-emerald-500/90">✓</span> Entorno listo. Cargando portfolio...
          </p>
        )}
      </div>
    </motion.div>
  );
}
