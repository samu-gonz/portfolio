"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PROFILE } from "../../data/portfolioProfile";

/**
 * @param {{
 *   open: boolean;
 *   onClose: () => void;
 * }} props
 */
export default function ContactModal({ open, onClose }) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector("input")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent("Solicitud de análisis gratuito — SG Labs Studio");
    const body = encodeURIComponent(
      [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Negocio: ${business || "—"}`,
        "",
        message || "Me gustaría solicitar un análisis gratuito de mi presencia digital.",
      ].join("\n"),
    );

    window.location.href = `${PROFILE.links.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[1] w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-950 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
      >
        <div className="border-b border-zinc-800/80 px-5 py-4 sm:px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            Contacto
          </p>
          <h2 id={titleId} className="mt-1 text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
            Solicitar análisis gratuito
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
            Cuéntanos sobre tu negocio y te respondemos con una propuesta clara, sin compromiso.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 px-5 py-5 sm:px-6">
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-400">Nombre</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-400">Email</span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
              placeholder="tu@empresa.com"
              autoComplete="email"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-400">Negocio / sector</span>
            <input
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
              placeholder="Ej. restaurante, clínica, alojamiento…"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-medium text-zinc-400">Mensaje</span>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
              placeholder="¿Qué quieres mejorar en tu web o captura de clientes?"
            />
          </label>

          <div className="flex flex-col-reverse gap-2 pt-1 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#041018] shadow-[0_10px_28px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
