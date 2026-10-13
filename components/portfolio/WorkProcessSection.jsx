import { PROCESS_STEPS } from "../../data/agencyProcess";
import SectionHeader from "./SectionHeader";

export default function WorkProcessSection() {
  return (
    <section id="proceso" aria-labelledby="proceso-title" className="space-y-6 sm:space-y-8">
      <SectionHeader eyebrow="Proceso" title="Cuatro pasos simples" titleAs="h2" titleId="proceso-title" />
      <p className="-mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
        Sabes qué ocurre en cada momento: alcance claro, avances visibles y soporte después de publicar.
      </p>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((step, index) => (
          <li key={step.id} className="glass-card rounded-3xl p-5 sm:p-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300/90">
              Paso {index + 1}
            </span>
            <h3 className="mt-3 text-base font-semibold tracking-tight text-white sm:text-lg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
