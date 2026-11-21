export interface NavItem {
  label: string;
  href: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface OrganizationalPillar {
  title: string;
  summary: string;
  highlight?: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  category: 'Reforestación' | 'Educación' | 'Eventos';
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  content: string;
}

export interface DonationTier {
  id: string;
  name: string;
  amount: string;
  shortImpact: string;
  fullImpact: string;
  recommended?: boolean;
}

export interface DonationFaq {
  question: string;
  answer: string;
}

export const FOUNDATION_CONTACT = {
  name: 'Fundación CO2',
  location: 'Santa Cruz · Bolivia',
  whatsappNumber: '59174962427',
  whatsappDisplay: '+591 74962427',
  email: 'contrerasjob123@gmail.com',
  bankHolder: 'Fundación CO2 Bolivia',
  bankEntity: 'Banco Nacional · Cuenta Institucional',
  bankAccount: '1000-0045-8921-02',
  currency: 'BOB (Bs)',
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#institucional' },
  { label: 'Programas', href: '#programas' },
  { label: 'Bitácora', href: '#noticias' },
  { label: 'Contacto', href: '#contacto' },
];

export const HERO_METRICS: readonly ImpactMetric[] = [
  {
    value: '420 t',
    label: 'de CO₂ capturado al año en parcelas monitoreadas',
  },
  {
    value: '+18.500',
    label: 'árboles nativos con 86% de supervivencia',
  },
  {
    value: '+650',
    label: 'voluntarios activos junto a 35 comunidades',
  },
];

export const PILLARS: readonly OrganizationalPillar[] = [
  {
    title: 'Sostenibilidad duradera',
    summary:
      'Diseñamos intervenciones que respetan los ciclos hídricos y la flora endémica de cada región boliviana.',
  },
  {
    title: 'Transparencia verificable',
    summary:
      'Cada aporte y jornada de siembra se documenta en campo para que sepas exactamente qué financia tu apoyo.',
    highlight: '100% trazable en reportes de campo',
  },
  {
    title: 'Acción junto a la comunidad',
    summary:
      'Involucramos a vecinos, docentes y brigadas juveniles como protagonistas del cuidado de cada bosque.',
    highlight: '+35 comunidades y escuelas activas',
  },
  {
    title: 'Rigor ambiental aplicado',
    summary:
      'Priorizamos especies nativas producidas en vivero y protocolos de riego eficiente durante la estación seca.',
  },
];

export const NEWS_CATEGORIES = ['Todas', 'Reforestación', 'Educación', 'Eventos'] as const;
export type NewsCategoryFilter = (typeof NEWS_CATEGORIES)[number];

export const NEWS_ARTICLES: readonly NewsArticle[] = [
  {
    id: 1,
    title: 'Jornada comunitaria suma 1.200 árboles nativos en corredor verde urbano',
    category: 'Reforestación',
    date: '14 NOV 2026',
    image: 'images/siembra-voluntarios.jpg',
    imageAlt: 'Manos de voluntarios sembrando un plantín de especie nativa en tierra húmeda',
    excerpt:
      'Más de 120 voluntarios, familias y brigadas juveniles participaron en la plantación y georreferenciación de especies resistentes al clima local.',
    content:
      'Con el compromiso de más de 120 voluntarios y vecinos, Fundación CO2 culminó una nueva jornada de restauración ecológica con especies nativas producidas en vivero.\n\nCada plantín quedó registrado con fichas de riego comunitario y seguimiento trimestral para asegurar una supervivencia superior al 85% durante la estación seca.',
  },
  {
    id: 2,
    title: 'Talleres de educación climática y compostaje llegan a 12 colegios',
    category: 'Educación',
    date: '02 NOV 2026',
    image: 'images/educacion-juvenil.jpg',
    imageAlt: 'Estación de separación de residuos y material educativo ambiental',
    excerpt:
      'Estudiantes de secundaria implementaron puntos ecológicos y midieron la huella de carbono de sus aulas.',
    content:
      'Nuestro equipo de educadores visitó 12 unidades educativas con sesiones prácticas de separación de residuos, compostaje escolar y ahorro hídrico.\n\nCada institución conformó su brigada juvenil con acompañamiento continuo durante todo el calendario escolar.',
  },
  {
    id: 3,
    title: 'Feria Verde conecta emprendimientos sostenibles y donantes locales',
    category: 'Eventos',
    date: '19 OCT 2026',
    image: 'images/feria-verde.jpg',
    imageAlt: 'Hojas verdes de bosque húmedo bajo luz natural en jornada comunitaria',
    excerpt:
      'Más de 400 asistentes participaron en el intercambio de plantines y recaudación directa para viveros comunitarios.',
    content:
      'La Feria Verde reunió a emprendedores ecológicos, familias y organizaciones ciudadanas en una jornada abierta dedicada a la economía circular.\n\nLos fondos recaudados mediante QR Simple se destinaron íntegramente a sustrato, semillas nativas y herramientas de riego.',
  },
];

export const DONATION_TIERS: readonly DonationTier[] = [
  {
    id: 'semilla',
    name: 'Semilla',
    amount: '50 Bs',
    shortImpact: '5 árboles nativos',
    fullImpact: 'Financia 5 plantines nativos y su cuidado inicial',
  },
  {
    id: 'brote',
    name: 'Recomendado',
    amount: '150 Bs',
    shortImpact: '15 árboles y taller',
    fullImpact: 'Cubre 15 árboles nativos y un taller ambiental escolar',
    recommended: true,
  },
  {
    id: 'parcela',
    name: 'Parcela',
    amount: '350 Bs',
    shortImpact: 'Micro-parcela verde',
    fullImpact: 'Restaura una micro-parcela con riego y monitoreo',
  },
  {
    id: 'libre',
    name: 'Aporte abierto',
    amount: 'Monto libre',
    shortImpact: 'El monto que elijas',
    fullImpact: 'Todo aporte suma directo a viveros y brigadas locales',
  },
];

export const DONATION_FAQS: readonly DonationFaq[] = [
  {
    question: '¿El QR Simple funciona desde cualquier banco en Bolivia?',
    answer:
      'Sí. El QR Simple es interoperable en todo el sistema financiero boliviano. Puedes escanearlo desde la pantalla o importar la imagen descargada desde tu banca móvil sin comisiones.',
  },
  {
    question: '¿Puedo elegir a qué programa se destina mi aporte?',
    answer:
      'Sí. Al enviarnos tu comprobante por WhatsApp puedes indicar si prefieres apoyar Reforestación Nativa, Educación Ambiental o el fondo general de la fundación.',
  },
  {
    question: '¿Cómo me sumo como voluntario o aliado institucional?',
    answer:
      'Escríbenos desde el formulario de contacto o directo por WhatsApp al +591 74962427 para integrarte a la próxima jornada de campo o mesa de alianzas.',
  },
];

export const CONTACT_SUBJECTS: readonly string[] = [
  'Voluntariado ambiental',
  'Consulta sobre donaciones',
  'Alianza institucional o empresarial',
  'Solicitar taller educativo',
  'Información general',
];
