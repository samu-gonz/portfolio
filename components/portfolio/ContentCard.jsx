/**
 * Tarjeta de texto con la misma estructura interna que ProjectCard (sin imagen ni acciones).
 * @param {{ id: string; title: string; description: string }} props
 */
export default function ContentCard({ id, title, description }) {
  const headingId = `content-${id}`;

  return (
    <article
      className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 transition duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/40"
      aria-labelledby={headingId}
    >
      <div className="flex flex-col justify-center p-6 sm:p-8">
        <header>
          <h3 id={headingId} className="text-xl font-bold tracking-tight text-zinc-50">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
        </header>
      </div>
    </article>
  );
}
