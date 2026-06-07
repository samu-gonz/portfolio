import EmailContactLink from "../EmailContactLink";
import { PROFILE, TECH_STACK } from "../../data/portfolioProfile";

function StackGroup({ title, items }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-slate-500">{title}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-slate-800/80 bg-[#151926] px-2.5 py-1 text-xs text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg border border-slate-800/80 bg-[#151926] px-3 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-700 hover:text-cyan-400"
    >
      {icon}
      {label}
    </a>
  );
}

export default function TechContactPanel({ onLogout }) {
  const { links } = PROFILE;

  return (
    <aside className="flex min-h-full flex-col gap-6 border-b border-slate-800/80 bg-[#0a0e14]/60 p-5 lg:border-b-0 lg:border-r lg:p-6">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Stack técnico</p>
        <h3 className="mt-1 text-lg font-semibold text-white">Arquitectura principal</h3>
      </div>

      <StackGroup title="Frontend" items={TECH_STACK.frontend} />
      <StackGroup title="Backend & Bases de Datos" items={TECH_STACK.backend} />

      <div className="border-t border-slate-800/80 pt-5">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-slate-500">Contacto directo</p>
        <a
          href={PROFILE.cvUrl}
          className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/20"
        >
          Descargar CV (PDF)
        </a>
        <div className="grid gap-2">
          <ContactLink
            href={links.linkedin}
            label="LinkedIn"
            icon={
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.067 2.067 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            }
          />
          <ContactLink
            href={links.github}
            label="GitHub"
            icon={
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            }
          />
          <EmailContactLink className="flex w-full items-center gap-2 rounded-lg border border-slate-800/80 bg-[#151926] px-3 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-700 hover:text-cyan-400">
            <span>Correo electrónico</span>
          </EmailContactLink>
        </div>
      </div>

      {onLogout && (
        <button
          type="button"
          onClick={onLogout}
          className="mt-auto text-left text-xs text-slate-600 transition-colors hover:text-slate-400"
        >
          Reiniciar experiencia de intro
        </button>
      )}
    </aside>
  );
}
