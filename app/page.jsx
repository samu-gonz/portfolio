"use client";

import { useEffect, useState } from "react";
import IntroSequence from "../components/IntroSequence";
import PortfolioLayout from "../components/PortfolioLayout";

export default function Page() {
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <PortfolioLayout onRestartIntro={() => setLoading(true)} />
      {loading && <IntroSequence onComplete={() => setLoading(false)} />}
    </>
  );
}
