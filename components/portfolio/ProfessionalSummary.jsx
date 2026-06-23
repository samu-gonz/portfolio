import { PAGE_SECTIONS, PROFILE, PROFILE_BIO } from "../../data/portfolioProfile";
import SGLabsLogo from "./SGLabsLogo";
import { UI } from "./uiTokens";

export default function ProfessionalSummary() {
  const { profile } = PAGE_SECTIONS;
  const titleId = `${profile.id}-title`;

  return (
    <section id={profile.id} aria-labelledby={titleId} className="max-w-3xl">
      <header>
        <p className={UI.sectionEyebrow}>{profile.eyebrow}</p>
        <div className="mt-3 flex flex-col gap-4 sm:mt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <h1
              id={titleId}
              className="text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl"
            >
              {profile.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-500">{PROFILE.role}</p>
          </div>
          <SGLabsLogo
            className="shrink-0 self-start sm:self-center"
            iconClassName="h-10 w-10 shrink-0 text-white"
            textClassName="text-lg font-bold tracking-wide text-white sm:text-xl"
          />
        </div>
      </header>
      <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:mt-6">{PROFILE_BIO}</p>
    </section>
  );
}
