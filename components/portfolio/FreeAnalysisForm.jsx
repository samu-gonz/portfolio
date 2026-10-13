"use client";

import { useState } from "react";
import Link from "next/link";
import { PROFILE, gmailComposeUrl } from "../../data/portfolioProfile";
import { UI } from "./uiTokens";

const FIELD_CLASS =
  "w-full rounded-xl border border-white/10 bg-[#070b14] px-3.5 py-3 text-base text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/30";

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
  const [opened, setOpened] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = gmailComposeUrl({
      subject: "Solicitud de análisis gratuito — SG Labs Studio",
      body: [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Negocio / sector: ${business}`,
        "",
        message || "Me gustaría solicitar un análisis gratuito de mi captación online.",
      ].join("\n"),
    });

    setOpened(true);
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    if (!popup) window.location.assign(url);
    onSubmitted?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-zinc-400">Nombre completo</span>
        <input
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={FIELD_CLASS}
          placeholder="Tu nombre y apellidos"
          autoComplete="name"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-zinc-400">Correo electrónico</span>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={FIELD_CLASS}
          placeholder="tu@empresa.com"
          autoComplete="email"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-zinc-400">Nombre del negocio / sector</span>
        <input
          required
          name="business"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className={FIELD_CLASS}
          placeholder="Ej. turismo rural, restauración, clínica…"
          autoComplete="organization"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-zinc-400">Mensaje / Web actual (opcional)</span>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${FIELD_CLASS} resize-y`}
          placeholder="Tu web actual o qué te gustaría mejorar"
        />
      </label>

      {opened && (
        <p role="status" className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-3 text-sm leading-relaxed text-emerald-100">
          Se abrió Gmail con la solicitud preparada. Si no aparece, escríbenos a {PROFILE.email}.
        </p>
      )}

      <div className="flex flex-col gap-2 pt-1">
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
          {showCancel && (
            <button
              type="button"
              onClick={onCancel}
              className={`${UI.ctaSecondary} sm:flex-1`}
            >
              Cancelar
            </button>
          )}
          <button type="submit" className={`${UI.ctaPrimary} w-full sm:flex-1`}>
            Solicitar Análisis Gratuito
          </button>
        </div>
        <p className="text-center text-xs leading-relaxed text-zinc-500">
          Al enviar se abre Gmail con el mensaje listo.{" "}
          <Link href="/privacidad" className="text-zinc-400 underline-offset-2 hover:text-white hover:underline">
            Política de privacidad
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
