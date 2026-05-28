export default function ContactForm() {
  return (
    <section id="contacto" className="px-4 pb-12 pt-16 md:px-8 md:pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="glass-card rounded-3xl p-6 md:p-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300/90">
              Contacto
            </p>
            <h2 className="text-balance text-3xl font-semibold text-slate-100 md:text-4xl">
              Cu&eacute;ntame tu reto y dise&ntilde;amos una soluci&oacute;n que
              convierta.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              Si necesitas una web corporativa de alto nivel, un SaaS o una
              plataforma operativa completa, te respondo con una propuesta clara
              y accionable.
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-200">Nombre</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-500/30"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-200">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-500/30"
                />
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">
                Idea del Proyecto
              </span>
              <textarea
                name="projectIdea"
                rows="5"
                placeholder="Cu&aacute;l es el objetivo principal de tu proyecto y qu&eacute; resultado esperas conseguir."
                className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-300/60 focus:ring-2 focus:ring-indigo-500/30"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(34,211,238,0.25)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_16px_42px_rgba(99,102,241,0.4)] md:w-auto"
            >
              Enviar propuesta de proyecto
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
