"use client";

import GuaranteesSection from "./GuaranteesSection";
import LeftSidebar from "./LeftSidebar";
import ProfessionalSummary from "./ProfessionalSummary";
import ProjectGrid from "./ProjectGrid";
import RestartIntroControl from "./RestartIntroControl";
import ServicesSection from "./ServicesSection";
import { UI } from "./uiTokens";

/**
 * @param {{ onRestartIntro?: () => void }} props
 */
export default function PortfolioLayout({ onRestartIntro }) {
  return (
    <div className={UI.layout}>
      <LeftSidebar />

      <main className={UI.main}>
        <ProfessionalSummary />
        <ServicesSection />
        <ProjectGrid />
        <GuaranteesSection />
        <RestartIntroControl onRestartIntro={onRestartIntro} />
      </main>
    </div>
  );
}
