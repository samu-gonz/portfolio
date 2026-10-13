import HeroSiteMockup from "./HeroSiteMockup";
import { UI } from "./uiTokens";

const TRUST_ITEMS = ["PYMEs y empresas", "Sin compromiso", "Trabajo remoto global"];

export default function AgencyHero() {
  return (
    <section id="inicio" aria-labelledby="agency-hero-title" className="relative">
      <div
        className="pointer-events-none absolute -left-16 top-0 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),transparent_68%)]"
        aria-hidden
      />

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-12 xl:gap-16">
        <div className="min-w-0 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden />
            Estudio de Desarrollo &amp; Diseño Web
          </span>

          <h1
            id="agency-hero-title"
            className="mt-5 max-w-3xl text-balance text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.35rem]"
          >
            Diseñamos páginas web ultra rápidas que{" "}
            <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              convierten visitas en clientes.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Diseño y desarrollo web a medida para PYMEs y empresas. Aumenta tus llamadas, reservas y
            ventas con una presencia digital profesional.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#empezar" className={`${UI.ctaPrimary} w-full sm:w-auto`}>
              Solicitar Análisis Gratuito
            </a>
            <a href="#proyectos" className={`${UI.ctaSecondary} w-full sm:w-auto`}>
              Ver Proyectos
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {TRUST_ITEMS.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 sm:text-sm"
              >
                <span className="text-emerald-300" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:120ms]">
          <div
            className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.28),transparent_68%)]"
            aria-hidden
          />
          <HeroSiteMockup />
        </div>
      </div>
    </section>
  );
}
