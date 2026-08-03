"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import MobileIntroScene from "./intro/MobileIntroScene";
import MonitorLandingContent from "./intro/MonitorLandingContent";
import SceneMouseBrand from "./intro/SceneMouseBrand";
import {
  computeSceneLayout,
  isMobileIntroViewport,
  monitorRectToPixels,
  MONITOR_RECT,
  SCENE_SIZE,
} from "./intro/objectCoverLayout";

const SCENE = "/intro-scene.png";
const INTRO_BG = "#0b0f19";

/**
 * Optional desk-monitor hero overlay (legacy / optional entry).
 *
 * @param {{
 *   onComplete?: () => void;
 *   onEnter?: () => void;
 *   onPrimaryCta?: () => void;
 *   onSecondaryCta?: () => void;
 * }} props
 */
export default function IntroSequence({
  onComplete,
  onEnter,
  onPrimaryCta,
  onSecondaryCta,
}) {
  const [layout, setLayout] = useState(null);
  const viewportRef = useRef(null);
  const enteredRef = useRef(false);

  const handleEnter = onEnter ?? onComplete;

  const entrar = useCallback(() => {
    if (enteredRef.current || !handleEnter) return;
    enteredRef.current = true;
    handleEnter();
  }, [handleEnter]);

  const handlePrimary = useCallback(() => {
    onPrimaryCta?.();
    entrar();
  }, [onPrimaryCta, entrar]);

  const handleSecondary = useCallback(() => {
    onSecondaryCta?.();
    entrar();
  }, [onSecondaryCta, entrar]);

  const updateLayout = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const { width: viewportW, height: viewportH } = viewport.getBoundingClientRect();

    if (isMobileIntroViewport(viewportW, viewportH)) {
      setLayout({ isMobile: true });
      return;
    }

    const scene = computeSceneLayout(
      viewportW,
      viewportH,
      SCENE_SIZE.width,
      SCENE_SIZE.height,
    );
    const monitor = monitorRectToPixels(MONITOR_RECT, scene.width, scene.height);

    setLayout({
      isMobile: false,
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

  useLayoutEffect(() => {
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

  return (
    <section
      className="fixed inset-0 z-50 h-[100dvh] min-h-[100dvh] w-full max-w-full overflow-hidden select-none supports-[height:100svh]:h-[100svh] supports-[height:100svh]:min-h-[100svh]"
      style={{ backgroundColor: INTRO_BG }}
      aria-label="SG Labs Studio — Estudio de desarrollo web en Canarias"
    >
      <div ref={viewportRef} className="absolute inset-0 size-full overflow-hidden">
        {layout?.isMobile && (
          <MobileIntroScene onPrimaryCta={handlePrimary} onSecondaryCta={handleSecondary} />
        )}

        {layout && !layout.isMobile && (
          <div
            className="absolute overflow-hidden"
            style={{
              left: layout.offsetX,
              top: layout.offsetY,
              width: layout.scene.width,
              height: layout.scene.height,
            }}
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
              className="absolute z-[2] overflow-hidden border border-black/30 bg-[#0c111c] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] [container-type:size]"
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
              <MonitorLandingContent
                onPrimaryCta={handlePrimary}
                onSecondaryCta={handleSecondary}
              />
            </div>

            {layout.scene.mode === "cover" && (
              <SceneMouseBrand
                sceneWidth={layout.scene.width}
                sceneHeight={layout.scene.height}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
