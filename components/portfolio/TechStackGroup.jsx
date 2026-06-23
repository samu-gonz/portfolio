import { UI } from "./uiTokens";

/**
 * @param {{ section: { id: string; label: string; items: string[] } }} props
 */
export default function TechStackGroup({ section: { id, label, items } }) {
  return (
    <section id={`tech-${id}`} aria-labelledby={`tech-${id}-heading`}>
      <h2 id={`tech-${id}-heading`} className={UI.sectionEyebrow}>
        {label}
      </h2>
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
