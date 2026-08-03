"use client";

import EmailContactLink from "../EmailContactLink";
import { PORTFOLIO_UI, SIDEBAR_CONTACT } from "../../data/portfolioProfile";
import ArrowIcon from "./ArrowIcon";
import { UI } from "./uiTokens";

/**
 * @param {{ onRequestContact?: () => void }} props
 */
export default function ContactSection({ onRequestContact }) {
  const { whatsapp, email, phone } = SIDEBAR_CONTACT;

  return (
    <section
      id="contacto"
      aria-label={PORTFOLIO_UI.contactDirect}
      className={UI.contactPanel}
    >
      <h2 className={UI.sectionEyebrow}>{PORTFOLIO_UI.contactDirect}</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        Cuéntanos qué negocio tienes. Te respondemos con una propuesta clara.
      </p>

      <div className="mt-4 space-y-2.5">
        {onRequestContact && (
          <button
            type="button"
            onClick={onRequestContact}
            className="flex w-full items-center justify-center rounded-xl bg-cyan-400 px-4 py-3.5 text-sm font-bold text-[#041018] transition duration-300 hover:bg-cyan-300"
          >
            Solicitar Análisis Gratuito
          </button>
        )}

        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className={UI.contactLink}
        >
          <span>{whatsapp.label}</span>
          <ArrowIcon />
        </a>

        <a href={phone.href} className={UI.contactLink}>
          <span>{phone.label}</span>
          <ArrowIcon />
        </a>

        <EmailContactLink className={UI.contactLink}>
          <span>{email.label}</span>
          <ArrowIcon />
        </EmailContactLink>
      </div>
    </section>
  );
}
