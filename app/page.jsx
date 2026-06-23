"use client";

import { useEffect, useState } from "react";
import IntroSequence from "../components/IntroSequence";
import PortfolioLayout from "../components/PortfolioLayout";

const INTRO_COMPLETE_KEY = "portfolio-intro-complete";

function hasCompletedIntro() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(INTRO_COMPLETE_KEY) === "true";
}

export default function Page() {
  const [loading, setLoading] = useState(() => !hasCompletedIntro());

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
    return undefined;
  }, [loading]);

  const handleIntroComplete = () => {
    sessionStorage.setItem(INTRO_COMPLETE_KEY, "true");
    setLoading(false);
  };

  const handleRestartIntro = () => {
    sessionStorage.removeItem(INTRO_COMPLETE_KEY);
    setLoading(true);
  };

  return (
    <>
      <PortfolioLayout onRestartIntro={handleRestartIntro} />
      {loading && <IntroSequence onComplete={handleIntroComplete} />}
    </>
  );
}
