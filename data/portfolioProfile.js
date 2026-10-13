const STUDIO_EMAIL = "samuelg@sglabsstudio.com";

/**
 * Abre la redacción en Gmail en lugar del cliente de correo del sistema.
 * @param {{ to?: string; subject?: string; body?: string }} [options]
 */
export function gmailComposeUrl({ to = STUDIO_EMAIL, subject = "", body = "" } = {}) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
  });

  if (subject) params.set("su", subject);
  if (body) params.set("body", body);

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export const LEGAL_IDENTITY = {
  holder: "Samuel González Rodríguez",
  tradeName: "SG Labs Studio",
  website: "https://sglabsstudio.com",
  taxId: "",
  address: "",
};

export const PROFILE = {
  name: "SG Labs Studio",
  fullName: "SG Labs Studio",
  role: "Estudio de Desarrollo & Diseño Web",
  availability: "Plazas limitadas este trimestre",
  location: "Canarias, España",
  cvUrl: "/cv",
  email: STUDIO_EMAIL,
  links: {
    github: "https://github.com/samu-gonz",
    email: gmailComposeUrl(),
  },
};

export const PROFILE_BIO =
  "Diseño y desarrollo web a medida para PYMEs y empresas. Páginas ultra rápidas, pensadas para convertir visitas en llamadas, reservas y ventas.";

/** Mockup of this studio site (hero). Client covers live under /projects/*.png */
export const STUDIO_SITE_MOCKUP = {
  src: "/hero/sglabsstudio.png",
  urlLabel: "sglabsstudio.com",
  alt: "Captura de la web de SG Labs Studio",
};

export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Java", "Node.js", "Express", "SQL", "MySQL"],
};

export const SIDEBAR_BRAND = {
  title: "Webs que traen clientes",
  subtitle:
    "Ayudamos a PYMEs y empresas a verse profesionales online y convertir visitas en llamadas, reservas y ventas.",
  extra:
    "Diseño claro, carga rápida y un camino obvio para que te llamen o reserven. Hablas con quien diseña y desarrolla — sin tecnicismos ni agencias intermedias.",
  points: [
    "Trabajo remoto con empresas de cualquier lugar",
    "Análisis gratuito de tu web actual",
    "Disponibles para nuevos proyectos",
  ],
};

export const TECH_SECTIONS = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces rápidas, reactivas y 100% responsive.",
    items: TECH_STACK.frontend,
  },
  {
    id: "backend",
    label: "Backend & Bases de Datos",
    description: "Arquitecturas robustas, seguras y gestión de datos eficiente.",
    items: TECH_STACK.backend,
  },
];

export const SIDEBAR_CONTACT = {
  email: { href: PROFILE.links.email, label: PROFILE.email },
};

export const PAGE_SECTIONS = {
  profile: {
    id: "inicio",
    eyebrow: "Estudio digital",
    title: "SG Labs Studio",
  },
  services: {
    id: "servicios",
    eyebrow: "Servicios",
    title: "Servicios principales",
  },
  projects: {
    id: "proyectos",
    eyebrow: "Portafolio",
    title: "Casos de éxito",
  },
  guarantees: {
    id: "garantias",
    eyebrow: "Compromiso",
    title: "Qué puedes esperar de nosotros",
  },
};

export const SERVICES = [
  {
    id: "custom-web",
    title: "Web Profesional a Medida",
    description:
      "Una presencia clara y rápida, diseñada alrededor de tu oferta para que el visitante entienda, confíe y te contacte.",
  },
  {
    id: "ui-ux-mobile",
    title: "Optimización y Diseño Mobile-First",
    description:
      "Pensada primero para el móvil: lectura cómoda, carga inmediata y un camino obvio para llamar, reservar o pedir presupuesto.",
  },
  {
    id: "dynamic-systems",
    title: "Integración de Reservas, Menús Digitales y Automatizaciones",
    description:
      "Reservas, menús digitales y avisos automáticos integrados para captar más oportunidades con menos trabajo manual.",
  },
];

