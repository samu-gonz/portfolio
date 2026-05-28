"use client";

const PROJECTS = [
  {
    id: "ia",
    title: "Generador de Contenido Automatizado para LinkedIn con IA",
    accent: "indigo",
    compact:
      "SaaS para eliminar bloqueo creativo y acelerar marca personal con IA.",
    detail:
      "Plataforma SaaS que consume OpenAI API para generar ideas, estructuras y copys listos para publicar. Incluye motor de prompts, validaci\u00f3n de tono de marca y flujo editorial para equipos B2B.",
    stack: ["Next.js", "OpenAI API", "Tailwind CSS"],
    cta: "Explorar Caso de Estudio",
  },
  {
    id: "casa-cueva",
    title: "Plataforma Premium de Reservas - Casa Cueva las Palomas",
    accent: "cyan",
    compact:
      "Reserva directa sin intermediarios, pagos seguros y SEO orientado a conversi\u00f3n.",
    detail:
      "Sistema de reservas optimizado para negocio real: calendario inteligente, checkout con Stripe, autenticaci\u00f3n con Clerk y estructura t\u00e9cnica SEO para captar demanda de alto valor.",
    stack: ["Next.js", "Stripe", "Clerk"],
    cta: "Explorar Caso de Estudio",
  },
  {
    id: "hosteleria",
    title: "Sistema Integral de Gesti\u00f3n para Hosteler\u00eda",
    accent: "emerald",
    compact:
      "Control integral de sala y cocina con panel operativo en tiempo real.",
    detail:
      "Arquitectura Full-Stack para operaciones de hosteler\u00eda: men\u00fa interactivo para cliente, panel admin para comandas/platos/stock y backend transaccional con Express + MySQL para trazabilidad y escalabilidad.",
    stack: ["React", "Express.js", "MySQL"],
    cta: "Ver Arquitectura",
  },
];

const accentStyles = {
  indigo: "from-indigo-500/30 to-indigo-500/0 border-indigo-300/30",
  cyan: "from-cyan-500/30 to-cyan-500/0 border-cyan-300/30",
  emerald: "from-emerald-500/30 to-emerald-500/0 border-emerald-300/30",
};

export default function InteractiveBento({ activePanel, selectedProject, onOpen, onClose }) {
  const isExpanded = activePanel === "projects";
  const selected = PROJECTS.find((project) => project.id === selectedProject);

  return (
    <section
      className={`glass-card relative overflow-hidden rounded-3xl p-4 transition-all duration-500 ease-in-out md:p-6 ${
        isExpanded ? "h-full scale-100 opacity-100" : "h-full"
      }`}
    >
      {!isExpanded ? (
        <div className="grid h-full grid-cols-1 gap-3 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <button
              key={project.id}
              onClick={() => onOpen("projects", project.id)}
              className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 hover:scale-[1.02] ${accentStyles[project.accent]} bg-gradient-to-br ${
                index === 2 ? "md:col-span-2" : ""
              }`}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                Proyecto estrat&eacute;gico
              </p>
              <h3 className="text-base font-semibold text-white md:text-lg">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{project.compact}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              Vista expandida
            </p>
            <button
              onClick={onClose}
              className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-300/50 hover:text-white"
            >
              Volver
            </button>
          </div>

          {selected && (
            <article className="glass-card h-full rounded-2xl p-5 md:p-8">
              <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                {selected.title}
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                {selected.detail}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selected.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-slate-900/50 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-8 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]">
                {selected.cta}
              </button>
            </article>
          )}
        </div>
      )}
    </section>
  );
}
