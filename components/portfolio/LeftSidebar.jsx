import { SIDEBAR_BRAND, TECH_SECTIONS } from "../../data/portfolioProfile";
import ContactSection from "./ContactSection";
import TechStackGroup from "./TechStackGroup";
import { UI } from "./uiTokens";

export default function LeftSidebar() {
  return (
    <aside className={UI.sidebar}>
      <div className="space-y-6 sm:space-y-8">
        <header className="border-b border-zinc-800/40 pb-6 sm:pb-8">
          <h2 className={UI.sidebarBrandTitle}>{SIDEBAR_BRAND.title}</h2>
          <p className={UI.sidebarBrandSubtitle}>{SIDEBAR_BRAND.subtitle}</p>
        </header>

        {TECH_SECTIONS.map((section) => (
          <TechStackGroup key={section.id} section={section} />
        ))}
      </div>

      <ContactSection />
    </aside>
  );
}
