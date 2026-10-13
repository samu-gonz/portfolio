import Link from "next/link";
import LegalDocument from "../../components/portfolio/LegalDocument";
import { LEGAL_IDENTITY, PROFILE } from "../../data/portfolioProfile";

export const metadata = {
  title: "Política de privacidad | SG Labs Studio",
  description:
    "Información sobre el tratamiento de datos personales en sglabsstudio.com conforme al RGPD y la LOPDGDD.",
};

export default function PrivacidadPage() {
  return (
    <LegalDocument title="Política de privacidad" updated="13 de octubre de 2026">
      <p>
        Esta información se facilita antes de que envíes datos, conforme a los artículos 13 y 14 del
        Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h2>Responsable</h2>
      <p>
        {LEGAL_IDENTITY.holder}, que opera bajo el nombre comercial {LEGAL_IDENTITY.tradeName}. Contacto:{" "}
        <a
          className="text-violet-200 underline-offset-2 hover:underline"
          href={PROFILE.links.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          {PROFILE.email}
        </a>
        . No hay delegado de protección de datos: el volumen y el tipo de datos no exigen designarlo.
      </p>

      <h2>Qué datos tratamos</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Nombre completo.</li>
        <li>Correo electrónico.</li>
        <li>Nombre del negocio o sector.</li>
        <li>Mensaje o dirección de la web actual, si lo escribes.</li>
        <li>
          Datos técnicos que el servidor puede registrar para mantener la web disponible y segura, como
          la dirección IP o el tipo de navegador.
        </li>
      </ul>
      <p>
        No pedimos datos especialmente protegidos ni datos de menores. El sitio no se dirige a menores
        de 14 años.
      </p>

      <h2>Para qué y con qué base</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Responder a tu solicitud de análisis y, si encaja, preparar una propuesta. La base es el
          artículo 6.1.b del RGPD: medidas previas a un posible contrato, a petición tuya.
        </li>
        <li>
          Mantener la seguridad y el funcionamiento del sitio. La base es el artículo 6.1.f del RGPD:
          interés legítimo en proteger la web, limitado a ese fin.
        </li>
      </ul>
      <p>
        No hay decisiones automatizadas ni elaboración de perfiles. No usamos estos datos para enviar
        publicidad no solicitada, conforme al artículo 21 de la LSSI-CE. Si más adelante quisiéramos
        escribirte con fines comerciales distintos de tu solicitud, te pediríamos consentimiento.
      </p>

      <h2>Cómo se envían</h2>
      <p>
        El formulario no guarda los datos en un servidor de esta web. Al enviarlo se abre Gmail con el
        mensaje preparado y dirigido a {PROFILE.email}. El envío lo realizas tú desde tu cuenta de
        Google. A partir de ahí, el mensaje queda en esa conversación de correo.
      </p>

      <h2>Durante cuánto tiempo</h2>
      <p>
        Conservamos la conversación el tiempo necesario para responder y, si llegamos a trabajar juntos,
        durante la relación y los plazos en los que puedan exigirse responsabilidades. Si no hay encargo,
        no mantenemos el mensaje más allá de lo necesario para cerrar la consulta.
      </p>

      <h2>Destinatarios</h2>
      <p>
        No vendemos los datos ni los cedemos para publicidad. Google interviene porque tú redactas y
        envías el mensaje desde Gmail. El alojamiento de la web puede tratar datos técnicos de conexión
        como encargado, solo para prestar el servicio. No hacemos transferencias internacionales propias;
        si usas Gmail, el tratamiento que haga Google se rige por su propia información y garantías.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedir acceso, rectificación, supresión, limitación, oposición y portabilidad escribiendo a{" "}
        {PROFILE.email}. También puedes reclamar ante la Agencia Española de Protección de Datos
        (aepd.es) si consideras que el tratamiento no se ajusta a la norma. Responderemos en el plazo
        que marca el RGPD.
      </p>

      <h2>Cookies</h2>
      <p>
        El detalle del almacenamiento técnico está en la{" "}
        <Link href="/cookies" className="text-violet-200 underline-offset-2 hover:underline">
          política de cookies
        </Link>
        .
      </p>
    </LegalDocument>
  );
}
