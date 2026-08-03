import { SIDEBAR_BRAND } from "../../data/portfolioProfile";
import ContactSection from "./ContactSection";
import SGLabsLogo from "./SGLabsLogo";
import { UI } from "./uiTokens";

/**
 * @param {{ onRequestContact?: () => void }} props
 */
export default function LeftSidebar({ onRequestContact }) {
  return (
    <aside className={`${UI.sidebar} order-2 lg:order-1`}>
      <div className="hidden space-y-6 sm:space-y-8 lg:block">
        <header className="border-b border-zinc-800/40 pb-6 sm:pb-8">
          <SGLabsLogo />
          <div className="mt-6 sm:mt-7">
            <h2 className={UI.sidebarBrandTitle}>{SIDEBAR_BRAND.title}</h2>
            <p className={UI.sidebarBrandSubtitle}>{SIDEBAR_BRAND.subtitle}</p>
          </div>
        </header>
      </div>

      <ContactSection onRequestContact={onRequestContact} />
    </aside>
  );
}
