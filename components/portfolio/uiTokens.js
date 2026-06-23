/** @typedef {Record<string, string>} UiTokens */

/** @type {UiTokens} */
export const UI = {
  layout: "flex min-h-screen flex-col bg-zinc-950 text-zinc-50 antialiased lg:flex-row",
  sidebar:
    "flex w-full flex-col justify-between border-b border-zinc-800/50 bg-zinc-900 p-6 pb-8 lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:w-80 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-8 lg:pt-8 lg:pb-12",
  sectionEyebrow: "text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm",
  techBadge:
    "cursor-default rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-xs font-medium text-zinc-50 transition duration-300 hover:border-zinc-600",
  contactPrimary:
    "flex w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3.5 text-sm font-semibold text-zinc-50 transition duration-300 hover:bg-zinc-800",
  contactLink:
    "group flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2.5 text-sm font-medium text-zinc-50 transition duration-300 hover:bg-zinc-800",
  main: "mx-auto w-full max-w-5xl flex-1 space-y-12 px-6 py-10 sm:space-y-16 sm:px-10 sm:py-12 lg:px-16 lg:py-20",
  projectCard:
    "group grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 transition duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/40 lg:grid-cols-2",
  projectImage:
    "relative flex min-h-[220px] w-full items-center justify-center overflow-hidden border-b border-zinc-800/60 bg-zinc-950 sm:min-h-[260px] lg:min-h-full lg:border-b-0 lg:border-r",
  projectTag:
    "rounded-full border border-zinc-800 bg-zinc-950/40 px-2.5 py-0.5 text-xs font-medium text-zinc-400",
  btnSecondary:
    "inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800",
  btnPrimary:
    "inline-flex flex-1 items-center justify-center rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-white",
};

/**
 * @param  {...(string | false | null | undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
