function ArrowLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-400"
    >
      {label}
      <svg
        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path d="M5 12h14M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function ProjectSolutionCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-800/80 bg-[#151926] p-5 transition-colors hover:border-slate-700/90 md:p-6">
      <h2 className="text-base font-semibold leading-snug text-white md:text-lg">{project.title}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-800 bg-slate-900/80 px-2 py-0.5 text-[11px] font-medium text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2 border-t border-slate-800/60 pt-4 sm:flex-row sm:gap-6">
        <ArrowLink href={project.github} label="Ver Código en GitHub" />
        <ArrowLink href={project.live} label="Ver Aplicación En Vivo" />
      </div>
    </article>
  );
}
