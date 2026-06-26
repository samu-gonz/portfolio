"use client";

import { useState } from "react";
import TerminalIcon from "./TerminalIcon";
import { cn } from "./uiTokens";

/**
 * @param {{
 *   image?: string | null;
 *   title: string;
 *   coverFormat?: "portrait" | "landscape" | "auto";
 * }} props
 */
export default function ProjectCover({ image, title, coverFormat = "landscape" }) {
  const [failed, setFailed] = useState(false);
  const [detectedFormat, setDetectedFormat] = useState(null);

  const showPlaceholder = !image || failed;
  const isPortrait =
    coverFormat === "portrait" ||
    (coverFormat === "auto" && detectedFormat === "portrait");

  if (showPlaceholder) {
    return <ProjectCoverPlaceholder title={title} />;
  }

  const handleLoad = (event) => {
    if (coverFormat !== "auto") return;

    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth > 0 && naturalHeight > 0) {
      setDetectedFormat(naturalHeight > naturalWidth ? "portrait" : "landscape");
    }
  };

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        isPortrait
          ? "min-h-[280px] bg-gradient-to-br from-[#0b0f19] via-indigo-950/25 to-zinc-900 sm:min-h-[320px]"
          : "min-h-[220px] bg-gradient-to-br from-[#0b0f19] via-zinc-900 to-zinc-950 sm:min-h-[260px]",
      )}
    >
      {isPortrait && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover object-top opacity-35 blur-2xl saturate-150"
        />
      )}

      {!isPortrait && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.08),transparent_50%)]"
        />
      )}

      <div
        className={cn(
          "relative z-[1] overflow-hidden transition duration-500 ease-out",
          "group-hover:scale-[1.03] group-hover:shadow-[0_28px_70px_rgba(0,0,0,0.65)]",
          isPortrait
            ? "w-[min(68%,240px)] rounded-[1.35rem] border border-white/10 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.55)] ring-1 ring-white/5"
            : "w-[min(100%,540px)] rounded-xl border border-white/10 bg-zinc-950/90 shadow-[0_16px_44px_rgba(0,0,0,0.5)] ring-1 ring-white/5",
        )}
      >
        {isPortrait && (
          <div className="flex h-5 items-center justify-center border-b border-white/5 bg-zinc-900/95">
            <span className="h-1 w-9 rounded-full bg-white/15" />
          </div>
        )}

        <img
          src={image}
          alt={`Captura de ${title}`}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={() => setFailed(true)}
          className={cn(
            "block w-full bg-zinc-950",
            isPortrait
              ? "h-auto max-h-[min(52vh,380px)] object-cover object-top"
              : "aspect-[1024/447] object-contain object-center",
          )}
        />
      </div>
    </div>
  );
}

/**
 * @param {{ title: string }} props
 */
function ProjectCoverPlaceholder({ title }) {
  const initials = title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex min-h-[240px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0f19] via-indigo-950/30 to-zinc-950 sm:min-h-[280px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.18),transparent_60%)]"
      />

      <div className="relative z-[1] flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/70 px-10 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/5 transition duration-500 ease-out group-hover:scale-[1.03]">
        <TerminalIcon className="h-12 w-12 text-white/90" />
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          SG Labs Studio
        </span>
        <span className="text-2xl font-bold tracking-tight text-white/90">{initials}</span>
        <span className="max-w-[18ch] text-center text-xs leading-relaxed text-zinc-500">
          Portada en preparación
        </span>
      </div>
    </div>
  );
}
