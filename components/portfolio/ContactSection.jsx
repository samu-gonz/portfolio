"use client";

import EmailContactLink from "../EmailContactLink";
import { PORTFOLIO_UI, SIDEBAR_CONTACT } from "../../data/portfolioProfile";
import { useExternalNavigation } from "../../hooks/useExternalNavigation";
import ArrowIcon from "./ArrowIcon";
import { UI } from "./uiTokens";

/**
 * @param {{ variant?: "cv" | "links" }} props
 */
export default function ContactSection({ variant = "links" }) {
  const { navigateExternal, navigateWithFallback, resolveAbsoluteUrl } = useExternalNavigation();
  const { cv, social, email } = SIDEBAR_CONTACT;

  if (variant === "cv") {
    const handleCvClick = (event) => {
      event.preventDefault();
      const target = resolveAbsoluteUrl(cv.href);
      navigateWithFallback(target, cv.href);
    };

    return (
      <section aria-label={PORTFOLIO_UI.contactDirect} className="border-t border-zinc-800/50 pt-4">
        <h2 className={`mb-3 ${UI.sectionEyebrow}`}>{PORTFOLIO_UI.contactDirect}</h2>
        <a
          href={cv.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCvClick}
          className={UI.contactPrimary}
        >
          {cv.label}
        </a>
      </section>
    );
  }

  const handleSocialClick = (href) => (event) => {
    event.preventDefault();
    navigateExternal(href);
  };

  return (
    <nav
      aria-label={PORTFOLIO_UI.contactNav}
      className="relative z-10 mt-8 space-y-3 border-t border-zinc-800/50 pt-6 pb-8 lg:mt-0"
    >
      {social.map(({ id, href, label }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialClick(href)}
          className={UI.contactLink}
        >
          <span>{label}</span>
          <ArrowIcon />
        </a>
      ))}

      <EmailContactLink className={UI.contactLink}>
        <span>{email.label}</span>
        <ArrowIcon />
      </EmailContactLink>
    </nav>
  );
}
