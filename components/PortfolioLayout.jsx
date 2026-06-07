"use client";

import EmailContactLink from "./EmailContactLink";
import {
  PAGE_SECTIONS,
  PORTFOLIO_PROJECTS,
  PROFILE,
  PROFILE_BIO,
  SIDEBAR_CONTACT,
  TECH_SECTIONS,
} from "../data/portfolioProfile";

const UI = {
  layout: "flex min-h-screen flex-col bg-zinc-950 text-zinc-50 antialiased lg:flex-row",
  sidebar:
    "flex w-full flex-col justify-between border-b border-zinc-800/50 bg-zinc-900 p-6 pb-8 lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:w-80 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-8 lg:pt-8 lg:pb-12",
  sectionEyebrow: "text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm",
  techBadge:
    "cursor-default rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-xs font-medium text-zinc-50 transition duration-300 hover:border-zinc-600",
  contactPrimary:
    "flex w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3.5 text-sm font-semibold text-zinc-50 transition duration-300 hover:bg-zinc-800",
  contactLink:
    "group flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2.5 text-sm font-medium text-zinc-50 transition duration-300 hover:bg-zinc-800",
  main: "mx-auto w-full max-w-5xl flex-1 space-y-12 px-6 py-10 sm:space-y-16 sm:px-10 sm:py-12 lg:px-16 lg:py-20",
  projectCard:
    "group grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 transition duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/40 lg:grid-cols-2",
  projectImage:
    "relative flex min-h-[220px] w-full items-center justify-center overflow-hidden border-b border-zinc-800/60 bg-zinc-950 sm:min-h-[260px] lg:min-h-full lg:border-b-0 lg:border-r",
  projectTag:
    "rounded-full border border-zinc-800 bg-zinc-950/40 px-2.5 py-0.5 text-xs font-medium text-zinc-400",
  btnSecondary:
    "inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800",
  btnPrimary:
    "inline-flex flex-1 items-center justify-center rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-white",
};

async function openExternalUrl(url) {
  try {
    if (!url) throw new Error("URL no disponible");
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) throw new Error("Ventana bloqueada por el navegador");
  } catch (error) {
    console.error("Error al abrir enlace externo:", error);
  }
}

function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-zinc-300"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, titleAs: TitleTag = "h2" }) {
  return (
    <header>
      <p className={UI.sectionEyebrow}>{eyebrow}</p>
      <TitleTag className="mt-2 text-2xl font-bold tracking-tight text-zinc-50 sm:mt-3">{title}</TitleTag>
    </header>
  );
}

function TechStackGroup({ label, items }) {
  return (
    <section aria-label={label}>
      <h2 className={UI.sectionEyebrow}>{label}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((tech) => (
          <li key={tech} className={UI.techBadge}>
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactSection({ variant = "links" }) {
  const { cv, social, email } = SIDEBAR_CONTACT;

  if (variant === "cv") {
    const handleCvClick = async (event) => {
      event.preventDefault();
      try {
        const target = cv.href.startsWith("http") ? cv.href : `${window.location.origin}${cv.href}`;
        await openExternalUrl(target);
      } catch (error) {
        console.error("Error al abrir CV:", error);
        window.location.href = cv.href;
      }
    };

    return (
      <section aria-label="Contacto directo" className="border-t border-zinc-800/50 pt-4">
        <h2 className={`mb-3 ${UI.sectionEyebrow}`}>Contacto Directo</h2>
        <a
          href={cv.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCvClick}
          className={UI.contactPrimary}
        >
          {cv.label}
        </a>
      </section>
    );
  }

  return (
    <nav
      aria-label="Enlaces de contacto"
      className="relative z-10 mt-8 space-y-3 border-t border-zinc-800/50 pt-6 pb-8 lg:mt-0"
    >
      {social.map(({ id, href, label }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            event.preventDefault();
            openExternalUrl(href);
          }}
          className={UI.contactLink}
        >
          <span>{label}</span>
          <ArrowIcon />
        </a>
      ))}

      <EmailContactLink className={UI.contactLink}>
        <span>{email.label}</span>
        <ArrowIcon />
      </EmailContactLink>
    </nav>
  );
}

function LeftSidebar({ sidebarClass = UI.sidebar }) {
  return (
    <aside className={sidebarClass}>
      <div className="space-y-6 sm:space-y-8">
        {TECH_SECTIONS.map(({ id, label, items }) => (
          <TechStackGroup key={id} label={label} items={items} />
        ))}
        <ContactSection variant="cv" />
      </div>

      <ContactSection variant="links" />
    </aside>
  );
}

function ProfessionalSummary() {
  const { profile } = PAGE_SECTIONS;

  return (
    <section id={profile.id} aria-labelledby={`${profile.id}-title`} className="max-w-3xl">
      <p className={UI.sectionEyebrow}>{profile.eyebrow}</p>
      <h1
        id={`${profile.id}-title`}
        className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl"
      >
        {profile.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-500">{PROFILE.role}</p>
      <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:mt-6">{PROFILE_BIO}</p>
    </section>
  );
}

function ProjectCard({ id, title, description, technologies, github, demo, image }) {
  const headingId = `project-${id}`;

  return (
    <article className={UI.projectCard} aria-labelledby={headingId}>
      <div className={UI.projectImage}>
        <img
          src={image}
          alt={`Captura de ${title}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <header>
          <h3 id={headingId} className="text-xl font-bold tracking-tight text-zinc-50">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
        </header>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Tecnologías de ${title}`}>
          {technologies.map((tech) => (
            <li key={tech} className={UI.projectTag}>
              {tech}
            </li>
          ))}
        </ul>

        <footer className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => {
              event.preventDefault();
              openExternalUrl(github);
            }}
            className={UI.btnSecondary}
          >
            Ver Código
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => {
              event.preventDefault();
              openExternalUrl(demo);
            }}
            className={UI.btnPrimary}
          >
            Ver Demo
          </a>
        </footer>
      </div>
    </article>
  );
}

function ProjectGrid() {
  const { projects } = PAGE_SECTIONS;

  return (
    <section id={projects.id} aria-labelledby={`${projects.id}-title`} className="space-y-6 sm:space-y-8">
      <SectionHeader eyebrow={projects.eyebrow} title={projects.title} titleAs="h2" />

      <div className="flex flex-col gap-5 sm:gap-6">
        {PORTFOLIO_PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

function RestartIntroControl({ onRestartIntro }) {
  if (!onRestartIntro) return null;

  const handleRestart = () => {
    try {
      onRestartIntro();
    } catch (error) {
      console.error("Error al reiniciar la intro:", error);
    }
  };

  return (
    <footer className="pt-2">
      <button
        type="button"
        onClick={handleRestart}
        className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
      >
        Reiniciar intro
      </button>
    </footer>
  );
}

export default function PortfolioLayout({ onRestartIntro }) {
  return (
    <div className={UI.layout}>
      <LeftSidebar sidebarClass={UI.sidebar} />

      <main className={UI.main}>
        <ProfessionalSummary />
        <ProjectGrid />
        <RestartIntroControl onRestartIntro={onRestartIntro} />
      </main>
    </div>
  );
}
