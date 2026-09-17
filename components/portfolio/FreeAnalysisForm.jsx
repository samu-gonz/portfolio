"use client";

import { useState } from "react";
import { PROFILE } from "../../data/portfolioProfile";

/**
 * @param {{
 *   onSubmitted?: () => void;
 *   showCancel?: boolean;
 *   onCancel?: () => void;
 * }} props
 */
export default function FreeAnalysisForm({ onSubmitted, showCancel = false, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent("Solicitud de análisis gratuito — SG Labs Studio");
    const body = encodeURIComponent(
      [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Negocio: ${business || "—"}`,
        "",
        message ||
          "Me gustaría solicitar un análisis gratuito y conocer la oferta para primeros clientes.",
      ].join("\n"),
    );

    window.location.href = `${PROFILE.links.email}?subject=${subject}&body=${body}`;
    onSubmitted?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
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

      <div className="flex flex-col gap-2 pt-1">
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
          {showCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100 sm:flex-1"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#041018] shadow-[0_10px_28px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:flex-1"
          >
            Enviar solicitud
          </button>
        </div>
        <a
          href={PROFILE.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-5 py-2.5 text-center text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
        >
          Preferimos WhatsApp
        </a>
      </div>
    </form>
  );
}
