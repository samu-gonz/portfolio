"use client";

/**
 * @param {{
 *   onPrimaryCta?: () => void;
 *   onSecondaryCta?: () => void;
 * }} props
 */
export default function AgencyHero({ onPrimaryCta, onSecondaryCta }) {
  return (
    <section
      id="inicio"
      aria-labelledby="agency-hero-title"
      className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900/40"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 0%, rgba(34,211,238,0.12), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 80%, rgba(255,255,255,0.04), transparent 50%), linear-gradient(165deg, #12161f 0%, #0a0c12 55%, #080a10 100%)",
        }}
      />

      <div className="relative z-[1] px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
        <span className="inline-flex items-center rounded-full border border-zinc-700/80 bg-zinc-950/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400 sm:text-xs">
          Estudio de Desarrollo &amp; Diseño Web
        </span>

        <h1
          id="agency-hero-title"
          className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight text-zinc-50 sm:mt-6 sm:text-4xl sm:leading-[1.12] lg:text-[2.75rem]"
        >
          Diseñamos páginas web ultra rápidas que convierten visitas en clientes.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-5 sm:text-lg">
          Ayudamos a PYMEs y empresas a transformar su presencia digital con sitios web de alto
          rendimiento, diseño premium y enfocados 100% en ventas.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={onPrimaryCta}
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#041018] shadow-[0_12px_32px_rgba(34,211,238,0.28)] transition duration-200 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_18px_40px_rgba(34,211,238,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Solicitar Análisis Gratuito
          </button>

          <button
            type="button"
            onClick={onSecondaryCta}
            className="inline-flex items-center justify-center rounded-full border border-zinc-600/80 bg-transparent px-6 py-3.5 text-sm font-semibold text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-900/60 hover:text-white"
          >
            Ver Proyectos
          </button>
        </div>
      </div>
    </section>
  );
}
