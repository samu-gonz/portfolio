"use client";

import { useCallback, useState } from "react";
import AgencyHero from "./AgencyHero";
import AgencyPillars from "./AgencyPillars";
import ContactModal from "./ContactModal";
import GuaranteesSection from "./GuaranteesSection";
import LeftSidebar from "./LeftSidebar";
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
      <LeftSidebar onRequestContact={openContact} />

      <main className={UI.main}>
        <AgencyHero onPrimaryCta={openContact} onSecondaryCta={scrollToProjects} />
        <AgencyPillars />
        <ServicesSection />
        <ProjectGrid />
        <GuaranteesSection />
      </main>

      <ContactModal open={contactOpen} onClose={closeContact} />
    </div>
  );
}
