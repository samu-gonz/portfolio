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

export default function ProjectCard({
  title,
  description,
  stack,
  cta,
  href = "#contacto",
  accent = "indigo",
  layoutClass = "",
}) {
  const accentMap = {
    indigo: "from-indigo-500/20 to-indigo-500/0 border-indigo-300/20",
    cyan: "from-cyan-500/20 to-cyan-500/0 border-cyan-300/20",
    emerald: "from-emerald-500/20 to-emerald-500/0 border-emerald-300/20",
  };

  return (
    <article
      className={`group glass-card relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(2,6,23,0.45)] ${layoutClass}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${accentMap[accent]}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold leading-snug text-slate-100 md:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={href}
        className="group mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-100 transition-all duration-300 hover:text-cyan-200"
      >
        {cta}
        <ArrowIcon />
      </a>
    </article>
  );
}
