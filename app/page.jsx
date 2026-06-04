"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroSequence from "../components/IntroSequence";
import PortfolioLayout from "../components/PortfolioLayout";

export default function Page() {
  const [introActive, setIntroActive] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {introActive ? (
        <IntroSequence key="intro-sequence" onComplete={() => setIntroActive(false)} />
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <PortfolioLayout onRestartIntro={() => setIntroActive(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
