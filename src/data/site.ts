/**
 * INGENIERÍA MILLAR — Contenido centralizado (single source of truth).
 * Copys y estructura fieles al diseño Figma del diseñador (group-royal-36746076.figma.site).
 * Editar aquí, no en componentes. Imágenes intercambiables (ver OPCIONES_IMAGENES.md).
 */

export const site = {
  name: "Ingeniería Millar",
  domain: "ingenieriamillar.cl",
  url: "https://ingenieriamillar.cl",
  founder: "Richard Millar Díaz",
  email: "asesoria@ingenieriamillar.cl",
  // Placeholder configurable (pendiente confirmación del cliente).
  whatsapp: "+56965987920",
  whatsappDisplay: "+56 9 6598 7920",
  whatsappMessage: "Hola, me gustaría consultar por sus servicios de asesoría técnica.",
} as const;

export const seo = {
  title: "Ingeniería Millar — Consultoría en Ingeniería Minera | Asesoría Técnica Chile",
  description:
    "Más de 20 años optimizando plantas y operaciones mineras en todo Chile. Asesoría técnica, mantención de plantas, eficiencia de procesos y gestión de proyectos. Cobertura nacional: Antofagasta, Calama, Santiago y Concepción.",
  keywords:
    "asesoría técnica minera, ingeniería industrial Chile, mantención de plantas, eficiencia de procesos, consultoría minería, procedimientos técnicos",
  ogImage: "/og-image.jpg",
} as const;

export const hero = {
  eyebrow: "Consultoría en ingeniería minera",
  titlePre: "Ingeniería que",
  titleHighlight: "genera valor",
  subtitle: "Más de 20 años de trayectoria en la industria minera en Chile",
  cta: { label: "Contactar ahora", href: "#contacto" },
  ctaSecondary: { label: "Ver servicios", href: "#servicios" },
  // Imagen de fondo: planta/operación industrial (placeholder — reemplazar por foto minera del cliente).
  image:
    "/images/Banner1.avif",
} as const;

export const about = {
  eyebrow: "Quiénes somos",
  titlePre: "Experiencia que",
  titleHighlight: "transforma",
  paragraph:
    "Richard Millar, Ingeniero Civil Industrial con más de 20 años de experiencia en la industria minera, ha desarrollado una sólida trayectoria en gestión del mantenimiento y optimización de paradas de planta, liderando procesos orientados a la eficiencia operacional y la mejora continua.",
  bullets: [
    "Especialista en gestión de mantenimiento mayor",
    "Optimización de paradas de planta",
    "Gestión integral y eficiente de recursos en operaciones mineras",
    "Cobertura nacional: Antofagasta a Concepción",
  ],
  // Composición collage: imagen principal (operación/planta) + secundaria (equipo técnico).
  imagePrimary:
    "/images/Banner3.avif",
  imageSecondary:
    "/images/Banner2.avif",
} as const;

/** Banda de estadísticas (fondo oscuro). 4 métricas. */
export const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "15", label: "Regiones atendidas" },
  { value: "100%", label: "Compromiso técnico" },
] as const;

export const servicesSection = {
  eyebrow: "Lo que hacemos",
  titlePre: "Nuestros",
  titleHighlight: "Servicios",
  subtitle: "Soluciones especializadas para mantenimiento mayor, paradas de planta y optimización operacional en la industria minera.",
} as const;

/**
 * 6 servicios. `icon` = nombre de icono Lucide.
 * Cards: hover → naranja (ninguna destacada por default).
 * Clickeables → modal con `detail` (más información para el cliente final).
 */
