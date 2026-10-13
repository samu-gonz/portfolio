const PILLARS = [
  {
    id: "speed-seo",
    index: "01",
    title: "Velocidad & SEO Google",
    description: "Web optimizada para cargar al instante y posicionar mejor.",
    accent: "from-violet-400 to-indigo-300",
  },
  {
    id: "sales-focus",
    index: "02",
    title: "Enfoque en Ventas (CRO)",
    description: "Estructura pensada para captar presupuestos, citas o reservas.",
    accent: "from-sky-300 to-cyan-200",
  },
  {
    id: "custom-dev",
    index: "03",
    title: "100% A medida",
    description: "Diseños únicos sin plantillas rígidas ni limitaciones.",
    accent: "from-emerald-300 to-teal-200",
  },
];

export default function AgencyPillars() {
  return (
    <section id="pilares" aria-labelledby="pilares-title" className="space-y-6 sm:space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/80">Beneficios</p>
        <h2 id="pilares-title" className="mt-3 max-w-2xl text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Tres pilares para convertir visitas en clientes
        </h2>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <article key={pillar.id} className="glass-card rounded-3xl p-5 sm:p-6">
            <span className={`bg-gradient-to-r ${pillar.accent} bg-clip-text text-sm font-bold tracking-[0.18em] text-transparent`}>
              {pillar.index}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
