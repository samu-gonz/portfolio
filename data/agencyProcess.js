const PROCESS_STEPS = [
  {
    id: "analysis",
    title: "Análisis gratis",
    description:
      "Revisamos tu web actual (o si no tienes) y te decimos qué está frenando llamadas, reservas o ventas.",
  },
  {
    id: "proposal",
    title: "Propuesta clara",
    description:
      "Te enviamos alcance, plazos y precio sin letra pequeña. Si no encaja, no pasa nada.",
  },
  {
    id: "build",
    title: "Diseño y desarrollo",
    description:
      "Vas viendo avances reales. Puedes pedir cambios antes de publicar.",
  },
  {
    id: "launch",
    title: "Lanzamiento y soporte",
    description:
      "Publicamos la web, te enseñamos a usarla y quedamos disponibles si necesitas ajustes.",
  },
];

const FREE_ANALYSIS = {
  eyebrow: "Contacto",
  title: "Solicitar análisis gratuito",
  description:
    "Revisamos tu web actual (o si todavía no tienes) y te devolvemos una auditoría clara: qué está frenando llamadas, reservas o ventas, qué mejoraríamos y un presupuesto sin compromiso.",
  benefits: [
    {
      id: "response-time",
      title: "Respuesta en 24-48h",
      detail: "Te escribimos con hallazgos concretos, no con una plantilla genérica.",
    },
    {
      id: "no-commitment",
      title: "Sin compromiso",
      detail: "Si no encaja, no pasa nada. No hay letra pequeña ni permanencia.",
    },
    {
      id: "personalized",
      title: "Análisis personalizado",
      detail: "Miramos tu negocio, tu cliente y cómo captas hoy: no es un informe automático.",
    },
  ],
};

const FIRST_CLIENTS_OFFER = {
  eyebrow: "Primeros clientes",
  title: "Condiciones especiales mientras crecemos juntos",
  description:
    "Estamos ampliando cartera con negocios reales. Si encajas como proyecto piloto, tendrás prioridad, trato directo y condiciones más favorables a cambio de feedback y, si estás contento, una reseña honesta.",
  perks: [
    "Análisis gratuito de tu situación actual",
    "Comunicación directa por WhatsApp",
    "Precio adaptado a primeros proyectos",
    "Entrega con seguimiento cercano",
  ],
};

export { PROCESS_STEPS, FIRST_CLIENTS_OFFER, FREE_ANALYSIS };
