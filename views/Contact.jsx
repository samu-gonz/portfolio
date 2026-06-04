"use client";

import { PROFILE } from "../data/portfolioProfile";

const LINKS = [
  { href: PROFILE.links.linkedin, label: "LinkedIn" },
  { href: PROFILE.links.github, label: "GitHub" },
  { href: PROFILE.links.email, label: "Correo electrónico" },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">Contacto</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
        Hablemos de tu proyecto
      </h1>
      <p className="mt-4 max-w-xl text-sm text-zinc-400">
        Cuéntame tu idea y te responderé con una propuesta clara y accionable.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <form className="space-y-5 rounded-2xl border border-zinc-800/60 bg-zinc-950 p-6 md:p-8">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-300">Nombre</span>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-zinc-600"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-300">Email</span>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-zinc-600"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-300">Mensaje</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Describe tu proyecto o consulta"
              className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-zinc-600"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg border border-zinc-600 bg-zinc-100 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white sm:w-auto sm:px-8"
          >
            Enviar mensaje
          </button>
        </form>

        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">Enlaces</p>
            <ul className="mt-4 space-y-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={PROFILE.cvUrl}
            className="inline-flex w-fit items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            Descargar CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
