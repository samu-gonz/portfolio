"use client";

import EmailContactLink from "../EmailContactLink";
import { PORTFOLIO_UI, SIDEBAR_CONTACT } from "../../data/portfolioProfile";
import { UI } from "./uiTokens";

/**
 * @param {{ onRequestContact?: () => void }} props
 */
export default function ContactSection({ onRequestContact }) {
  const { email, phone, whatsapp } = SIDEBAR_CONTACT;

  return (
    <section id="contacto" aria-label={PORTFOLIO_UI.contactDirect} className={UI.contactPanel}>
      <h2 className={UI.sectionEyebrow}>{PORTFOLIO_UI.contactDirect}</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        Cuéntanos qué negocio tienes. Te respondemos con una propuesta clara.
      </p>

      <div className="mt-4 space-y-2.5">
        {onRequestContact && (
          <button
            type="button"
            onClick={onRequestContact}
            className={`${UI.ctaPrimary} w-full`}
          >
            Solicitar Análisis Gratuito
          </button>
        )}

        <EmailContactLink className={UI.contactLink}>
          <span>{email.label}</span>
        </EmailContactLink>

        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className={UI.contactLink}
        >
          <span>{whatsapp.label}</span>
        </a>

        <a href={phone.href} className={UI.contactLink}>
          <span>{phone.label}</span>
        </a>
      </div>
    </section>
  );
}
