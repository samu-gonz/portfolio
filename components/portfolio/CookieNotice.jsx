"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "sglabs-cookie-info";
const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 180;

function isNoticeCurrent(raw) {
  if (!raw) return false;

  try {
    const saved = JSON.parse(raw);
    return typeof saved.expires === "number" && saved.expires > Date.now();
  } catch {
    return false;
  }
}

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!isNoticeCurrent(window.localStorage.getItem(STORAGE_KEY)));
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ expires: Date.now() + SIX_MONTHS_MS }),
    );
    setVisible(false);
  };

  return (
    <div role="region" aria-label="Información sobre cookies" className="border-b border-white/10 bg-[#070b16]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 lg:px-8">
        <p className="text-sm leading-relaxed text-zinc-300">
          Esta web no instala cookies de análisis ni de publicidad. Si cierras este aviso, solo
          recordamos esa preferencia en tu navegador durante seis meses.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
          >
            Entendido
          </button>
          <Link
            href="/cookies"
            className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium text-violet-200 underline-offset-4 hover:underline"
          >
            Política de cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
