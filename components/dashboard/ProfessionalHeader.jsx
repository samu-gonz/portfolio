import { PROFILE } from "../../data/portfolioProfile";

export default function ProfessionalHeader({ onLogout }) {
  return (
    <header className="shrink-0 border-b border-slate-800/80 bg-[#0a0e14]/95 px-4 py-4 md:px-8 md:py-5">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white md:text-xl">
            {PROFILE.name}
            <span className="text-slate-500"> · </span>
            <span className="text-slate-300">{PROFILE.role}</span>
          </p>
          <button
            type="button"
            onClick={onLogout}
            className="mt-2 text-xs text-slate-500 underline-offset-2 transition-colors hover:text-cyan-400 hover:underline sm:hidden"
          >
            Volver al intro
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 md:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {PROFILE.availability}
          </span>
          <button
            type="button"
            onClick={onLogout}
            className="hidden text-xs text-slate-500 transition-colors hover:text-slate-300 sm:inline"
          >
            ← Volver
          </button>
        </div>
      </div>
    </header>
  );
}
