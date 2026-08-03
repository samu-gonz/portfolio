import { SIDEBAR_BRAND, TECH_SECTIONS } from "../../data/portfolioProfile";
import ContactSection from "./ContactSection";
import SGLabsLogo from "./SGLabsLogo";
import TechStackGroup from "./TechStackGroup";
import { UI } from "./uiTokens";

/**
 * @param {{ onRequestContact?: () => void }} props
 */
export default function LeftSidebar({ onRequestContact }) {
  return (
    <aside className={UI.sidebar}>
      <div className="space-y-6 sm:space-y-8">
        <header className="border-b border-zinc-800/40 pb-6 sm:pb-8">
          <SGLabsLogo />
          <div className="mt-6 sm:mt-7">
            <h2 className={UI.sidebarBrandTitle}>{SIDEBAR_BRAND.title}</h2>
            <p className={UI.sidebarBrandSubtitle}>{SIDEBAR_BRAND.subtitle}</p>
          </div>
        </header>

        {TECH_SECTIONS.map((section) => (
          <TechStackGroup key={section.id} section={section} />
        ))}
      </div>

      <ContactSection onRequestContact={onRequestContact} />
    </aside>
  );
}
