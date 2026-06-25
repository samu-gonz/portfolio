"use client";

import { useEffect, useState } from "react";
import IntroSequence from "../components/IntroSequence";
import PortfolioLayout from "../components/PortfolioLayout";

const INTRO_COMPLETE_KEY = "portfolio-intro-complete";
const INTRO_BG = "#0b0f19";

function hasCompletedIntro() {
  return sessionStorage.getItem(INTRO_COMPLETE_KEY) === "true";
}

export default function Page() {
  const [introReady, setIntroReady] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setShowIntro(!hasCompletedIntro());
    setIntroReady(true);
  }, []);

  useEffect(() => {
    if (!introReady) return undefined;

    if (showIntro) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [introReady, showIntro]);

  const handleIntroComplete = () => {
    sessionStorage.setItem(INTRO_COMPLETE_KEY, "true");
    setShowIntro(false);
  };

  const handleRestartIntro = () => {
    sessionStorage.removeItem(INTRO_COMPLETE_KEY);
    setShowIntro(true);
  };

  return (
    <>
      <PortfolioLayout onRestartIntro={handleRestartIntro} />
      {!introReady && (
        <div
          className="fixed inset-0 z-50 h-[100dvh] w-full supports-[height:100svh]:h-[100svh]"
          style={{ backgroundColor: INTRO_BG }}
          aria-hidden
        />
      )}
      {introReady && showIntro && <IntroSequence onComplete={handleIntroComplete} />}
    </>
  );
}
