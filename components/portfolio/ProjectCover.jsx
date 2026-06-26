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
    <div className="overflow-hidden">
      <img
        src={image}
        alt={`Captura de ${title}`}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={() => setFailed(true)}
        className={cn(
          "block w-full transition duration-500 ease-out group-hover:scale-[1.03]",
          isPortrait
            ? "h-auto max-h-[min(72vh,520px)] object-top"
            : "h-auto max-h-[300px] object-top sm:max-h-[320px]",
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
        isPortrait ? "min-h-[360px] max-w-[min(100%,340px)]" : "min-h-[220px] max-h-[300px]",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.18),transparent_60%)]"
      />

      <div className="relative z-[1] flex flex-col items-center gap-3 px-6 py-10">
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
    return UI_FIGURE_PORTRAIT;
  }

  return UI_FIGURE_LANDSCAPE;
}

const UI_FIGURE_LANDSCAPE =
  "w-full lg:w-[min(52%,560px)] lg:shrink-0";

const UI_FIGURE_PORTRAIT =
  "w-full max-w-[min(100%,340px)] mx-auto lg:mx-0 lg:w-[min(38%,300px)] lg:shrink-0";
