const PROJECTS = [
  {
    title: "Generador de Contenido B2B con IA",
    description:
      "Aplicación web de asistencia de escritura inteligente mediante IA, con una interfaz de usuario fluida y reactiva.",
    technologies: ["React", "Vite", "Tailwind CSS", "AI Integration"],
    github: "https://github.com/samu-gonz/ghostwrite-ai",
    demo: "https://ghostwrite-ai-lime.vercel.app/",
    cover: "/projects/ghostwrite-ai.png",
  },
  {
    title: "Plataforma Premium de Reservas",
    description:
      "Plataforma web para alojamiento rural con interfaz responsive optimizada y chatbot de asistencia integrado.",
    technologies: ["React", "Vite", "Tailwind CSS", "Frontend"],
    github: "https://github.com/samu-gonz/casa-cueva-las-palomas",
    demo: "https://casa-cueva-las-palomas.vercel.app/",
    cover: "/projects/casa-cueva-las-palomas.png",
  },
  {
    title: "Guachinche El Realejo",
    description:
      "Aplicación Full-Stack para gestión de restaurante. Menú digital dinámico y backend de reservas automatizado con notificaciones por email.",
    technologies: ["Node.js", "Express", "React", "Nodemailer", "Full-Stack"],
    github: "https://github.com/samu-gonz/restaurantePrueba",
    demo: "https://restaurante-prueba-chi.vercel.app/",
    cover: "/projects/guachinche-el-realejo.png",
  },
];

function ProjectCover({ cover, title }) {
  if (cover) {
    return (
      <img
        src={cover}
        alt={title}
        className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className="aspect-video w-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 transition-transform duration-500 group-hover:scale-105"
      aria-hidden
    />
  );
}

function ProjectCard({ title, description, technologies, github, demo, cover }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 transition-colors duration-300 hover:border-zinc-600/80 hover:bg-zinc-900/70">
      <div className="overflow-hidden bg-zinc-950">
        <ProjectCover cover={cover} title={title} />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-700/60 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-zinc-300"
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
            className="flex flex-1 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-center text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-zinc-500 hover:bg-zinc-800 sm:flex-none sm:px-5"
          >
            Ver Código
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-100 px-4 py-2.5 text-center text-sm font-medium text-zinc-900 transition-colors duration-300 hover:bg-white sm:flex-none sm:px-5"
          >
            Ver Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="w-full">
      <header className="mb-6 md:mb-8">
        <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Portfolio</p>
        <h2 className="mt-1 text-xl font-semibold text-zinc-50 md:text-2xl">Proyectos</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Despliegues recientes en producción con foco en experiencia de usuario y valor de negocio.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2 md:gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            cover={project.cover}
          />
        ))}
      </div>
    </section>
  );
}
