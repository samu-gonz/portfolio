const PROFILE_TEXT =
  "Desarrollador Full-Stack enfocado en el diseño, construcción y despliegue de aplicaciones web modernas, eficientes y escalables. Especializado en arquitecturas robustas en el backend y en la creación de interfaces de usuario reactivas, intuitivas y optimizadas a nivel de rendimiento. Con capacidad para gestionar proyectos desde la base de datos hasta producción, priorizando la limpieza del código, la experiencia de usuario (UX) y la resolución ágil de problemas técnicos.";

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
      "Plataforma web profesional para alojamiento rural turístico con una interfaz responsive avanzada, optimización de recursos y un chatbot de asistencia integrado.",
    technologies: ["React", "Vite", "Tailwind CSS", "Frontend"],
    github: "https://github.com/samu-gonz/casa-cueva-las-palomas",
    demo: "https://casa-cueva-las-palomas.vercel.app/",
    image: "/projects/casacueva.png",
  },
  {
    title: "Guachinche El Realejo",
    description:
      "Aplicación Full-Stack para gestión de restaurante. Cuenta con un menú digital dinámico y un motor de reservas automatizado con notificaciones por email mediante Nodemailer.",
    technologies: ["Node.js", "Express", "React", "Nodemailer", "Full-Stack"],
    github: "https://github.com/samu-gonz/restaurantePrueba",
    demo: "https://restaurante-prueba-chi.vercel.app/",
    image: "/projects/restaurante.png",
  },
];

function ProjectCard({ title, description, technologies, github, demo, image }) {
  return (
    <article className="group w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 transition-colors duration-300 hover:border-zinc-600/80">
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="relative flex h-full w-full min-h-[250px] items-center justify-center overflow-hidden rounded-xl bg-zinc-950 lg:min-h-[320px] lg:rounded-l-2xl lg:rounded-r-none">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex h-full flex-col justify-center p-6 md:p-8">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>

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

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-zinc-500 hover:bg-zinc-800"
            >
              Ver Código
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors duration-300 hover:bg-white"
            >
              Ver Demo
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="w-full bg-zinc-950">
      <section
        id="perfil"
        className="rounded-2xl border border-zinc-800/60 bg-zinc-950 px-6 py-10 md:px-10 md:py-14"
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">Perfil profesional</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">Sobre mí</h2>
        <p className="mt-6 max-w-3xl text-sm leading-[1.8] text-zinc-400 md:text-base md:leading-[1.85]">
          {PROFILE_TEXT}
        </p>
      </section>

      <section id="proyectos" className="mt-12 md:mt-16">
        <header className="mb-6 md:mb-8">
          <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Portfolio</p>
          <h2 className="mt-1 text-xl font-semibold text-zinc-50 md:text-2xl">Proyectos</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Despliegues recientes en producción con foco en experiencia de usuario y valor de negocio.
          </p>
        </header>

        <div className="flex flex-col gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
