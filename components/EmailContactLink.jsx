"use client";

import { useCallback, useState } from "react";

const EMAIL = "samuelgonz2006@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

async function copyEmailToClipboard() {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(EMAIL);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = EMAIL;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!copied) {
    throw new Error("No se pudo copiar el correo");
  }
}

function openMailClient() {
  window.location.href = MAILTO;
}

export default function EmailContactLink({ className, children }) {
  const [status, setStatus] = useState("idle");

  const handleClick = useCallback(async (event) => {
    event.preventDefault();

    try {
      setStatus("copying");
      await copyEmailToClipboard();
      setStatus("copied");
      openMailClient();
    } catch (error) {
      console.error("Error al copiar el correo:", error);
      setStatus("error");
      try {
        openMailClient();
      } catch (fallbackError) {
        console.error("Error al abrir el cliente de correo:", fallbackError);
      }
    } finally {
      window.setTimeout(() => setStatus("idle"), 2500);
    }
  }, []);

  const feedback =
    status === "copied"
      ? "¡Correo copiado al portapapeles!"
      : status === "error"
        ? "No se pudo copiar. Abriendo correo…"
        : status === "copying"
          ? "Copiando…"
          : null;

  return (
    <div className="relative">
      {feedback && (
        <span
          role="status"
          aria-live="polite"
          className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-700/80 bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-100 shadow-lg"
        >
          {feedback}
        </span>
      )}
      <a
        href={MAILTO}
        onClick={handleClick}
        aria-busy={status === "copying"}
        className={className}
      >
        {children}
      </a>
    </div>
  );
}
