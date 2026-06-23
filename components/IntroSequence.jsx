"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import CodeEditor from "./intro/CodeEditor";
import {
  computeCoverSize,
  monitorRectToPixels,
  MONITOR_RECT,
  SCENE_SIZE,
} from "./intro/objectCoverLayout";

const SCENE = "/intro-scene.png";

const HAND_PRESS_Y = 34;
const HAND_CLIP = "polygon(74% 66%, 100% 66%, 100% 100%, 76% 100%)";
const ZOOM_DURATION_S = 1.45;
const ENTER_DELAY_MS = 900;

/**
 * @param {{ onComplete?: () => void; onEnter?: () => void }} props
 */
export default function IntroSequence({ onComplete, onEnter }) {
  const [isZooming, setIsZooming] = useState(false);
  const [isHandAnimating, setIsHandAnimating] = useState(false);
  const [layout, setLayout] = useState(null);
  const viewportRef = useRef(null);
  const enteringRef = useRef(false);
  const handControls = useAnimation();

  const handleEnter = onEnter ?? onComplete;

  const ejecutarEntrada = useCallback(async () => {
    if (enteringRef.current || isZooming || !handleEnter) return;
    enteringRef.current = true;

    setIsHandAnimating(true);
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await handControls.start({
      y: [0, HAND_PRESS_Y, 0],
      transition: { duration: 0.58, ease: [0.33, 0, 0.2, 1], times: [0, 0.48, 1] },
    });
    setIsHandAnimating(false);

    setIsZooming(true);
    window.setTimeout(() => handleEnter(), ENTER_DELAY_MS);
  }, [handleEnter, handControls, isZooming]);

  const updateLayout = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const { width: viewportW, height: viewportH } = viewport.getBoundingClientRect();
    const scene = computeCoverSize(
      viewportW,
      viewportH,
      SCENE_SIZE.width,
      SCENE_SIZE.height,
    );
    const monitor = monitorRectToPixels(MONITOR_RECT, scene.width, scene.height);

    setLayout({
      scene,
      monitor,
      offsetX: (viewportW - scene.width) / 2,
      offsetY: (viewportH - scene.height) / 2,
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
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
        className="fixed inset-0 z-50 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#0b0f19] select-none"
        aria-label="Inicializando portfolio"
      >
        <div ref={viewportRef} className="relative h-full w-full overflow-hidden">
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
              <Image
                src={SCENE}
                alt=""
                width={SCENE_SIZE.width}
                height={SCENE_SIZE.height}
                priority
                draggable={false}
                className="block h-full w-full"
              />

              <div
                className="absolute z-[2] overflow-hidden border border-black/30 bg-[#0b1020] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] [container-type:inline-size]"
                style={{
                  left: layout.monitor.left,
                  top: layout.monitor.top,
                  width: layout.monitor.width,
                  height: layout.monitor.height,
                  borderRadius: Math.max(6, layout.monitor.width * 0.022),
                }}
              >
                <CodeEditor />
              </div>

              <motion.div
                animate={handControls}
                initial={{ y: 0 }}
                className={`pointer-events-none absolute inset-0 z-[6] bg-cover bg-center bg-no-repeat ${
                  isHandAnimating ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${SCENE})`,
                  clipPath: HAND_CLIP,
                  transformOrigin: "88% 92%",
                }}
                aria-hidden
              />

              <div className="absolute inset-x-0 bottom-[19%] z-10 flex justify-center px-4 sm:px-6">
                <motion.button
                  type="button"
                  onClick={ejecutarEntrada}
                  disabled={isZooming}
                  whileTap={{ scale: 0.97 }}
                  className="group flex w-full max-w-[min(100%,420px)] items-center justify-center gap-2 rounded-full border border-white/10 bg-[#121820]/90 px-6 py-3 text-xs font-semibold tracking-tight text-white shadow-[0_14px_40px_rgba(0,0,0,0.75)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-[#1a2230]/95 disabled:pointer-events-none disabled:opacity-60 sm:gap-2.5 sm:px-9 sm:py-4 sm:text-sm md:text-[15px]"
                >
                  Pulsar Enter y Entrar al Sistema
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
