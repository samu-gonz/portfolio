"use client";

import { PROFILE } from "../data/portfolioProfile";

const CONTACT = {
  location: PROFILE.location,
  phone: PROFILE.phone,
  email: PROFILE.links.email.replace("mailto:", ""),
  github: "github.com/samu-gonz",
};

export default function CVTemplate() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-950 p-4 antialiased sm:p-8 print:bg-white print:p-0">
      <button
        type="button"
        onClick={handlePrint}
        className="mb-8 rounded-xl bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-950 shadow-md transition hover:bg-white print:hidden"
      >
        Guardar como PDF / Imprimir
      </button>

      <div className="w-full max-w-[800px] rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 shadow-xl sm:p-12 print:max-w-full print:border-none print:bg-white print:text-black print:shadow-none">
        <header className="border-b border-zinc-800/60 pb-6 print:border-zinc-200">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-50 print:text-black">
            Samuel González Rodríguez
          </h1>
          <p className="mt-1 text-lg font-medium text-zinc-400 print:text-zinc-600">Desarrollador Full-Stack</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 print:text-zinc-500">
            <span>{CONTACT.location}</span>
            <span>{CONTACT.email}</span>
            <span>{CONTACT.phone}</span>
            <span>{CONTACT.github}</span>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-400">
            Perfil Profesional
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 print:text-zinc-700">
            Desarrollador Full-Stack enfocado en el diseño, construcción y despliegue de aplicaciones web
            modernas, eficientes y escalables. Especializado en arquitecturas robustas en el backend y en la
            creación de interfaces de usuario reactivas, intuitivas y optimizadas a nivel de rendimiento. Con
            capacidad para gestionar proyectos desde la base de datos hasta producción, priorizando la limpieza
            del código, la experiencia de usuario (UX) y la resolución ágil de problemas técnicos complejos.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-400">
            Competencias Técnicas
          </h2>
          <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <span className="font-semibold text-zinc-300 print:text-zinc-800">Frontend:</span>
              <p className="mt-0.5 text-zinc-400 print:text-zinc-600">
                React, Next.js, TypeScript, Vite, Tailwind CSS
              </p>
            </div>
            <div>
              <span className="font-semibold text-zinc-300 print:text-zinc-800">Backend & Bases de Datos:</span>
              <p className="mt-0.5 text-zinc-400 print:text-zinc-600">Java, Node.js, Express, SQL, MySQL</p>
            </div>
            <div>
              <span className="font-semibold text-zinc-300 print:text-zinc-800">Herramientas & Despliegue:</span>
              <p className="mt-0.5 text-zinc-400 print:text-zinc-600">
                Integración de IA (Chatbots), Nodemailer, GitHub, Vercel
              </p>
            </div>
            <div>
              <span className="font-semibold text-zinc-300 print:text-zinc-800">Otros Datos de Interés:</span>
              <p className="mt-0.5 text-zinc-400 print:text-zinc-600">
                Inglés C1 (Bilingüe) • Permiso de conducir y vehículo propio
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-400">
            Proyectos Destacados
          </h2>
          <div className="mt-4 space-y-6">
            <div className="print:break-inside-avoid">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-zinc-100 print:text-zinc-900">Ghostwrite AI</h3>
                <span className="text-xs text-zinc-500 print:text-zinc-400">AI Integration</span>
              </div>
              <p className="mt-0.5 text-xs text-zinc-400 print:text-zinc-500">
                React • Vite • Tailwind CSS • OpenAI/Claude API
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 print:text-zinc-700">
                Aplicación web de asistencia de escritura inteligente mediante IA, diseñada con una interfaz
                fluida, reactiva y optimizada para la automatización de contenidos en entornos B2B.
              </p>
            </div>

            <div className="print:break-inside-avoid">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-zinc-100 print:text-zinc-900">Casa Cueva las Palomas</h3>
                <span className="text-xs text-zinc-500 print:text-zinc-400">AI Integration</span>
              </div>
              <p className="mt-0.5 text-xs text-zinc-400 print:text-zinc-500">React • Vite • Tailwind CSS • Frontend</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 print:text-zinc-700">
                Plataforma web profesional para alojamiento rural turístico con interfaz responsive avanzada y un
                chatbot conversacional con IA integrada para la automatización de la atención al cliente.
              </p>
            </div>

            <div className="print:break-inside-avoid">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-zinc-100 print:text-zinc-900">Guachinche El Realejo</h3>
                <span className="text-xs text-zinc-500 print:text-zinc-400">AI Integration</span>
              </div>
              <p className="mt-0.5 text-xs text-zinc-400 print:text-zinc-500">
                Node.js • Express • React • Nodemailer • Full-Stack
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 print:text-zinc-700">
                Aplicación Full-Stack para gestión hostelera. Integra un menú digital dinámico, motor de reservas
                automatizado con alertas por email y un asistente virtual con IA para gestionar consultas y
                comandas.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 border-t border-zinc-800/60 pt-6 print:border-zinc-200">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-400">
            Formación Académica
          </h2>
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex justify-between gap-4 print:break-inside-avoid">
              <div>
                <span className="font-bold text-zinc-200 print:text-zinc-800">
                  Técnico Superior en Desarrollo de Aplicaciones Web (DAW)
                </span>
                <p className="mt-0.5 text-zinc-400 print:text-zinc-500">IES Domingo Pérez Minik</p>
              </div>
              <span className="shrink-0 text-xs font-medium text-zinc-500 print:text-zinc-400">Cursando</span>
            </div>
            <div className="print:break-inside-avoid">
              <span className="font-bold text-zinc-200 print:text-zinc-800">Bachillerato</span>
              <p className="mt-0.5 text-zinc-400 print:text-zinc-500">IES Santa Ana</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
