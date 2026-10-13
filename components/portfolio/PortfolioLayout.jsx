import AboutStudio from "./AboutStudio";
import AgencyHero from "./AgencyHero";
import AgencyPillars from "./AgencyPillars";
import CookieNotice from "./CookieNotice";
import FinalCta from "./FinalCta";
import FirstClientsOffer from "./FirstClientsOffer";
import MobileStickyCta from "./MobileStickyCta";
import ProjectGrid from "./ProjectGrid";
import ServicesSection from "./ServicesSection";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import WorkProcessSection from "./WorkProcessSection";

export default function PortfolioLayout() {
  return (
    <div className="bg-gradient-glow relative min-h-screen pb-[var(--cookie-banner-offset,0px)] text-zinc-100 max-lg:pb-[max(6rem,var(--cookie-banner-offset,0px))]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl space-y-20 px-4 pb-8 pt-8 sm:space-y-28 sm:px-6 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <AgencyHero />
        <AgencyPillars />
        <ServicesSection />
        <WorkProcessSection />
        <ProjectGrid />
        <AboutStudio />
        <FirstClientsOffer />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileStickyCta />
      <CookieNotice />
    </div>
  );
}
