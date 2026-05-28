"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroSequence from "../components/IntroSequence";
import HeroSection from "../components/HeroSection";
import BentoGrid from "../components/BentoGrid";

export default function Page() {
  const [introActive, setIntroActive] = useState(true);
  const [view, setView] = useState("home");
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenView = (view) => {
    setView(view);
    if (view !== "proyectos") setActiveProject(null);
  };

  const handleGoHome = () => {
    setView("home");
    setActiveProject(null);
  };

  return (
    <main className="bg-glow relative min-h-dvh text-slate-100 md:h-screen">
      <AnimatePresence mode="wait">
        {introActive ? (
          <IntroSequence key="intro-sequence" onComplete={() => setIntroActive(false)} />
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="contents"
          >
            <div className="mx-auto grid min-h-dvh w-full max-w-7xl grid-cols-1 gap-4 p-4 md:h-[85vh] md:min-h-0 md:grid-cols-12 md:gap-5 md:p-6">
              <HeroSection activeView={view} onOpenView={handleOpenView} />
              <BentoGrid
                activeView={view}
                selectedProject={activeProject}
                onSelectProject={setActiveProject}
                onOpenView={handleOpenView}
                onGoHome={handleGoHome}
              />
            </div>

            <footer className="pointer-events-none px-4 pb-4 pt-1 md:fixed md:inset-x-6 md:bottom-3 md:px-0 md:pb-0">
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 border-t border-white/10 pt-3 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
                <p>&copy; {new Date().getFullYear()} Portfolio Full-Stack.</p>
                <p>Single Screen UI - Arquitectura moderna y UX de alto impacto.</p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
