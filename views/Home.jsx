"use client";

import { Link } from "react-router-dom";
import { PROFILE, TECH_STACK } from "../data/portfolioProfile";

function StackBlock({ title, items }) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">{title}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 md:text-5xl md:leading-tight">
        Desarrollo Full-Stack con foco en producto, rendimiento y experiencia de usuario.
      </h1>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
        {PROFILE.name} · {PROFILE.role}. {PROFILE.availability}.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/proyectos"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-600 bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
        >
          Ver proyectos
        </Link>
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 px-6 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
        >
          Contactar
        </Link>
      </div>

      <section className="mt-16 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 md:p-10">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">Stack principal</h2>
        <p className="mt-2 max-w-xl text-sm text-zinc-400">
          Tecnologías con las que diseño, construyo y despliego aplicaciones web de extremo a extremo.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <StackBlock title="Frontend" items={TECH_STACK.frontend} />
          <StackBlock title="Backend y datos" items={TECH_STACK.backend} />
        </div>
      </section>
    </div>
  );
}
