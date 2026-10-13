import LegalDocument from "../../components/portfolio/LegalDocument";
import { PROFILE } from "../../data/portfolioProfile";

export const metadata = {
  title: "Aviso legal | SG Labs Studio",
  description: "Información legal del sitio web de SG Labs Studio.",
};

export default function AvisoLegalPage() {
  return (
    <LegalDocument title="Aviso legal" updated="13 de octubre de 2026">
      <p>
        Este sitio web, sglabsstudio.com, pertenece a SG Labs Studio, estudio de desarrollo y diseño web.
        El contacto es{" "}
        <a className="text-violet-200 underline-offset-2 hover:underline" href={PROFILE.links.email} target="_blank" rel="noopener noreferrer">
          samuelg@sglabsstudio.com
        </a>
        . El trabajo se realiza en remoto.
      </p>

      <h2>Objeto</h2>
      <p>
        La web presenta los servicios del estudio, casos de trabajo y un formulario para solicitar un
        análisis gratuito. El contenido es informativo y no constituye una oferta contractual cerrada hasta
        que exista una propuesta aceptada por escrito.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, el diseño y el código de este sitio pertenecen a SG Labs Studio, salvo los contenidos de
        terceros y las marcas de los proyectos mostrados, que corresponden a sus titulares. No está permitido
        reutilizarlos sin autorización.
      </p>

      <h2>Enlaces</h2>
      <p>
        Algunos proyectos enlazan a sitios de clientes o demostraciones. SG Labs Studio no controla el
        contenido de esas páginas una vez publicadas por sus responsables.
      </p>

      <h2>Ley aplicable</h2>
      <p>Este aviso se interpreta conforme a la normativa española.</p>
    </LegalDocument>
  );
}