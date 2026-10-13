import Link from "next/link";
import LegalDocument from "../../components/portfolio/LegalDocument";
import { LEGAL_IDENTITY, PROFILE } from "../../data/portfolioProfile";

export const metadata = {
  title: "Aviso legal | SG Labs Studio",
  description:
    "Información del prestador de sglabsstudio.com exigida por la Ley 34/2002 de servicios de la sociedad de la información.",
};

export default function AvisoLegalPage() {
  return (
    <LegalDocument title="Aviso legal" updated="13 de octubre de 2026">
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información
        y de comercio electrónico (LSSI-CE), se facilita la información del prestador de{" "}
        {LEGAL_IDENTITY.website}.
      </p>

      <h2>Identificación</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Titular: {LEGAL_IDENTITY.holder}.</li>
        <li>Nombre comercial: {LEGAL_IDENTITY.tradeName}.</li>
        <li>Actividad: diseño y desarrollo de páginas web y servicios digitales asociados.</li>
        <li>Sitio web: {LEGAL_IDENTITY.website}.</li>
        <li>
          Correo:{" "}
          <a
            className="text-violet-200 underline-offset-2 hover:underline"
            href={PROFILE.links.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PROFILE.email}
          </a>
          .
        </li>
        {LEGAL_IDENTITY.taxId ? <li>NIF: {LEGAL_IDENTITY.taxId}.</li> : null}
        {LEGAL_IDENTITY.address ? <li>Domicilio: {LEGAL_IDENTITY.address}.</li> : null}
      </ul>
      <p>
        El servicio se presta a distancia. No hay un local abierto al público. El NIF y el domicilio a
        efectos de notificaciones se indican en la propuesta previa a cualquier encargo.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El sitio presenta los servicios del estudio, trabajos realizados y un formulario para solicitar un
        análisis gratuito. Navegar por la web es gratuito. Los contenidos son informativos y no constituyen
        una oferta contractual cerrada: el encargo solo existe cuando aceptas por escrito una propuesta con
        alcance, plazo y precio.
      </p>
      <p>
        No hay compra directa en esta web, por lo que no se aplica aquí el botón de desistimiento previsto
        para los contratos a distancia celebrados en línea. Si en un encargo posterior te corresponde el
        derecho de desistimiento como consumidor, se indicará en esa propuesta.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, el diseño y el código de este sitio pertenecen a su titular, salvo los contenidos y
        marcas de los proyectos mostrados, que corresponden a sus respectivos dueños. No está permitido
        copiarlos o reutilizarlos sin autorización, más allá de la cita breve o del uso privado que permita
        la ley.
      </p>

      <h2>Responsabilidad y enlaces</h2>
      <p>
        La información se ofrece de buena fe y puede actualizarse. Algunos proyectos enlazan a sitios de
        clientes o demostraciones. {LEGAL_IDENTITY.tradeName} no controla esos sitios una vez publicados por
        sus responsables. Los enlaces no suponen una recomendación automática de todo su contenido.
      </p>

      <h2>Privacidad y cookies</h2>
      <p>
        El tratamiento de datos se describe en la{" "}
        <Link href="/privacidad" className="text-violet-200 underline-offset-2 hover:underline">
          política de privacidad
        </Link>{" "}
        y el almacenamiento técnico en la{" "}
        <Link href="/cookies" className="text-violet-200 underline-offset-2 hover:underline">
          política de cookies
        </Link>
        .
      </p>

      <h2>Norma aplicable</h2>
      <p>
        Este aviso se rige por la normativa española. Si actúas como consumidor, puedes acudir a los
        juzgados de tu domicilio. Nada de lo anterior limita los derechos que la ley te reconoce y que no
        pueden excluirse por contrato.
      </p>
    </LegalDocument>
  );
}
