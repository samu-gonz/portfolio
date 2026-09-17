"use client";

import { useCallback } from "react";
import AgencyHero from "./AgencyHero";
import AgencyPillars from "./AgencyPillars";
import FinalCta from "./FinalCta";
import FirstClientsOffer from "./FirstClientsOffer";
import GuaranteesSection from "./GuaranteesSection";
import LeftSidebar from "./LeftSidebar";
import MobileStickyCta from "./MobileStickyCta";
import ProjectGrid from "./ProjectGrid";
import ServicesSection from "./ServicesSection";
import WorkProcessSection from "./WorkProcessSection";
import { PAGE_SECTIONS } from "../../data/portfolioProfile";
import { UI } from "./uiTokens";

export default function PortfolioLayout() {
  const scrollToProjects = useCallback(() => {
    const target = document.getElementById(PAGE_SECTIONS.projects.id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToAnalysis = useCallback(() => {
    const target = document.getElementById("empezar");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className={UI.layout}>
      <main className={`${UI.main} order-1 pb-24 lg:order-2 lg:pb-20 2xl:pb-24 3xl:pb-28`}>
        <AgencyHero onPrimaryCta={scrollToAnalysis} onSecondaryCta={scrollToProjects} />
        <AgencyPillars />
        <ServicesSection />
        <WorkProcessSection />
        <ProjectGrid />
        <FirstClientsOffer onRequestContact={scrollToAnalysis} />
        <GuaranteesSection />
        <FinalCta />
      </main>

      <LeftSidebar onRequestContact={scrollToAnalysis} />

      <MobileStickyCta onRequestContact={scrollToAnalysis} />
    </div>
  );
}
