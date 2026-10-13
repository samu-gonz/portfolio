"use client";

import { useEffect, useState } from "react";
import { UI } from "./uiTokens";

export default function MobileStickyCta() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const form = document.getElementById("empezar");
    if (!hero || !form) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const pastHero = hero.getBoundingClientRect().bottom < 72;
      const formNear = form.getBoundingClientRect().top < window.innerHeight * 0.82;
      setHide(!pastHero || formNear);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#05070f]/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 lg:hidden ${
        hide ? "pointer-events-none translate-y-full" : "translate-y-0"
      }`}
    >
      <a href="#empezar" className={`${UI.ctaPrimary} w-full`}>
        Solicitar Análisis Gratuito
      </a>
    </div>
  );
}
