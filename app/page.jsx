"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroSequence from "../components/IntroSequence";
import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function Page() {
  const [introActive, setIntroActive] = useState(true);

  return (
    <main className="min-h-screen bg-[#0b0f14]">
      <AnimatePresence mode="wait">
        {introActive ? (
          <IntroSequence key="intro-sequence" onComplete={() => setIntroActive(false)} />
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="min-h-screen"
          >
            <DashboardLayout onLogout={() => setIntroActive(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
