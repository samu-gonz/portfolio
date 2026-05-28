const ArrowIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-20 md:px-8 md:pt-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8">
        <div className="glass-card inline-flex animate-pulse items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/90 md:text-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.8)]" />
          Disponible para nuevos proyectos
        </div>

        <h1 className="text-balance max-w-4xl text-4xl font-semibold leading-tight text-slate-100 md:text-6xl">
          Desarrollo productos web que convierten visitas en clientes y escalan
          la rentabilidad de tu negocio.
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Arquitectura Full-Stack, UX de alto impacto y rendimiento extremo para
          agencias y negocios que necesitan vender m&aacute;s con una plataforma
          digital seria.
        </p>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a
            href="#proyectos"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)] md:text-base"
          >
            Ver Casos de Estudio
            <ArrowIcon />
          </a>

          <a
            href="#contacto"
            className="group glass-card inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:text-cyan-100 md:text-base"
          >
            Contactar
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
