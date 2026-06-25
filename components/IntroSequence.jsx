"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import CodeEditor from "./intro/CodeEditor";
import {
  computeSceneLayout,
  monitorRectToPixels,
  MONITOR_RECT,
  SCENE_SIZE,
} from "./intro/objectCoverLayout";

const SCENE = "/intro-scene.png";
const INTRO_BG = "#0b0f19";
const ZOOM_DURATION_S = 1.45;
const ENTER_DELAY_MS = 900;

/**
 * @param {{ onComplete?: () => void; onEnter?: () => void }} props
 */
export default function IntroSequence({ onComplete, onEnter }) {
  const [isZooming, setIsZooming] = useState(false);
  const [layout, setLayout] = useState(null);
  const viewportRef = useRef(null);
  const enteringRef = useRef(false);

  const handleEnter = onEnter ?? onComplete;

  const ejecutarEntrada = useCallback(() => {
    if (enteringRef.current || isZooming || !handleEnter) return;
    enteringRef.current = true;
    setIsZooming(true);
    window.setTimeout(() => handleEnter(), ENTER_DELAY_MS);
  }, [handleEnter, isZooming]);

  const updateLayout = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const { width: viewportW, height: viewportH } = viewport.getBoundingClientRect();
    const scene = computeSceneLayout(
      viewportW,
      viewportH,
      SCENE_SIZE.width,
      SCENE_SIZE.height,
    );
    const monitor = monitorRectToPixels(MONITOR_RECT, scene.width, scene.height);

    setLayout({
      scene,
      monitor,
      offsetX: scene.offsetX,
      offsetY: scene.offsetY,
    });
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  useEffect(() => {
    updateLayout();

    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const observer = new ResizeObserver(updateLayout);
    observer.observe(viewport);
    window.addEventListener("resize", updateLayout);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
    };
  }, [updateLayout]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Enter" || event.repeat) return;
      event.preventDefault();
      ejecutarEntrada();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ejecutarEntrada]);

  const zoomOrigin =
    layout &&
    `${((layout.monitor.left + layout.monitor.width / 2) / layout.scene.width) * 100}% ${((layout.monitor.top + layout.monitor.height / 2) / layout.scene.height) * 100}%`;

  return (
    <AnimatePresence>
      <motion.section
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 h-[100dvh] min-h-[100dvh] w-full max-w-full overflow-hidden select-none supports-[height:100svh]:h-[100svh] supports-[height:100svh]:min-h-[100svh]"
        style={{ backgroundColor: INTRO_BG }}
        aria-label="Inicializando portfolio"
      >
        <div ref={viewportRef} className="absolute inset-0 size-full overflow-hidden">
          {layout && (
            <motion.div
              className="absolute overflow-hidden"
              style={{
                left: layout.offsetX,
                top: layout.offsetY,
                width: layout.scene.width,
                height: layout.scene.height,
                transformOrigin: zoomOrigin || "50% 38%",
              }}
              animate={
                isZooming
                  ? { scale: 10, x: 0, y: 0, opacity: 0 }
                  : { scale: 1, x: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: ZOOM_DURATION_S, ease: [0.2, 0.82, 0.2, 1] }}
            >
              <div className="relative size-full">
                <Image
                  src={SCENE}
                  alt=""
                  fill
                  priority
                  draggable={false}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div
                className="@container absolute z-[2] overflow-hidden border border-black/30 bg-[#0b1020] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] [container-type:inline-size]"
                style={{
                  left: layout.monitor.left,
                  top: layout.monitor.top,
                  width: layout.monitor.width,
                  height: layout.monitor.height,
                  borderRadius: Math.max(6, layout.monitor.width * 0.022),
                  transform: layout.monitor.rotate
                    ? `rotate(${layout.monitor.rotate}deg)`
                    : undefined,
                  transformOrigin: "center center",
                }}
              >
                <CodeEditor />
              </div>

            </motion.div>
          )}

          {layout && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-[max(1rem,env(safe-area-inset-bottom))]">
              <motion.button
                type="button"
                onClick={ejecutarEntrada}
                disabled={isZooming}
                whileTap={{ scale: 0.97 }}
                animate={{ opacity: isZooming ? 0 : 1 }}
                transition={{ duration: isZooming ? ZOOM_DURATION_S * 0.35 : 0.2 }}
                className="pointer-events-auto group flex w-full max-w-[min(100%,420px)] items-center justify-center gap-2 rounded-full border border-white/10 bg-[#121820]/90 px-5 py-2.5 text-[11px] font-semibold tracking-tight text-white shadow-[0_14px_40px_rgba(0,0,0,0.75)] backdrop-blur-sm transition-[transform,background-color,border-color] duration-300 hover:scale-105 hover:border-white/20 hover:bg-[#1a2230]/95 disabled:pointer-events-none disabled:opacity-60 sm:gap-2.5 sm:px-9 sm:py-4 sm:text-sm md:text-[15px]"
              >
                <span className="sm:hidden">Entrar al Sistema</span>
                <span className="hidden sm:inline">Pulsar Enter y Entrar al Sistema</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </motion.button>
            </div>
          )}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
