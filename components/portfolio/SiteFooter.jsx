import Link from "next/link";
import { PROFILE } from "../../data/portfolioProfile";
import { logoFont } from "../../lib/fonts";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md">
          <p className={`${logoFont.className} text-sm font-bold tracking-[0.16em] text-white`}>
            SG LABS STUDIO
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Estudio de Desarrollo &amp; Diseño Web.
          </p>
          <a
            href={PROFILE.links.email}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-medium text-violet-200 underline-offset-4 transition hover:text-white hover:underline"
          >
            {PROFILE.email}
          </a>
        </div>

        <nav aria-label="Información legal" className="flex flex-col gap-3 text-sm">
          <Link href="/privacidad" className="text-zinc-300 transition hover:text-white">
            Política de privacidad
          </Link>
          <Link href="/cookies" className="text-zinc-300 transition hover:text-white">
            Política de cookies
          </Link>
          <Link href="/aviso-legal" className="text-zinc-300 transition hover:text-white">
            Aviso legal
          </Link>
        </nav>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-zinc-500 sm:px-6 lg:px-8">
          © {year} SG Labs Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
