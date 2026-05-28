"use client";

const PROJECTS = [
  {
    id: "linkedin",
    title: "Generador de Contenido Automatizado para LinkedIn con IA",
    compact:
      "SaaS para eliminar bloqueo creativo y publicar contenido de alto impacto con IA.",
    detail:
      "Arquitectura basada en JavaScript (ES6+) y OpenAI API para generar ideas, drafts y versiones finales con control de tono. Se modelan respuestas en JSON para un pipeline de contenido fiable y automatizable.",
    tools: ["Next.js", "OpenAI API", "JavaScript", "JSON"],
    accent: "from-indigo-500/25 to-indigo-500/5 border-indigo-300/25",
    cta: "Ver Caso",
  },
  {
    id: "casa-cueva",
    title: "Plataforma Premium de Reservas - Casa Cueva las Palomas",
    compact:
      "Reserva directa, pago seguro y UX optimizada para eliminar intermediarios.",
    detail:
      "Flujo de reservas con Stripe y Clerk sobre frontend en Next.js. El backend en Java centraliza validaciones de negocio, seguridad transaccional y consistencia del calendario para evitar sobreventa.",
    tools: ["Next.js", "Stripe", "Clerk", "Java"],
    accent: "from-cyan-500/25 to-cyan-500/5 border-cyan-300/25",
    cta: "Ver Caso",
  },
  {
    id: "hosteleria",
    title: "Sistema Integral de Gesti\u00f3n para Hosteler\u00eda",
    compact:
      "Control de comandas, platos y stock en tiempo real para operaciones exigentes.",
    detail:
      "Sistema con Express API y MySQL para operaciones en tiempo real. Los payloads JSON sincronizan sala, cocina y administraci\u00f3n con trazabilidad completa y respuesta operativa inmediata.",
    tools: ["React", "Express API", "MySQL", "JSON"],
    accent: "from-emerald-500/25 to-emerald-500/5 border-emerald-300/25",
    cta: "Ver Arquitectura",
  },
];

const CloseIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 6L18 18M18 6L6 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export default function BentoGrid({
  activeView,
  selectedProject,
  onSelectProject,
  onOpenView,
  onGoHome,
}) {
  // Fuente \u00fanica de verdad para render condicional del panel derecho.
  const selected = PROJECTS.find((project) => project.id === selectedProject);
  const showProjects = activeView === "home" || activeView === "proyectos";

  return (
    <section
      className={`glass-card relative h-full overflow-hidden rounded-3xl p-4 transition-all duration-500 ease-in-out md:p-6 ${
        activeView === "home" ? "md:col-span-7" : "md:col-span-9"
      }`}
    >
      {showProjects && !selected ? (
        <div className="grid h-full grid-cols-1 gap-3 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <button
              key={project.id}
              onClick={() => {
                onOpenView("proyectos");
                onSelectProject(project.id);
              }}
              className={`group relative rounded-2xl border bg-gradient-to-br p-4 text-left transition-all duration-300 hover:scale-[1.02] ${project.accent} ${
                index === 2 ? "md:col-span-2" : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                Proyecto estrat&eacute;gico
              </p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-white md:text-lg">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{project.compact}</p>
              <span className="mt-4 inline-flex items-center rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold text-slate-100">
                {project.cta}
              </span>
            </button>
          ))}
        </div>
      ) : null}

      {activeView === "proyectos" && selected ? (
        <article className="relative h-full rounded-2xl border border-white/10 bg-slate-950/40 p-5 md:p-8">
          <button
            onClick={onGoHome}
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-300/45 hover:text-white"
          >
            <CloseIcon /> Volver
          </button>

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            Caso de estudio t&eacute;cnico
          </p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-white md:text-4xl">
            {selected.title}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            {selected.detail}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="glass-card rounded-xl p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                Mockup A
              </p>
              <div className="mt-2 h-20 rounded-lg border border-white/10 bg-slate-900/60" />
            </div>
            <div className="glass-card rounded-xl p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                Mockup B
              </p>
              <div className="mt-2 h-20 rounded-lg border border-white/10 bg-slate-900/60" />
            </div>
            <div className="glass-card rounded-xl p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                Mockup C
              </p>
              <div className="mt-2 h-20 rounded-lg border border-white/10 bg-slate-900/60" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {selected.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/15 bg-slate-900/50 px-3 py-1 text-xs text-slate-200"
              >
                {tool}
              </span>
            ))}
          </div>

          <button className="mt-7 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]">
            {selected.cta}
          </button>
        </article>
      ) : null}

      {activeView === "stack" ? (
        <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/40 p-5 md:p-8">
          <button
            onClick={onGoHome}
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-300/45 hover:text-white"
          >
            <CloseIcon /> Cerrar
          </button>
          <h2 className="text-2xl font-semibold text-white md:text-4xl">
            Stack de Alto Rendimiento
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">
            Especializaci&oacute;n transversal: JavaScript (ES6+) para
            reactividad avanzada, Java para l&oacute;gica empresarial y seguridad,
            CSS/Tailwind para UI de precisi&oacute;n y JSON para contratos de
            datos consistentes en entornos con IA.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["JavaScript ES6+", "Java", "Tailwind CSS", "JSON", "Next.js", "React", "Express API", "MySQL"].map(
              (item) => (
                <div key={item} className="glass-card rounded-xl p-3 text-center text-sm text-slate-200">
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      ) : null}

      {activeView === "contacto" ? (
        <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/40 p-5 md:p-8">
          <button
            onClick={onGoHome}
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-300/45 hover:text-white"
          >
            <CloseIcon /> Cerrar
          </button>
          <h2 className="text-2xl font-semibold text-white md:text-4xl">
            Contacto estrat&eacute;gico
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Cu&eacute;ntame tus objetivos y te propongo una arquitectura t&eacute;cnica
            + enfoque UX orientado a resultados.
          </p>
          <form className="mt-6 grid h-full grid-rows-[auto_auto_1fr_auto] gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/60"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/60"
            />
            <textarea
              rows="6"
              placeholder="Describe tu proyecto y el resultado de negocio que quieres lograr..."
              className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-300/60"
            />
            <button
              type="submit"
              className="w-fit rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Enviar briefing
            </button>
          </form>
        </div>
      ) : null}
    </section>
  );
}
