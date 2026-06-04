"use client";

import { NavLink } from "react-router-dom";
import { PROFILE } from "../data/portfolioProfile";

const NAV_ITEMS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
];

function navClass({ isActive }) {
  return [
    "text-sm font-medium tracking-wide transition-colors duration-300",
    isActive ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-200",
  ].join(" ");
}

export default function Navbar({ onLogout }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <NavLink to="/" className="group shrink-0">
          <p className="text-sm font-semibold tracking-tight text-zinc-50 transition-colors group-hover:text-zinc-200 md:text-base">
            {PROFILE.name}
          </p>
          <p className="text-[11px] text-zinc-500">{PROFILE.role}</p>
        </NavLink>

        <nav className="flex flex-wrap items-center justify-end gap-5 md:gap-8">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={navClass}>
              {label}
            </NavLink>
          ))}
          {onLogout && (
            <button
              type="button"
              onClick={onLogout}
              className="hidden text-xs text-zinc-600 transition-colors hover:text-zinc-400 md:inline"
            >
              Intro
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
