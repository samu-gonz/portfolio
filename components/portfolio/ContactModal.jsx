"use client";

import { useEffect, useId, useRef } from "react";
import { FREE_ANALYSIS } from "../../data/agencyProcess";
import FreeAnalysisForm from "./FreeAnalysisForm";

/**
 * @param {{
 *   open: boolean;
 *   onClose: () => void;
 * }} props
 */
export default function ContactModal({ open, onClose }) {
  const titleId = useId();
  const dialogRef = useRef(null);

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
        <div className="max-h-[min(92dvh,820px)] overflow-y-auto px-5 py-5 sm:px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            {FREE_ANALYSIS.eyebrow}
          </p>
          <h2 id={titleId} className="mt-1 text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
            {FREE_ANALYSIS.title}
          </h2>
          <p className="mt-2 mb-5 text-sm leading-relaxed text-zinc-400">{FREE_ANALYSIS.description}</p>
          <FreeAnalysisForm showCancel onCancel={onClose} onSubmitted={onClose} />
        </div>
      </div>
    </div>
  );
}
