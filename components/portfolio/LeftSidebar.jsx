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
            <p className={`${UI.sidebarBrandSubtitle} mt-3`}>{SIDEBAR_BRAND.extra}</p>
            <ul className="mt-4 space-y-2">
              {SIDEBAR_BRAND.points.map((point) => (
                <li key={point} className="flex gap-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                  <span className="mt-0.5 shrink-0 text-cyan-400/80" aria-hidden>
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>

      <ContactSection onRequestContact={onRequestContact} />
    </aside>
  );
}
