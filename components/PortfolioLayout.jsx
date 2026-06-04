import { PROFILE, TECH_STACK } from "../data/portfolioProfile";

const PROJECTS = [
  {
    title: "Ghostwrite AI",
    description:
      "Aplicación web de asistencia de escritura inteligente mediante IA, diseñada con una interfaz fluida, reactiva y optimizada para la automatización de contenidos.",
    technologies: ["React", "Vite", "Tailwind CSS", "AI Integration"],
    github: "https://github.com/samu-gonz/ghostwrite-ai",
    demo: "https://ghostwrite-ai-lime.vercel.app/",
    image: "/projects/ghostwrite.png",
  },
  {
    title: "Casa Cueva las Palomas",
    description:
      "Plataforma web profesional para alojamiento rural turístico con interfaz responsive avanzada, optimización de recursos y un chatbot conversacional con IA integrada para la atención al cliente.",
    technologies: ["React", "Vite", "Tailwind CSS", "AI Integration", "Frontend"],
    github: "https://github.com/samu-gonz/casa-cueva-las-palomas",
    demo: "https://casa-cueva-las-palomas.vercel.app/",
    image: "/projects/casacueva.png",
  },
  {
    title: "Guachinche El Realejo",
    description:
      "Aplicación Full-Stack para gestión de restaurante. Cuenta con un menú digital dinámico, motor de reservas automatizado con notificaciones por email y un asistente virtual con IA integrada para gestionar comandas y consultas.",
    technologies: ["Node.js", "Express", "React", "Nodemailer", "AI Integration", "Full-Stack"],
    github: "https://github.com/samu-gonz/restaurantePrueba",
    demo: "https://restaurante-prueba-chi.vercel.app/",
    image: "/projects/restaurante.png",
  },
];

const PROFILE_TEXT =
  "Desarrollador Full-Stack enfocado en el diseño, construcción y despliegue de aplicaciones web modernas, eficientes y escalables. Especializado en arquitecturas robustas en el backend y en la creación de interfaces de usuario reactivas, intuitivas y optimizadas a nivel de rendimiento. Con capacidad para gestionar proyectos desde la base de datos hasta producción, priorizando la limpieza del código, la experiencia de usuario (UX) y la resolución ágil de problemas técnicos.";

function Sidebar() {
  const { links } = PROFILE;

  return (
    <aside className="flex w-full flex-col justify-between border-b border-zinc-800/80 bg-zinc-900/30 p-6 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:border-b-0 lg:border-r lg:p-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Frontend</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {TECH_STACK.frontend.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Backend & Bases de Datos
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {TECH_STACK.backend.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-zinc-800/60 pt-4">
          <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Contacto Directo
          </h2>
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-xl border border-zinc-700/60 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 shadow-sm transition hover:border-zinc-500"
          >
            Ver CV / Imprimir PDF
          </a>
        </div>
      </div>

      <div className="mt-8 space-y-3 border-t border-zinc-800/60 pt-6 lg:mt-0">
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-700"
        >
          <span>LinkedIn</span>
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-700"
        >
          <span>GitHub</span>
        </a>
        <a
          href={links.email}
          className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-700"
        >
          <span>Correo electrónico</span>
        </a>
      </div>
    </aside>
  );
}

function ProjectCard({ title, description, technologies, github, demo, image }) {
  return (
    <article className="group grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 transition duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/40 lg:grid-cols-2">
      <div className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden border-b border-zinc-800/60 bg-zinc-950 sm:min-h-[260px] lg:min-h-full lg:border-b-0 lg:border-r">
        <img
          src={image}
          alt={`Captura de ${title}`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight text-zinc-50">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-800 bg-zinc-950/40 px-2.5 py-0.5 text-xs font-medium text-zinc-400"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
          >
            Ver Código
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-white"
          >
            Ver Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioLayout({ onRestartIntro }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50 antialiased lg:flex-row">
      <Sidebar />

      <main className="mx-auto w-full max-w-5xl flex-1 space-y-16 px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
        <section id="perfil" className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Perfil Profesional</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl">
            Samuel González Rodríguez
          </h1>
          <p className="mt-2 text-sm text-zinc-500">{PROFILE.role}</p>
          <p className="mt-6 text-base leading-relaxed text-zinc-400">{PROFILE_TEXT}</p>
        </section>

        <section id="proyectos" className="space-y-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-50">Proyectos Destacados</h2>
          </div>

          <div className="flex flex-col gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {onRestartIntro && (
          <button
            type="button"
            onClick={onRestartIntro}
            className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
          >
            Reiniciar intro
          </button>
        )}
      </main>
    </div>
  );
}
