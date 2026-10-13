/** @typedef {Record<string, string>} UiTokens */

/** @type {UiTokens} */
export const UI = {
  layout:
    "mx-auto flex min-h-screen w-full max-w-[120rem] flex-col bg-zinc-950 text-zinc-50 antialiased lg:flex-row",
  sidebar:
    "flex w-full flex-col justify-between border-t border-zinc-800/50 bg-zinc-900 p-6 pb-8 lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:w-80 lg:shrink-0 lg:overflow-y-auto lg:border-t-0 lg:border-b-0 lg:border-r lg:px-8 lg:pt-8 lg:pb-12 3xl:w-96 3xl:px-10 3xl:pt-10 3xl:pb-14",
  sectionEyebrow: "text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/80",
  ctaPrimary:
    "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(99,102,241,0.35)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(56,189,248,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 active:translate-y-0",
  ctaSecondary:
    "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-zinc-100 transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:translate-y-0",
  glassCard:
    "glass-card rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_22px_48px_rgba(99,102,241,0.14)]",
  sidebarBrandTitle: "text-sm font-semibold tracking-tight text-zinc-100 sm:text-base 3xl:text-lg",
  sidebarBrandSubtitle: "mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm 3xl:text-[0.9375rem]",
  techDescription: "mt-1.5 text-xs leading-relaxed text-zinc-500 sm:text-sm",
  techBadgeList:
    "flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden",
  techBadge:
    "shrink-0 cursor-default rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-3 py-1.5 text-xs font-medium text-zinc-100 transition duration-300 hover:border-zinc-600 hover:bg-zinc-900/80",
  contactPanel:
    "rounded-2xl border border-zinc-700/50 bg-zinc-950/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5 lg:pb-6 xl:p-6 3xl:p-7",
  contactCvPrimary:
    "flex w-full items-center justify-center rounded-xl border border-zinc-500/40 bg-zinc-900/90 px-4 py-3.5 text-sm font-semibold text-zinc-50 shadow-sm transition duration-300 hover:border-zinc-400/60 hover:bg-zinc-800",
  contactLink:
    "group flex items-center justify-between gap-3 rounded-xl border border-zinc-800/80 bg-zinc-950/50 px-4 py-2.5 text-sm font-medium text-zinc-300 transition duration-300 hover:border-zinc-600 hover:bg-zinc-800/80 hover:text-zinc-50",
  main: "w-full min-w-0 flex-1 space-y-10 px-6 py-8 sm:space-y-14 sm:px-10 sm:py-12 lg:px-10 lg:py-16 xl:space-y-16 xl:px-12 xl:py-20 2xl:space-y-20 2xl:px-14 2xl:py-20 3xl:space-y-24 3xl:px-16 3xl:py-24",
  projectCard:
    "glass-card group flex overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_22px_48px_rgba(99,102,241,0.14)]",
  projectCardLandscape: "flex-col",
  projectCardPortrait:
    "flex flex-col lg:grid lg:grid-cols-[clamp(280px,36%,370px)_minmax(0,1fr)] lg:items-stretch 3xl:grid-cols-[clamp(300px,34%,420px)_minmax(0,1fr)]",
  projectImage: "relative m-0 shrink-0 overflow-hidden",
  projectImageLandscape: "w-full border-b border-zinc-800/50",
  projectImagePortrait:
    "relative min-h-[360px] w-full max-w-[380px] mx-auto border-b border-zinc-800/50 bg-[#ececec] sm:min-h-[400px] lg:mx-0 lg:h-full lg:min-h-0 lg:w-full lg:max-w-none lg:border-b-0 lg:border-r lg:border-zinc-800/50",
  projectTag:
    "rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-zinc-300",
  btnSecondary:
    "inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:border-white/30 hover:bg-white/[0.08] sm:w-auto sm:min-w-[10.5rem]",
  btnPrimary:
    "inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white transition hover:border-violet-300/40 hover:bg-white/[0.1] sm:w-auto sm:min-w-[10.5rem]",
};

/**
 * @param {"portrait" | "landscape" | "auto"} coverFormat
 */
export function projectCardClass(coverFormat = "landscape") {
  return cn(
    UI.projectCard,
    coverFormat === "portrait" ? UI.projectCardPortrait : UI.projectCardLandscape,
  );
}

/**
 * @param {"portrait" | "landscape" | "auto"} coverFormat
 */
export function projectCoverFigureClass(coverFormat = "landscape") {
  return cn(
    UI.projectImage,
    coverFormat === "portrait" ? UI.projectImagePortrait : UI.projectImageLandscape,
  );
}

/**
 * @param  {...(string | false | null | undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
