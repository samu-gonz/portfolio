import Link from "next/link";
import LegalDocument from "../../components/portfolio/LegalDocument";
import { LEGAL_IDENTITY, PROFILE } from "../../data/portfolioProfile";

export const metadata = {
  title: "Política de cookies | SG Labs Studio",
  description:
    "Información sobre las cookies y el almacenamiento local que usa sglabsstudio.com.",
};

export default function CookiesPage() {
  return (
    <LegalDocument title="Política de cookies" updated="13 de octubre de 2026">
      <p>
        Esta política explica cómo {LEGAL_IDENTITY.tradeName} usa cookies y tecnologías similares en{" "}
        {LEGAL_IDENTITY.website}, conforme al artículo 22.2 de la Ley 34/2002 (LSSI-CE) y a la guía de
        cookies de la Agencia Española de Protección de Datos.
      </p>

      <h2>Qué son</h2>
      <p>
        Una cookie es un pequeño archivo que un sitio puede guardar en tu navegador. El almacenamiento
        local cumple una función parecida: guarda un dato en tu dispositivo para recordarlo después.
      </p>

      <h2>Qué usa esta web</h2>
      <p>
        sglabsstudio.com no instala cookies de análisis, publicidad, redes sociales ni personalización.
        No hay Google Analytics, píxeles publicitarios ni herramientas de medición de terceros.
      </p>
      <p>
        El único almacenamiento es técnico y sirve para recordar que has cerrado el aviso de cookies.
        No identifica tu nombre ni tu correo. Al estar limitado a una preferencia que tú pides al pulsar
        «Entendido», no requiere un consentimiento adicional.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="bg-white/[0.04] text-zinc-200">
            <tr>
              <th className="px-4 py-3 font-semibold">Nombre</th>
              <th className="px-4 py-3 font-semibold">Tipo</th>
              <th className="px-4 py-3 font-semibold">Finalidad</th>
              <th className="px-4 py-3 font-semibold">Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-white/10 align-top">
              <td className="px-4 py-3">sglabs-cookie-info</td>
              <td className="px-4 py-3">Almacenamiento local técnico</td>
              <td className="px-4 py-3">Recordar que cerraste el aviso de cookies</td>
              <td className="px-4 py-3">6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Servicios de terceros</h2>
      <p>
        El formulario abre Gmail en una pestaña de Google para que envíes tú el mensaje a{" "}
        {PROFILE.email}. A partir de ese momento se aplica la política de Google, no la de esta web. Los
        enlaces «Ver web» de los proyectos llevan a sitios de terceros, que pueden usar sus propias
        cookies cuando entras en ellos.
      </p>

      <h2>Cómo gestionarlas</h2>
      <p>
        Puedes borrar el almacenamiento local y las cookies desde la configuración de Chrome, Firefox,
        Safari o Edge. Si borras los datos de este sitio, el aviso de cookies volverá a mostrarse.
      </p>

      <h2>Más información</h2>
      <p>
        El tratamiento de los datos del formulario está en la{" "}
        <Link href="/privacidad" className="text-violet-200 underline-offset-2 hover:underline">
          política de privacidad
        </Link>
        . Para cualquier duda, escribe a {PROFILE.email}.
      </p>
    </LegalDocument>
  );
}
