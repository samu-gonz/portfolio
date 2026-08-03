import { PROCESS_STEPS } from "../../data/agencyProcess";
import SectionHeader from "./SectionHeader";

export default function WorkProcessSection() {
  return (
    <section id="proceso" aria-labelledby="proceso-title" className="space-y-6 sm:space-y-8">
      <SectionHeader
        eyebrow="Sin complicaciones"
        title="Cómo empezamos a trabajar"
        titleAs="h2"
        titleId="proceso-title"
      />
      <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
        Un proceso simple para que sepas qué ocurre en cada momento — sin tecnicismos ni sorpresas.
      </p>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
        {PROCESS_STEPS.map((step, index) => (
          <li
            key={step.id}
            className="rounded-2xl border border-zinc-800/70 bg-zinc-900/25 p-5 sm:p-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
              Paso 0{index + 1}
            </span>
            <h3 className="mt-3 text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
