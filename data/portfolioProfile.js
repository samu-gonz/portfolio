export const PROFILE = {
  name: "SG Labs Studio",
  fullName: "SG Labs Studio",
  role: "Estudio de Desarrollo & Diseño Web",
  availability: "Disponibles para nuevos proyectos",
  location: "Canarias, España",
  phone: "+34 634 473 640",
  phoneE164: "34634473640",
  cvUrl: "/cv",
  email: "samuelgonz2006@gmail.com",
  links: {
    github: "https://github.com/samu-gonz",
    email: "mailto:samuelgonz2006@gmail.com",
    whatsapp:
      "https://wa.me/34634473640?text=" +
      encodeURIComponent(
        "Hola, me gustaría solicitar un análisis gratuito de la web de mi negocio.",
      ),
  },
};

export const PROFILE_BIO =
  "En SG Labs Studio diseñamos webs para negocios que quieren más llamadas, reservas y clientes. Diseño claro, carga rápida y enfocadas en resultados — no en tecnicismos.";

export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Java", "Node.js", "Express", "SQL", "MySQL"],
};

export const SIDEBAR_BRAND = {
  title: "Webs que traen clientes",
  subtitle:
    "Ayudamos a PYMEs y empresas a verse profesionales online y convertir visitas en llamadas, reservas y ventas.",
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
  whatsapp: { href: PROFILE.links.whatsapp, label: "WhatsApp" },
  email: { label: "Correo electrónico" },
  phone: { href: `tel:+${PROFILE.phoneE164}`, label: PROFILE.phone },
};

export const PAGE_SECTIONS = {
  profile: {
    id: "inicio",
    eyebrow: "Estudio digital",
    title: "SG Labs Studio",
  },
  services: {
    id: "servicios",
    eyebrow: "Qué hacemos",
    title: "Cómo te ayudamos",
  },
  projects: {
    id: "proyectos",
    eyebrow: "Trabajos reales",
    title: "Proyectos para negocios como el tuyo",
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
    title: "Web profesional a medida",
    description:
      "Una web limpia, rápida y adaptada a tu negocio. Pensada para que el cliente te encuentre, confíe y te contacte.",
  },
  {
    id: "ui-ux-mobile",
    title: "Diseño que funciona en el móvil",
    description:
      "La mayoría de tus clientes te buscan desde el teléfono. Diseñamos para que en móvil se vea clara, rápida y fácil de usar.",
  },
  {
    id: "dynamic-systems",
    title: "Reservas, menús y automatización",
    description:
      "Sistemas de reservas, menús digitales, avisos por email y asistentes que responden por ti — menos trabajo manual, más clientes atendidos.",
  },
];

export const GUARANTEES = [
  {
    id: "remote-phases",
    title: "Trato directo",
    description:
      "Hablas con quien diseña y desarrolla tu web. Comunicación ágil por WhatsApp o videollamada.",
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
    sector: "Turismo rural",
    description:
      "Web de alojamiento pensada para captar reservas directas, con atención automática al visitante.",
    businessHighlight: "Menos tiempo respondiendo lo mismo y más reservas sin intermediarios.",
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
    description:
      "Web con menú digital y reservas automatizadas para que el local no pierda mesas ni llamadas.",
    businessHighlight: "Centraliza reservas y reduce la carga en barra y cocina.",
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
    sector: "Herramienta para profesionales",
    description:
      "App que convierte ideas en publicaciones listas para redes, ahorrando horas de escritura cada semana.",
    businessHighlight: "Ideal si quieres publicar más sin dedicar todo el día a redactar.",
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
