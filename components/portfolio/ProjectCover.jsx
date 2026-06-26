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
  const [detectedFormat, setDetectedFormat] = useState(
    coverFormat === "auto" ? null : coverFormat,
  );

  const showPlaceholder = !image || failed;
  const isPortrait = detectedFormat === "portrait";

  if (showPlaceholder) {
    return <ProjectCoverPlaceholder title={title} isPortrait={coverFormat === "portrait"} />;
  }

  const handleLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth <= 0 || naturalHeight <= 0) return;

    if (coverFormat === "auto") {
      setDetectedFormat(naturalHeight > naturalWidth ? "portrait" : "landscape");
    }
  };

  return (
    <div
      className={cn(
        "overflow-hidden leading-none",
        isPortrait && "flex justify-center px-4 py-5 sm:px-6 sm:py-6",
      )}
    >
      <img
        src={image}
        alt={`Captura de ${title}`}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={() => setFailed(true)}
        className={cn(
          "block transition duration-500 ease-out group-hover:scale-[1.02]",
          isPortrait
            ? "h-auto w-full max-w-[300px] max-h-[min(68vh,480px)] object-top"
            : "h-auto w-full object-top",
        )}
      />
    </div>
  );
}

/**
 * @param {{ title: string; isPortrait?: boolean }} props
 */
function ProjectCoverPlaceholder({ title, isPortrait = false }) {
  const initials = title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0f19] via-indigo-950/30 to-zinc-950",
        isPortrait ? "min-h-[320px] px-4 py-8" : "min-h-[200px] py-10",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.18),transparent_60%)]"
      />

      <div className="relative z-[1] flex flex-col items-center gap-3">
        <TerminalIcon className="h-11 w-11 text-white/90" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          SG Labs Studio
        </span>
        <span className="text-xl font-bold tracking-tight text-white/90">{initials}</span>
      </div>
    </div>
  );
}

/**
 * @param {"portrait" | "landscape" | "auto"} coverFormat
 */
export function projectCoverFigureClass(coverFormat = "landscape") {
  if (coverFormat === "portrait") {
    return "bg-zinc-950/40";
  }

  return "";
}
