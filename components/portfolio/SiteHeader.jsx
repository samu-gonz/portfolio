"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ANALYSIS_CTA } from "../../data/agencyProcess";
import { logoFont } from "../../lib/fonts";
import TerminalIcon from "./TerminalIcon";
import { UI } from "./uiTokens";

const NAV = [
  { id: "pilares", label: "Beneficios" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "estudio", label: "Estudio" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const hrefFor = (id) => (pathname === "/" ? `#${id}` : `/#${id}`);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="SG Labs Studio — inicio" className="inline-flex items-center gap-2.5">
          <TerminalIcon className="h-8 w-8 text-white" />
          <span className={`${logoFont.className} text-sm font-bold tracking-[0.16em] text-white`}>
            SG LABS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Secciones">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={hrefFor(item.id)}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <a href={hrefFor("empezar")} className={UI.ctaPrimary}>
              {ANALYSIS_CTA}
            </a>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-white/10 px-4 py-4 lg:hidden" aria-label="Secciones">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={hrefFor(item.id)}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/[0.05]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={hrefFor("empezar")}
                onClick={() => setOpen(false)}
                className={`${UI.ctaPrimary} w-full`}
              >
                {ANALYSIS_CTA}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
