"use client";

import { useCallback, useState } from "react";
import AgencyHero from "./AgencyHero";
import AgencyPillars from "./AgencyPillars";
import ContactModal from "./ContactModal";
import FinalCta from "./FinalCta";
import GuaranteesSection from "./GuaranteesSection";
import LeftSidebar from "./LeftSidebar";
import MobileStickyCta from "./MobileStickyCta";
import ProjectGrid from "./ProjectGrid";
import ServicesSection from "./ServicesSection";
import { PAGE_SECTIONS } from "../../data/portfolioProfile";
import { UI } from "./uiTokens";

export default function PortfolioLayout() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  const scrollToProjects = useCallback(() => {
    const target = document.getElementById(PAGE_SECTIONS.projects.id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className={UI.layout}>
      <main className={`${UI.main} order-1 pb-24 lg:order-2 lg:pb-20`}>
        <AgencyHero onPrimaryCta={openContact} onSecondaryCta={scrollToProjects} />
        <AgencyPillars />
        <ServicesSection />
        <ProjectGrid />
        <GuaranteesSection />
        <FinalCta onRequestContact={openContact} />
      </main>

      <LeftSidebar onRequestContact={openContact} />

      {!contactOpen && <MobileStickyCta onRequestContact={openContact} />}
      <ContactModal open={contactOpen} onClose={closeContact} />
    </div>
  );
}
