"use client";

import Link from "next/link";
import EmailContactLink from "../EmailContactLink";
import { PORTFOLIO_UI, SIDEBAR_CONTACT } from "../../data/portfolioProfile";
import { useExternalNavigation } from "../../hooks/useExternalNavigation";
import ArrowIcon from "./ArrowIcon";
import { UI } from "./uiTokens";

export default function ContactSection() {
  const { navigateExternal } = useExternalNavigation();
  const { cv, social, email } = SIDEBAR_CONTACT;

  const handleSocialClick = (href) => (event) => {
    event.preventDefault();
    navigateExternal(href);
  };

  return (
    <section aria-label={PORTFOLIO_UI.contactDirect} className={UI.contactPanel}>
      <h2 className={UI.sectionEyebrow}>{PORTFOLIO_UI.contactDirect}</h2>

      <div className="mt-4 space-y-2.5">
        <Link href={cv.href} className={UI.contactCvPrimary}>
          {cv.label}
        </Link>

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
      </div>
    </section>
  );
}