export const GUARANTEES = [
  {
    id: "remote-phases",
    title: "Trato directo",
    description:
      "Hablas con quien diseña y desarrolla tu web. Comunicación directa, sin intermediarios.",
  },
  {
    id: "ongoing-support",
    title: "Soporte después del lanzamiento",
    description:
      "No desaparecemos al publicar: puedes contar con mantenimiento, cambios y ayuda cuando lo necesites.",
  },
  {
    id: "performance-seo",
    title: "Pensado para resultados",
    description:
      "Priorizamos velocidad, claridad en móvil y que el visitante sepa cómo contactarte o reservar.",
  },
];

export const PROJECT_ACTIONS = [
  { id: "demo", label: "Ver web", hrefKey: "demo", style: "primary" },
];

export const PORTFOLIO_UI = {
  contactDirect: "Hablemos",
  contactNav: "Enlaces de contacto",
  restartIntro: "Volver a la portada",
};

export const PORTFOLIO_PROJECTS = [
  {
    id: "casa-cueva",
    title: "Casa Cueva las Palomas",
    sector: "Turismo Rural",
    description: "Web enfocada en captar reservas directas y reducir comisiones.",
    tags: ["Turismo", "Reservas", "Chat automático"],
    technologies: ["React", "Vite", "Tailwind CSS", "AI Integration", "Frontend"],
    github: "https://github.com/samu-gonz/casa-cueva-las-palomas",
    demo: "https://casa-cueva-las-palomas.vercel.app/",
    image: "/projects/casacueva.png",
    coverFormat: "landscape",
  },
  {
    id: "guachinche-el-realejo",
    title: "Guachinche El Realejo",
    sector: "Restauración",
    description: "Menú digital e integración de sistema de reservas.",
    tags: ["Restaurante", "Menú digital", "Reservas"],
    technologies: ["Node.js", "Express", "React", "Nodemailer", "AI Integration", "Full-Stack"],
    github: "https://github.com/samu-gonz/restaurantePrueba",
    demo: "https://restaurante-prueba-chi.vercel.app/",
    image: "/projects/restaurante.png",
    coverFormat: "landscape",
  },
  {
    id: "ghostwrite-ai",
    title: "Ghostwrite AI",
    sector: "Herramienta B2B",
    description: "Landing page moderna enfocada en conversión e integración de IA.",
    tags: ["Automatización", "Contenido", "IA"],
    technologies: ["React", "Vite", "Tailwind CSS", "AI Integration"],
    github: "https://github.com/samu-gonz/ghostwrite-ai",
    demo: "https://ghostwrite-ai-lime.vercel.app/",
    image: "/projects/ghostwrite.png",
    coverFormat: "portrait",
  },
];

export const SOLUTIONS = [
  {
    id: "ghostwrite-ai",
    title: "Generador de Contenido B2B con IA",
    description:
      "Aplicación web de asistencia de escritura inteligente mediante IA, con una interfaz de usuario fluida y reactiva.",
    stack: ["React", "Vite", "Tailwind CSS", "AI Integration"],
    github: "https://github.com/samu-gonz/ghostwrite-ai",
    demo: "https://ghostwrite-ai-lime.vercel.app/",
  },
  {
    id: "casa-cueva",
    title: "Plataforma Premium de Reservas",
    description:
      "Plataforma web para alojamiento rural con interfaz responsive optimizada y chatbot de asistencia integrado.",
    stack: ["React", "Vite", "Tailwind CSS", "Frontend"],
    github: "https://github.com/samu-gonz/casa-cueva-las-palomas",
    demo: "https://casa-cueva-las-palomas.vercel.app/",
  },
  {
    id: "guachinche-el-realejo",
    title: "Guachinche El Realejo",
    description:
      "Aplicación Full-Stack para gestión de restaurante. Menú digital dinámico y backend de reservas automatizado con notificaciones por email.",
    stack: ["Node.js", "Express", "React", "Nodemailer", "Full-Stack"],
    github: "https://github.com/samu-gonz/restaurantePrueba",
    demo: "https://restaurante-prueba-chi.vercel.app/",
  },
];
