const steps = [
  {
    number: "01",
    title: "Estrategia y Dise\u00f1o UX",
    description:
      "Traduzco objetivos de negocio en una arquitectura digital clara: propuesta de valor, estructura de p\u00e1ginas y experiencia orientada a conversi\u00f3n.",
  },
  {
    number: "02",
    title: "Desarrollo Full-Stack",
    description:
      "Implemento frontend y backend con enfoque en escalabilidad, mantenibilidad y tiempos de carga optimizados para ofrecer una ventaja competitiva real.",
  },
  {
    number: "03",
    title: "Pruebas, SEO y Rendimiento",
    description:
      "Valido interacciones clave, mejoro Core Web Vitals y refuerzo el posicionamiento t\u00e9cnico para captar tr\u00e1fico de calidad y convertirlo en oportunidades.",
  },
  {
    number: "04",
    title: "Despliegue y Evoluci\u00f3n",
    description:
      "Lanzo la soluci\u00f3n con observabilidad y una hoja de ruta de mejoras continuas para que tu plataforma crezca junto a tus objetivos comerciales.",
  },
];

export default function Process() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
            C&oacute;mo Trabajo
          </p>
          <h2 className="text-balance text-3xl font-semibold text-slate-100 md:text-4xl">
            Un proceso claro para minimizar riesgos y maximizar resultados.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.number}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01] hover:border-white/15"
            >
              <p className="text-sm font-semibold tracking-[0.14em] text-cyan-300/80">
                {step.number}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-100">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
