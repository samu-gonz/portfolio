const PILLARS = [
  {
    id: "speed-seo",
    title: "Velocidad & SEO",
    description: "Rendimiento al máximo nivel para destacar en Google.",
  },
  {
    id: "sales-focus",
    title: "Enfoque en Ventas",
    description: "Arquitectura pensada para captar leads.",
  },
  {
    id: "custom-dev",
    title: "Desarrollo a Medida",
    description: "Sin plantillas pesadas ni limitaciones.",
  },
];

export default function AgencyPillars() {
  return (
    <section
      id="pilares"
      aria-labelledby="agency-pillars-title"
      className="border-t border-zinc-800/60 pt-2"
    >
      <div className="mb-6 sm:mb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
          Por qué SG Labs
        </p>
        <h2
          id="agency-pillars-title"
          className="mt-2 text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl"
        >
          Tres pilares para crecer online
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
        {PILLARS.map((pillar, index) => (
          <article
            key={pillar.id}
            className="rounded-2xl border border-zinc-800/70 bg-zinc-900/30 p-5 transition duration-300 hover:border-zinc-700 hover:bg-zinc-900/50 sm:p-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
              0{index + 1}
            </span>
            <h3 className="mt-3 text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
