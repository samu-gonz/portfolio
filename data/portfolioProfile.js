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
    "Ayudamos a negocios locales en Canarias a verse profesionales online y convertir visitas en llamadas y reservas.",
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
    eyebrow: "Tranquilidad",
    title: "Así trabajamos contigo",
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
    title: "Proceso claro y sin sorpresas",
    description:
      "Te mostramos avances reales en cada fase. Sabes qué se está haciendo, cuándo y cómo quedará antes de publicar.",
  },
  {
    id: "ongoing-support",
    title: "Soporte cuando lo necesites",
    description:
      "Después del lanzamiento puedes contar con mantenimiento: seguridad, velocidad, cambios de contenido y soporte directo.",
  },
  {
    id: "performance-seo",
    title: "Rápida y fácil de encontrar",
    description:
      "Optimizamos carga y estructura para que Google te encuentre mejor y tus clientes no abandonen la página.",
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
  {
    id: "casa-cueva",
    title: "Casa Cueva las Palomas",
    sector: "Turismo rural · Canarias",
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
    sector: "Restauración · Canarias",
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
