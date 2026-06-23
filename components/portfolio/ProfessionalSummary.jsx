import { PAGE_SECTIONS, PROFILE, PROFILE_BIO } from "../../data/portfolioProfile";
import { UI } from "./uiTokens";

export default function ProfessionalSummary() {
  const { profile } = PAGE_SECTIONS;
  const titleId = `${profile.id}-title`;

  return (
    <section id={profile.id} aria-labelledby={titleId} className="max-w-3xl">
      <header>
        <p className={UI.sectionEyebrow}>{profile.eyebrow}</p>
        <h1 id={titleId} className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl">
          {profile.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500">{PROFILE.role}</p>
      </header>
      <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:mt-6">{PROFILE_BIO}</p>
    </section>
  );
}
