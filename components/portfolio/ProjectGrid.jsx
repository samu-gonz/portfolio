import { PAGE_SECTIONS, PORTFOLIO_PROJECTS } from "../../data/portfolioProfile";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function ProjectGrid() {
  const { projects } = PAGE_SECTIONS;
  const sectionTitleId = `${projects.id}-title`;

  return (
    <section id={projects.id} aria-labelledby={sectionTitleId} className="space-y-6 sm:space-y-8">
      <SectionHeader
        eyebrow={projects.eyebrow}
        title={projects.title}
        titleAs="h2"
        titleId={sectionTitleId}
      />

      <div className="flex flex-col gap-5 sm:gap-6">
        {PORTFOLIO_PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
