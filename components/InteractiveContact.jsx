"use client";

export default function InteractiveContact({ activePanel, onOpen, onClose }) {
  const isExpanded = activePanel === "contact";

  if (!isExpanded) {
    return (
      <button
        onClick={() => onOpen("contact")}
        className="glass-card fixed right-4 top-1/2 z-30 -translate-y-1/2 rounded-2xl px-3 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition-all duration-300 hover:scale-105 hover:border-cyan-300/40 md:right-6"
      >
        Contactar
      </button>
    );
  }

  return (
    <section className="glass-card fixed inset-4 z-40 rounded-3xl p-5 transition-all duration-500 ease-in-out md:inset-8 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white md:text-2xl">
          Hablemos de tu proyecto
        </h3>
        <button
          onClick={onClose}
          className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-300/50 hover:text-white"
        >
          Cerrar
        </button>
      </div>

      <form className="grid h-[calc(100%-3rem)] grid-rows-[auto_1fr_auto] gap-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Nombre"
            className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/60"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/60"
          />
        </div>
        <textarea
          placeholder="Idea del proyecto, objetivos y plazos aproximados..."
          className="h-full min-h-[180px] rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-300/60"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Enviar briefing
          </button>
        </div>
      </form>
    </section>
  );
}
