"use client";

import { PROJECT_ACTIONS } from "../../data/portfolioProfile";
import ProjectCover from "./ProjectCover";
import { UI, cn, projectCardClass, projectCoverFigureClass } from "./uiTokens";

const ACTION_STYLES = {
  secondary: UI.btnSecondary,
  primary: UI.btnPrimary,
};

/**
 * @param {{
 *   id: string;
 *   title: string;
 *   sector?: string;
 *   description: string;
 *   businessHighlight?: string;
 *   tags?: string[];
 *   technologies?: string[];
 *   github: string;
 *   demo: string;
 *   image?: string | null;
 *   coverFormat?: "portrait" | "landscape" | "auto";
 * }} props
 */
export default function ProjectCard({
  id,
  title,
  sector,
  description,
  businessHighlight,
  tags,
  technologies = [],
  github,
  demo,
  image,
  coverFormat = "landscape",
}) {
  const headingId = `project-${id}`;
  const projectLinks = { github, demo };
  const displayTags = tags?.length ? tags : technologies;
  const isPortrait = coverFormat === "portrait";

  return (
    <article className={projectCardClass(coverFormat)} aria-labelledby={headingId}>
      <figure className={projectCoverFigureClass(coverFormat)}>
        <ProjectCover image={image} title={title} coverFormat={coverFormat} />
      </figure>

      <div
        className={cn(
          "flex flex-col p-6 sm:p-8",
          isPortrait && "lg:h-full lg:min-h-0 lg:justify-between lg:p-8 lg:pl-10 lg:pr-10",
        )}
      >
        <div className={cn(isPortrait && "space-y-5")}>
          <header>
            {sector && (
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-400/90">
                {sector}
              </p>
            )}
            <h3 id={headingId} className="text-xl font-bold tracking-tight text-zinc-50">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
            {businessHighlight && (
              <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-200">
                {businessHighlight}
              </p>
            )}
          </header>

          {displayTags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Etiquetas de ${title}`}>
              {displayTags.map((tag) => (
                <li key={tag} className={UI.projectTag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className={cn("flex flex-col gap-3 sm:flex-row", isPortrait ? "pt-6 lg:pt-8" : "mt-6")}>
          {PROJECT_ACTIONS.map(({ id: actionId, label, hrefKey, style }) => {
            const href = projectLinks[hrefKey];
            if (!href) return null;

            return (
              <a
                key={actionId}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(ACTION_STYLES[style], "sm:max-w-[220px]")}
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
