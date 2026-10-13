import { PAGE_SECTIONS, PORTFOLIO_PROJECTS } from "../../data/portfolioProfile";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function ProjectGrid() {
  const { projects } = PAGE_SECTIONS;
  const sectionTitleId = `${projects.id}-title`;

  return (
    <section id={projects.id} aria-labelledby={sectionTitleId} className="space-y-6 sm:space-y-8 xl:space-y-10">
      <div className="space-y-3">
        <SectionHeader
          eyebrow={projects.eyebrow}
          title={projects.title}
          titleAs="h2"
          titleId={sectionTitleId}
        />
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          Proyectos reales para negocios que necesitan reservas directas, un menú digital o una landing que convierta.
        </p>
      </div>

      <div className="flex flex-col gap-5 sm:gap-6 xl:gap-8">
        {PORTFOLIO_PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
