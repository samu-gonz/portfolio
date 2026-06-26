"use client";

import { PROJECT_ACTIONS } from "../../data/portfolioProfile";
import { useExternalNavigation } from "../../hooks/useExternalNavigation";
import ProjectCover, { projectCoverFigureClass } from "./ProjectCover";
import { UI, cn } from "./uiTokens";

const ACTION_STYLES = {
  secondary: UI.btnSecondary,
  primary: UI.btnPrimary,
};

/**
 * @param {{
 *   id: string;
 *   title: string;
 *   description: string;
 *   businessHighlight?: string;
 *   technologies: string[];
 *   github: string;
 *   demo: string;
 *   image?: string | null;
 *   coverFormat?: "portrait" | "landscape" | "auto";
 * }} props
 */
export default function ProjectCard({
  id,
  title,
  description,
  businessHighlight,
  technologies,
  github,
  demo,
  image,
  coverFormat = "landscape",
}) {
  const { navigateExternal } = useExternalNavigation();
  const headingId = `project-${id}`;
  const projectLinks = { github, demo };

  const handleActionClick = (href) => (event) => {
    event.preventDefault();
    navigateExternal(href);
  };

  return (
    <article className={UI.projectCard} aria-labelledby={headingId}>
      <figure className={cn(UI.projectImage, projectCoverFigureClass(coverFormat))}>
        <ProjectCover image={image} title={title} coverFormat={coverFormat} />
      </figure>

      <div className="flex flex-col p-6 sm:p-8">
        <header>
          <h3 id={headingId} className="text-xl font-bold tracking-tight text-zinc-50">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
          {businessHighlight && (
            <p className="mt-2 text-sm leading-relaxed">
              <strong className="font-semibold text-zinc-300">{businessHighlight}</strong>
            </p>
          )}
        </header>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Tecnologías de ${title}`}>
          {technologies.map((tech) => (
            <li key={tech} className={UI.projectTag}>
              {tech}
            </li>
          ))}
        </ul>

        <footer className="mt-6 flex flex-col gap-3 sm:flex-row">
          {PROJECT_ACTIONS.map(({ id: actionId, label, hrefKey, style }) => {
            const href = projectLinks[hrefKey];

            return (
              <a
                key={actionId}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleActionClick(href)}
                className={cn(ACTION_STYLES[style])}
              >
                {label}
              </a>
            );
          })}
        </footer>
      </div>
    </article>
  );
}
