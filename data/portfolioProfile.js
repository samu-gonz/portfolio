export const PROFILE = {
  name: "Samuel G. R.",
  fullName: "Samuel González Rodríguez",
  role: "Full-Stack Developer",
  availability: "Disponible para incorporación inmediata",
  location: "Tenerife, España",
  phone: "+34 634473640",
  cvUrl: "/cv",
  email: "samuelgonz2006@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/samu-gonz",
    email: "mailto:samuelgonz2006@gmail.com",
  },
};

export const PROFILE_BIO =
  "Desarrollador Full-Stack enfocado en el diseño, construcción y despliegue de aplicaciones web modernas, eficientes y escalables. Especializado en arquitecturas robustas en el backend y en la creación de interfaces de usuario reactivas, intuitivas y optimizadas a nivel de rendimiento. Con capacidad para gestionar proyectos desde la base de datos hasta producción, priorizando la limpieza del código, la experiencia de usuario (UX) y la resolución ágil de problemas técnicos.";

export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Java", "Node.js", "Express", "SQL", "MySQL"],
};

export const TECH_SECTIONS = [
  { id: "frontend", label: "Frontend", items: TECH_STACK.frontend },
  { id: "backend", label: "Backend & Bases de Datos", items: TECH_STACK.backend },
];

export const SIDEBAR_CONTACT = {
  cv: { href: PROFILE.cvUrl, label: "Ver CV / Imprimir PDF" },
  social: [
    { id: "linkedin", href: PROFILE.links.linkedin, label: "LinkedIn" },
    { id: "github", href: PROFILE.links.github, label: "GitHub" },
  ],
  email: { label: "Correo electrónico" },
};

export const PAGE_SECTIONS = {
  profile: {
    id: "perfil",
    eyebrow: "Perfil Profesional",
    title: PROFILE.fullName,
  },
  services: {
    id: "servicios",
    eyebrow: "Soluciones B2B",
    title: "Servicios",
  },
  projects: {
    id: "proyectos",
    eyebrow: "Portfolio",
    title: "Proyectos Destacados",
  },
  guarantees: {
    id: "garantias",
    eyebrow: "Cómo trabajo",
    title: "Garantías y Metodología",
  },
};

export const SERVICES = [
  {
    id: "custom-web",
    title: "Desarrollo Web a Medida",
    description:
      "Creación de aplicaciones y webs corporativas ultra rápidas con React y Next.js. Código limpio sin plantillas lentas, optimizado para conversión.",
  },
  {
    id: "ui-ux-mobile",
    title: "Optimización UI/UX & Mobile-First",
    description:
      "Interfaces modernas, limpias e intuitivas diseñadas específicamente para garantizar una experiencia impecable en teléfonos móviles y tablets.",
  },
  {
    id: "dynamic-systems",
    title: "Sistemas Dinámicos e Integraciones",
    description:
      "Desarrollo de lógica backend y bases de datos a medida (motores de reserva en tiempo real, automatizaciones y asistentes de IA integrados).",
  },
];

export const GUARANTEES = [
  {
    id: "remote-phases",
    title: "Gestión 100% Remota por Fases",
    description:
      "Comunicación ágil por videollamada y despliegues semanales en entornos de prueba (Vercel) para un seguimiento transparente del avance.",
  },
  {
    id: "ongoing-support",
    title: "Soporte & Mantenimiento Continuo",
    description:
      "Al finalizar el desarrollo, ofrezco un servicio mensual de mantenimiento técnico para que no tengas que preocuparte por nada. Incluye la optimización constante del sitio, actualizaciones de seguridad, monitorización del servidor y soporte directo para cambios de contenido o nuevas funciones. Tu web siempre online, rápida y protegida.",
  },
  {
    id: "performance-seo",
    title: "Rendimiento y SEO Nativo",
    description:
      "Estructura de código orientada desde el primer día a la velocidad de carga y al posicionamiento en buscadores para maximizar el retorno de inversión.",
  },
];

export const PROJECT_ACTIONS = [
  { id: "code", label: "Ver Código", hrefKey: "github", style: "secondary" },
  { id: "demo", label: "Ver Demo", hrefKey: "demo", style: "primary" },
];

export const PORTFOLIO_UI = {
  contactDirect: "Contacto Directo",
  contactNav: "Enlaces de contacto",
  restartIntro: "Reiniciar intro",
};

export const PORTFOLIO_PROJECTS = [
  {
    id: "ghostwrite-ai",
    title: "Ghostwrite AI",
    description:
      "Aplicación web de asistencia de escritura inteligente mediante IA, diseñada con una interfaz fluida, reactiva y optimizada para la automatización de contenidos.",
    technologies: ["React", "Vite", "Tailwind CSS", "AI Integration"],
    github: "https://github.com/samu-gonz/ghostwrite-ai",
    demo: "https://ghostwrite-ai-lime.vercel.app/",
    image: "/projects/ghostwrite.png",
  },
  {
    id: "casa-cueva",
    title: "Casa Cueva las Palomas",
    description:
      "Plataforma web profesional para alojamiento rural turístico con interfaz responsive avanzada, optimización de recursos y un chatbot conversacional con IA integrada para la atención al cliente.",
    businessHighlight:
      "Optimizada con un chatbot inteligente que automatiza la atención al usuario, reduciendo los tiempos de respuesta y fomentando la reserva directa.",
    technologies: ["React", "Vite", "Tailwind CSS", "AI Integration", "Frontend"],
    github: "https://github.com/samu-gonz/casa-cueva-las-palomas",
    demo: "https://casa-cueva-las-palomas.vercel.app/",
    image: "/projects/casacueva.png",
  },
  {
    id: "guachinche-el-realejo",
    title: "Guachinche El Realejo",
    description:
      "Aplicación Full-Stack para gestión de restaurante. Cuenta con un menú digital dinámico, motor de reservas automatizado con notificaciones por email y un asistente virtual con IA integrada para gestionar comandas y consultas.",
    businessHighlight:
      "Diseñada para centralizar y automatizar los flujos de reserva en tiempo real, aliviando la carga administrativa del negocio.",
    technologies: ["Node.js", "Express", "React", "Nodemailer", "AI Integration", "Full-Stack"],
    github: "https://github.com/samu-gonz/restaurantePrueba",
    demo: "https://restaurante-prueba-chi.vercel.app/",
    image: "/projects/restaurante.png",
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
