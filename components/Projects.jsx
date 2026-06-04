const PROJECTS = [
  {
    title: "Casa Cueva las Palomas",
    description:
      "Plataforma web para alojamiento rural con interfaz responsive optimizada y chatbot de asistencia integrado.",
    technologies: ["React", "Vite", "Tailwind CSS", "Frontend"],
    github: "https://github.com/samu-gonz/casa-cueva-las-palomas",
    demo: "https://casa-cueva-las-palomas.vercel.app/",
  },
  {
    title: "Ghostwrite AI",
    description:
      "Aplicación web de asistencia de escritura inteligente mediante IA, con una interfaz de usuario fluida y reactiva.",
    technologies: ["React", "Vite", "Tailwind CSS", "AI Integration"],
    github: "https://github.com/samu-gonz/ghostwrite-ai",
    demo: "https://ghostwrite-ai-lime.vercel.app/",
  },
  {
    title: "Guachinche El Realejo",
    description:
      "Aplicación Full-Stack para gestión de restaurante. Menú digital dinámico y backend de reservas automatizado con notificaciones por email.",
    technologies: ["Node.js", "Express", "React", "Nodemailer", "Full-Stack"],
    github: "https://github.com/samu-gonz/restaurantePrueba",
    demo: "https://restaurante-prueba-chi.vercel.app/",
  },
];

function ProjectCard({ title, description, technologies, github, demo }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-600/80 hover:bg-zinc-900/70 md:p-7">
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
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-100 px-4 py-2.5 text-center text-sm font-medium text-zinc-900 transition-colors duration-300 hover:bg-white sm:flex-none sm:px-5"
        >
          Demo
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="w-full px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">Proyectos</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
            Despliegues recientes en producción con foco en experiencia de usuario y valor de negocio.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
