"use client";

const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeroModule({ activePanel, onOpen }) {
  const isIdle = activePanel === "home";

  return (
    <section
      className={`glass-card relative overflow-hidden rounded-3xl p-6 transition-all duration-500 ease-in-out md:p-8 ${
        isIdle
          ? "h-full scale-100 opacity-100"
          : "h-full scale-[0.96] opacity-60 md:opacity-70"
      }`}
    >
      <div className="pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-balance text-3xl font-semibold leading-tight text-slate-100 md:text-5xl">
            Construyo productos web que convierten tu presencia digital en una
            m&aacute;quina de captaci&oacute;n B2B.
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Dise&ntilde;o experiencias premium, arquitectura Full-Stack robusta y
            performance real para escalar agencias y negocios locales.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onOpen("projects")}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
          >
            Explorar Proyectos
            <ArrowIcon />
          </button>
          <button
            onClick={() => onOpen("stack")}
            className="group glass-card inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:scale-[1.03] hover:border-cyan-300/40"
          >
            Ver Stack
            <ArrowIcon />
          </button>
          <button
            onClick={() => onOpen("contact")}
            className="group rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:scale-[1.03] hover:border-indigo-300/40 hover:text-white"
          >
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
}
