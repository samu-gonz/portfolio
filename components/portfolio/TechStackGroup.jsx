import { UI } from "./uiTokens";

/**
 * @param {{
 *   section: {
 *     id: string;
 *     label: string;
 *     description?: string;
 *     items: string[];
 *   };
 * }} props
 */
export default function TechStackGroup({ section: { id, label, description, items } }) {
  return (
    <section id={`tech-${id}`} aria-labelledby={`tech-${id}-heading`}>
      <h2 id={`tech-${id}-heading`} className={UI.sectionEyebrow}>
        {label}
      </h2>
      {description && <p className={UI.techDescription}>{description}</p>}
      <ul className={`${UI.techBadgeList} mt-3`} aria-label={`Tecnologías de ${label}`}>
        {items.map((tech) => (
          <li key={tech} className={UI.techBadge}>
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
