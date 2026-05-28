"use client";

const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeroSection({ activeView, onOpenView }) {
  const isHome = activeView === "home";

  return (
    <section
      className={`glass-card relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 ease-in-out md:p-8 ${
        isHome
          ? "md:col-span-5 md:scale-100 md:opacity-100"
          : "md:col-span-3 md:scale-[0.97] md:opacity-70"
      }`}
    >
      <div className="pointer-events-none absolute -left-8 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            DISPONIBLE PARA NUEVOS PROYECTOS
          </div>

          <h1 className="text-balance text-3xl font-semibold leading-tight text-slate-100 md:text-5xl">
            Construyo productos web que convierten tu presencia digital en una
            m&aacute;quina de captaci&oacute;n B2B.
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Domino JavaScript para estados reactivos complejos, Java para
            l&oacute;gica empresarial segura, CSS/Tailwind para maquetaci&oacute;n
            milim&eacute;trica y JSON para orquestar datos integrados con
            arquitecturas de Inteligencia Artificial.
          </p>
        </div>

        {/* Navegaci\u00f3n de acciones: dispara vistas del orquestador central. */}
        <nav className="glass-card flex flex-wrap items-center gap-2 rounded-2xl p-2">
          <button
            onClick={() => onOpenView("proyectos")}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Explorar Proyectos <ArrowIcon />
          </button>
          <button
            onClick={() => onOpenView("stack")}
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-300/45 hover:text-white"
          >
            Ver Stack
          </button>
          <button
            onClick={() => onOpenView("contacto")}
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-indigo-300/45 hover:text-white"
          >
            Contactar
          </button>
        </nav>
      </div>
    </section>
  );
}
