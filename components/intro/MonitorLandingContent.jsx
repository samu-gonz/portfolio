"use client";

/**
 * Compact hero content for the desk-monitor intro (desktop + mobile).
 *
 * @param {{
 *   onPrimaryCta?: () => void;
 *   onSecondaryCta?: () => void;
 *   compact?: boolean;
 * }} props
 */
export default function MonitorLandingContent({
  onPrimaryCta,
  onSecondaryCta,
  compact = false,
}) {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#0c111c] text-center font-sans antialiased ${
        compact
          ? "gap-3 px-5 py-6 sm:gap-4 sm:px-7"
          : "gap-[clamp(0.4rem,2.4cqh,0.85rem)] px-[clamp(0.55rem,4cqi,1.5rem)] py-[clamp(0.45rem,3cqh,1rem)]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(34, 211, 238, 0.07), transparent 65%), linear-gradient(180deg, #101826 0%, #0c111c 55%, #080c14 100%)",
        }}
      />

      <div className="relative z-[1] flex w-full max-w-[36rem] flex-col items-center">
        <span
          className={`inline-flex rounded-full border border-white/10 bg-white/[0.04] font-medium uppercase tracking-[0.16em] text-slate-400 ${
            compact
              ? "px-2.5 py-1 text-[9px] sm:text-[10px]"
              : "px-[clamp(0.4rem,1.8cqi,0.7rem)] py-[clamp(0.15rem,0.8cqh,0.3rem)] text-[clamp(0.35rem,1.2cqi,0.55rem)]"
          }`}
        >
          Estudio de Desarrollo &amp; Diseño Web
        </span>

        <h1
          className={`mt-[0.7em] font-sans font-bold tracking-tight text-white ${
            compact
              ? "text-[1.05rem] leading-snug sm:text-lg"
              : "text-[clamp(0.55rem,3.1cqi,1.15rem)] leading-[1.2]"
          }`}
        >
          Diseñamos páginas web ultra rápidas que convierten visitas en clientes.
        </h1>

        <p
          className={`mt-[0.55em] font-sans font-normal text-slate-400 ${
            compact
              ? "max-w-[34ch] text-[0.75rem] leading-relaxed sm:text-[0.85rem]"
              : "max-w-[42ch] text-[clamp(0.42rem,1.85cqi,0.72rem)] leading-[1.4]"
          }`}
        >
          Ayudamos a PYMEs y empresas a transformar su presencia digital con sitios web de alto
          rendimiento, diseño premium y enfocados 100% en ventas.
        </p>

        <div
          className={`mt-[1em] flex w-full flex-col items-center ${
            compact ? "gap-2 sm:gap-2.5" : "gap-[clamp(0.3rem,1.4cqh,0.5rem)]"
          }`}
        >
          <button
            type="button"
            onClick={onPrimaryCta}
            className={`inline-flex items-center justify-center rounded-full bg-cyan-400 font-sans font-bold text-[#041018] shadow-[0_10px_28px_rgba(34,211,238,0.28)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-1 hover:bg-cyan-300 ${
              compact
                ? "px-4 py-2.5 text-[0.65rem] sm:px-5 sm:text-xs"
                : "px-[clamp(0.65rem,2.8cqi,1.25rem)] py-[clamp(0.35rem,1.5cqh,0.55rem)] text-[clamp(0.38rem,1.45cqi,0.6rem)]"
            }`}
          >
            Solicitar Análisis Gratuito
          </button>

          <button
            type="button"
            onClick={onSecondaryCta}
            className={`inline-flex items-center justify-center rounded-full border border-white/15 font-sans font-semibold text-slate-200 transition hover:border-white/30 hover:text-white ${
              compact
                ? "px-4 py-2 text-[0.65rem] sm:text-xs"
                : "px-[clamp(0.65rem,2.8cqi,1.25rem)] py-[clamp(0.3rem,1.3cqh,0.5rem)] text-[clamp(0.38rem,1.45cqi,0.6rem)]"
            }`}
          >
            Ver Proyectos
          </button>
        </div>
      </div>
    </div>
  );
}
