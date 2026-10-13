const ANALYSIS_CTA = "Pedir mi análisis gratis";

const PROCESS_STEPS = [
  {
    id: "analysis",
    title: "Análisis gratis",
    description: "Miro tu web y te digo qué cambiar primero. Sin compromiso y sin llamada.",
  },
  {
    id: "proposal",
    title: "Propuesta Clara",
    description: "Alcance, plazos y precio cerrado sin letra pequeña.",
  },
  {
    id: "build",
    title: "Diseño y Desarrollo",
    description: "Avances reales en tiempo real con rondas de revisión.",
  },
  {
    id: "launch",
    title: "Lanzamiento y Soporte",
    description: "Publicación, formación de uso y acompañamiento continuo.",
  },
];

const FREE_ANALYSIS = {
  eyebrow: "Análisis gratuito",
  title: "Te digo qué está frenando a tu web",
  description:
    "En 24-48 h te escribo por correo con tres cosas concretas: qué entiende un cliente al entrar, dónde se pierden llamadas o reservas y el primer cambio que más impacto tendría. Es gratis. Si no encaja, no hay propuesta ni seguimiento.",
  includes: [
    "Qué ve un cliente en los primeros segundos",
    "Dónde se escapan las llamadas o las reservas",
    "Por dónde empezar, en lenguaje claro",
  ],
};

const LIMITED_AVAILABILITY = {
  eyebrow: "Disponibilidad",
  title: "Pocos proyectos a la vez, para atenderte de verdad",
  description:
    "No paso tu negocio por un comercial. Trabajo pocos encargos a la vez para responderte yo y entregar sin colas.",
  perks: [
    "El análisis es gratis y sin compromiso",
    "Hablas con quien diseña y programa",
    "Precio cerrado por escrito antes de empezar",
  ],
};

export { ANALYSIS_CTA, PROCESS_STEPS, LIMITED_AVAILABILITY, FREE_ANALYSIS };
