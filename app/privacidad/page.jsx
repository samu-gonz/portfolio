import LegalDocument from "../../components/portfolio/LegalDocument";

export const metadata = {
  title: "Política de privacidad | SG Labs Studio",
  description:
    "Cómo SG Labs Studio trata los datos que nos envías al solicitar un análisis gratuito.",
};

export default function PrivacidadPage() {
  return (
    <LegalDocument title="Política de privacidad" updated="13 de octubre de 2026">
      <p>
        Esta política explica qué datos puedes facilitarnos desde sglabsstudio.com y para qué los usamos.
        El responsable es SG Labs Studio. El canal de contacto es{" "}
        <a className="text-violet-200 underline-offset-2 hover:underline" href="mailto:samuelg@sglabsstudio.com">
          samuelg@sglabsstudio.com
        </a>
        .
      </p>

      <h2>Qué datos recogemos</h2>
      <p>
        Si solicitas un análisis gratuito, el formulario te pide nombre completo, correo electrónico, nombre
        del negocio o sector y, si quieres, un mensaje o la dirección de tu web actual.
      </p>

      <h2>Cómo se envían</h2>
      <p>
        El formulario no guarda los datos en un servidor de esta web. Al enviarlo se abre tu programa de
        correo con el mensaje preparado y dirigido a samuelg@sglabsstudio.com. El envío lo realizas tú desde
        tu propio correo.
      </p>

      <h2>Para qué los usamos</h2>
      <p>
        Usamos esos datos únicamente para responder a tu solicitud, preparar el análisis y, si encaja,
        enviarte una propuesta. No los vendemos ni los cedemos a terceros para publicidad.
      </p>

      <h2>Conservación y derechos</h2>
      <p>
        Conservamos la conversación el tiempo necesario para atender la consulta y el seguimiento del
        proyecto, si llega a iniciarse. Puedes pedir acceso, rectificación o supresión escribiendo a
        samuelg@sglabsstudio.com.
      </p>
    </LegalDocument>
  );
}
