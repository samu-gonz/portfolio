import CookieNotice from "./CookieNotice";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

/**
 * @param {{ title: string; updated: string; children: import("react").ReactNode }} props
 */
export default function LegalDocument({ title, updated, children }) {
  return (
    <div className="bg-gradient-glow min-h-screen pb-[var(--cookie-banner-offset,0px)] text-zinc-100">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/80">SG Labs Studio</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-zinc-500">Última actualización: {updated}</p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-zinc-300 sm:text-base [&_h2]:pt-2 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white">
          {children}
        </div>
      </main>
      <SiteFooter />
      <CookieNotice />
    </div>
  );
}
