"use client";

import { PORTFOLIO_UI } from "../../data/portfolioProfile";

/**
 * @param {{ onRestartIntro?: () => void }} props
 */
export default function RestartIntroControl({ onRestartIntro }) {
  if (!onRestartIntro) return null;

  const handleRestart = () => {
    try {
      onRestartIntro();
    } catch (error) {
      console.error("Error al reiniciar la intro:", error);
    }
  };

  return (
    <footer className="pt-2">
      <button
        type="button"
        onClick={handleRestart}
        className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
      >
        {PORTFOLIO_UI.restartIntro}
      </button>
    </footer>
  );
}
