import { TECH_SECTIONS } from "../../data/portfolioProfile";
import ContactSection from "./ContactSection";
import TechStackGroup from "./TechStackGroup";
import { UI } from "./uiTokens";

export default function LeftSidebar() {
  return (
    <aside className={UI.sidebar}>
      <div className="space-y-6 sm:space-y-8">
        {TECH_SECTIONS.map((section) => (
          <TechStackGroup key={section.id} section={section} />
        ))}
        <ContactSection variant="cv" />
      </div>

      <ContactSection variant="links" />
    </aside>
  );
}
