"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { hasCookieDecision, saveCookieDecision } from "./cookieChoice";

const CHOICE_BUTTON =
  "inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.12] sm:min-w-[7.5rem] sm:flex-none";

export default function CookieNotice() {
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasCookieDecision());
  }, []);

  useEffect(() => {
    const node = bannerRef.current;
    if (!visible || !node) {
      document.documentElement.style.setProperty("--cookie-banner-offset", "0px");
      return undefined;
    }

    const apply = () => {
      document.documentElement.style.setProperty("--cookie-banner-offset", `${node.offsetHeight}px`);
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);

    return () => {
      observer.disconnect();
      document.documentElement.style.setProperty("--cookie-banner-offset", "0px");
    };
  }, [visible]);

  if (!visible) return null;

  const choose = (choice) => {
    saveCookieDecision(choice);
    setVisible(false);
  };

  return (
    <div
      ref={bannerRef}
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#070b16]/95 shadow-[0_-16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 lg:px-8">
        <p className="text-sm leading-relaxed text-zinc-300">
          Esta web no instala cookies de análisis ni de publicidad. Aceptar o rechazar solo guarda esa
          elección en tu navegador durante seis meses.
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex gap-2">
            <button type="button" className={CHOICE_BUTTON} onClick={() => choose("accepted")}>
              Aceptar
            </button>
            <button type="button" className={CHOICE_BUTTON} onClick={() => choose("rejected")}>
              Rechazar
            </button>
          </div>
          <Link
            href="/cookies"
            className="inline-flex min-h-11 items-center justify-center px-2 text-sm font-medium text-violet-200 underline-offset-4 hover:underline"
          >
            Política de cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
