"use client";

const PROFILE_TEXT =
  "Desarrollador Full-Stack enfocado en el diseño, construcción y despliegue de aplicaciones web modernas, eficientes y escalables. Especializado en arquitecturas robustas en el backend y en la creación de interfaces de usuario reactivas, intuitivas y optimizadas a nivel de rendimiento. Con capacidad para gestionar proyectos desde la base de datos hasta producción, priorizando la limpieza del código, la experiencia de usuario (UX) y la resolución ágil de problemas técnicos.";

const PRACTICES = [
  {
    title: "Arquitectura y backend",
    body: "APIs REST claras, modelado de datos coherente y lógica de negocio mantenible para soportar crecimiento sin deuda técnica innecesaria.",
  },
  {
    title: "Frontend y UX",
    body: "Interfaces reactivas con Tailwind CSS, jerarquía visual cuidada y flujos pensados para reducir fricción en cada interacción.",
  },
  {
    title: "Despliegue y calidad",
    body: "Entrega continua hacia producción, código legible, revisiones estructuradas y resolución prioritaria de incidencias críticas.",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">Perfil</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">Sobre mí</h1>

      <section className="mt-10 rounded-2xl border border-zinc-800/60 bg-zinc-950 px-6 py-10 md:px-10 md:py-14">
        <p className="max-w-3xl text-sm leading-[1.8] text-zinc-400 md:text-base md:leading-[1.85]">
          {PROFILE_TEXT}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-50">Enfoque de desarrollo</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PRACTICES.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6"
            >
              <h3 className="text-sm font-semibold text-zinc-50">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