export const services = [
  {
    icon: "Wrench",
    title: "Gestión de Mantenimiento Mayor",
    // summary: "Análisis profundo de procesos mineros para identificar oportunidades de mejora.",
    detail:
      "Planificación, coordinación y control integral de mantenimientos mayores en plantas mineras e industriales.",
  },
  {
    icon: "Factory",
    title: "Planificación y Ejecución de Shutdowns",
    // summary: "Optimización de ciclos de mantenimiento para máxima disponibilidad.",
    detail:
      "Desarrollo, programación y optimización de paradas de planta, asegurando seguridad, eficiencia y cumplimiento de plazos.",
  },
  {
    icon: "Zap",
    title: "Gestión y Acreditación de Personal Spot",
    // summary: "Reducción de tiempos y costos operacionales mediante optimización.",
    detail:
      "Administración de recursos humanos temporales, procesos de acreditación y coordinación operacional.",
  },
  {
    icon: "FileText",
    title: "Análisis Post Mantención (Delta & Plus)",
    // summary: "Documentación ISO y procedimientos estandarizados para compliance.",
    detail:
      "Evaluación de resultados, identificación de desviaciones, lecciones aprendidas y oportunidades de mejora.",
  },
  {
    icon: "Users",
    title: "Mejora Continua y Optimización Operacional",
    // summary: "Training avanzado para equipos en nuevas metodologías y tecnologías.",
    detail:
      "Implementación de estrategias orientadas a incrementar productividad, disponibilidad y eficiencia de procesos.",
  },
  {
    icon: "BarChart3",
    title: "Control de Gestión y Soporte Operacional",
    // summary: "Coordinación e implementación de mejoras operacionales complejas.",
    detail:
      "Seguimiento de indicadores clave, elaboración de reportes ejecutivos y apoyo a la toma de decisiones.",
  },
] as const;

/**
 * Galería de imágenes (5 verticales, estética B/N oscura, label con "/").
 * Reemplaza la sección de sectores: muestra áreas/ámbitos de trabajo.
 */
export const gallery = [
  {
    label: "Terreno",
    img: "/images/Santiago.webp",
  },
  {
    label: "Mantenimiento",
    img: "/images/Banner3.avif",
  },
  {
    label: "Procesos",
    img: "/images/Banner1.avif",
  },
  {
    label: "Equipo",
    img: "/images/Banner4.avif",
  },
  {
    label: "Cobertura",
    img: "/images/Concepcion2.avif",
  },
] as const;

/**
 * Cobertura nacional: 4 cards (sin mapa). La de Calama va destacada (naranja).
 */
export const coverage = {
  eyebrow: "Presencia en terreno",
  titlePre: "Cobertura",
  titleHighlight: "Nacional",
  subtitle: "Desde el desierto de Atacama hasta el sur de Chile, llegamos donde está la operación.",
  // Imagen de fondo: paisaje cordillera / desierto.
  bgImage:
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2000&q=60",
  cities: [
    { region: "Región de Antofagasta", city: "Antofagasta", note: "Presencia estratégica en el principal polo minero del país.", featured: false, bgImage: "/images/Antofagasta.avif" },
    { region: "Región de Antofagasta", city: "Calama", note: "Soporte directo para operaciones y mantenimiento en faenas mineras.", featured: true, bgImage: "/images/Calama.avif" },
    { region: "Región Metropolitana", city: "Santiago", note: "Centro de gestión, planificación y coordinación operacional.", featured: false, bgImage: "/images/Santiago.avif" },
    { region: "Región del Biobío", city: "Concepción", note: "Cobertura regional y apoyo logistico para proyectos industriales.", featured: false, bgImage: "/images/Concepcion.avif" },
  ],
} as const;

export const contact = {
  eyebrow: "Hablemos",
  titlePre: "¿Listo para optimizar tu",
  titleHighlight: "operación?",
  subtitle: "Contáctanos ahora. Evaluaremos tu situación y te propondremos soluciones concretas.",
  formNote: "Completa el formulario y se abrirá tu correo con el mensaje listo para enviarnos.",
} as const;

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sectores", href: "#sectores" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const footer = {
  tagline: "Consultoría en ingeniería minera con cobertura nacional.",
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [

  ],
  // Crédito de agencia — discreto, sin restar protagonismo al cliente.
  credit: { label: "Diseñado y desarrollado por Webiados", href: "https://webiados.com" },
  year: 2026,
} as const;
