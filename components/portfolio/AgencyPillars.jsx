const PILLARS = [
  {
    id: "speed-seo",
    title: "Velocidad & Google",
    description: "Tu web carga rápido y se encuentra más fácil en buscadores.",
  },
  {
    id: "sales-focus",
    title: "Enfoque en ventas",
    description: "Diseño pensado para que pidan presupuesto, reserven o llamen.",
  },
  {
    id: "custom-dev",
    title: "Hecho a tu medida",
    description: "Sin plantillas genéricas que limitan tu negocio.",
  },
];

export default function AgencyPillars() {
  return (
    <section id="pilares" aria-label="Por qué elegirnos" className="grid gap-4 sm:grid-cols-3 sm:gap-5">
      {PILLARS.map((pillar, index) => (
        <article
          key={pillar.id}
          className="rounded-2xl border border-zinc-800/70 bg-zinc-900/30 p-5 transition duration-300 hover:border-zinc-700 hover:bg-zinc-900/50 sm:p-6"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            0{index + 1}
          </span>
          <h2 className="mt-3 text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
            {pillar.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{pillar.description}</p>
        </article>
      ))}
    </section>
  );
}
