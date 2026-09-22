import { DEFAULT_CTA_HREF, DEFAULT_CTA_TEXT, GENERIC_CLINIC_IMAGES, LeafTreatment } from "./treatment-types";

export const corporalTreatments: LeafTreatment[] = [
  {
    slug: "cavitacion-ultrasonica",
    title: "Cavitación ultrasónica",
    intro: [
      "La cavitación estética, también conocida como cavitación ultrasónica, es un tratamiento para eliminar la grasa corporal que se acumula en zonas concretas y localizadas. A través de un rodillo y un gel especial, se realiza un masaje que destruye las células grasas subcutáneas sin interferir en el sistema sanguíneo; la grasa se licúa para eliminarse a través de la orina y el sistema linfático.",
    ],
    image: GENERIC_CLINIC_IMAGES[1],
    imageAlt: "Tratamiento de cavitación ultrasónica",
    benefits: [
      "Elimina la grasa localizada.",
      "Reafirma: la piel se vuelve elástica, evitando la flacidez.",
      "Precisión: la piel se adapta al cuerpo de manera natural, con aspecto joven y saludable.",
    ],
    audienceHeading: "Contraindicaciones",
    audience: [
      "Requiere examen médico previo. Contraindicado en personas con marcapasos o implantes electrónicos, hipercolesterolemia, hipertrigliceridemia, insuficiencia renal o hepática, y en embarazo o lactancia.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "bodymetrix",
    title: "Bodymetrix",
    intro: [
      "Bodymetrix es el primer diagnóstico corporal a través de imagen ecográfica que mide el espesor del tejido adiposo, mejorando la visualización en tiempo real de la grasa, la celulitis y la flacidez. Es la última generación de AWT Storz para dar confianza, eficacia y rapidez a los tratamientos.",
    ],
    image: "/media/Cellactor.jpg",
    imageAlt: "Equipo de diagnóstico corporal Bodymetrix",
    benefits: [
      "El peso o el IMC no bastan para valorar la salud: la grasa ocupa más volumen que el músculo, por lo que dos personas de igual peso y altura pueden tener composiciones corporales muy distintas.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [
      "Desarrollado para su uso en adultos y niños a partir de 6 años, no para diagnóstico de enfermedades. El equipo mide el espesor de las capas de tejido mediante conexión USB a un ordenador.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "presoterapia-cocoon",
    title: "Presoterapia secuencial Cocoon",
    intro: [
      "Sistema de compresión controlada que funciona con bombas de inflar, moviendo el flujo venoso y linfático desde los tobillos hacia los muslos y alcanzando las capas más profundas de la piel. Una técnica reconocida por su eficacia en celulitis, modelación corporal y trastornos circulatorios.",
    ],
    image: "/media/Presoterapia.jpg",
    imageAlt: "Equipo de presoterapia secuencial Cocoon",
    benefits: [
      "Eliminación de líquidos retenidos.",
      "Eliminación de grasas y toxinas.",
      "Tratamiento de edemas y linfedemas.",
      "Tratamiento de signos varicosos.",
      "Eliminación de líquidos en piernas cansadas.",
      "Ayuda a la disminución de la grasa localizada en obesidad.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: ["Personas con problemas circulatorios, piernas cansadas, arañas vasculares, edemas, celulitis y grasa localizada."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "lpg",
    title: "LPG",
    intro: [
      "LPG Endermologie® es una plataforma estética avanzada que revoluciona los tratamientos corporales y faciales, de forma 100% natural, no invasiva y sin tiempos de recuperación. Su tecnología de estimulación mecánica libera la grasa localizada, estimula la producción de colágeno y elastina, y mejora la circulación.",
    ],
    image: "/media/lpg.jpg",
    imageAlt: "Equipo LPG Endermologie",
    benefits: [
      "Reduce visiblemente la celulitis y la piel de naranja.",
      "Favorece la liberación y eliminación de grasa localizada.",
      "Remodela y redefine la silueta con efecto reafirmante.",
      "Estimula la circulación sanguínea y combate la retención de líquidos.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [
      "Personas que quieren eliminar celulitis, reducir grasa localizada, remodelar su figura o rejuvenecer la piel sin cirugía. Apto también para embarazadas.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "dermapen-corporal",
    title: "Dermapen Corporal",
    intro: [
      "Técnica de micropunción que emplea microagujas para generar pequeñas punciones en la piel, estimulando la producción de colágeno y elastina en abdomen, muslos, brazos y glúteos, reduciendo la flacidez y mejorando la textura de la piel.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjy9Lq5LgJON1ZdIHxHlgAqqEj0HxP0V-iCTMMzF0Bg8k-NAgARCaBTmAIHt5ZKLa4Cj6q81BsRA5t_b8PQf3C0PUL4z8MtOHk818rQMhsAg9WxM66RJVyT4jtKdCXt7djPaO2ymQyk4pRiXoWH6wlf51qRNTc_jRM_dMa2qpT_GGAMX30QjWjZKiSibzX2cN18LVWtdyhovO3R8P56qCM0wz3mBm5ijy-FlndU9JMxj5VT53w5bJKRLA4tiyxB5TmC95nhJXZW9Y",
    imageAlt: "Tratamiento Dermapen corporal",
    benefits: [
      "Rejuvenecimiento de la piel, favoreciendo la regeneración celular.",
      "Reducción de estrías y cicatrices.",
      "Tonificación y reafirmación de zonas de flacidez.",
      "Sin tiempo de inactividad: no invasivo, se retoma la actividad de inmediato.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: ["Ideal para quienes buscan reafirmar, rejuvenecer y mejorar la textura de su piel corporal."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "indiba-corporal",
    title: "Indiba Corporal",
    intro: [
      "Tecnología de radiofrecuencia que estimula la regeneración celular y mejora la circulación sanguínea, ayudando a reafirmar y tonificar la piel, y a combatir la flacidez, la celulitis y la retención de líquidos.",
    ],
    image: "/media/Coolive-evo.png",
    imageAlt: "Equipo de radiofrecuencia Indiba",
    benefits: [
      "Reafirma y tonifica la piel, estimulando colágeno y elastina.",
      "Reduce la celulitis, mejorando la circulación.",
      "Mejora la circulación y el drenaje, eliminando toxinas y líquidos retenidos.",
      "Tratamiento no invasivo y sin tiempo de recuperación.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: ["Personas que desean mejorar la firmeza, elasticidad y tono de su piel, combatiendo la flacidez."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "peeling-corporal",
    title: "Peeling Corporal",
    intro: [
      "El Peeling Corporal Mesoestetic es un tratamiento exfoliante que utiliza activos de alta calidad para renovar la piel en profundidad, eliminando células muertas, mejorando la hidratación y promoviendo la regeneración celular.",
    ],
    image: GENERIC_CLINIC_IMAGES[2],
    imageAlt: "Tratamiento de peeling corporal",
    benefits: [
      "Exfoliación profunda: elimina células muertas.",
      "Atenúa manchas y marcas.",
      "Hidratación y renovación celular.",
      "Tratamiento no invasivo, sin tiempo de inactividad.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: ["Para quienes buscan mejorar la textura y apariencia de su piel de forma efectiva y duradera."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "storz-corporal",
    title: "Storz Corporal",
    intro: [
      "El tratamiento Storz Corporal utiliza ondas de choque focalizadas para estimular la circulación, reducir la celulitis y tonificar la piel de manera efectiva y no invasiva.",
    ],
    image: "/media/Cellactor.jpg",
    imageAlt: "Equipo de ondas de choque Storz corporal",
    benefits: [
      "Mejora la apariencia de la piel, reduciendo la celulitis y suavizando zonas problemáticas.",
      "Tonifica y reafirma, estimulando el colágeno.",
      "Resultados visibles y naturales, con un contorno corporal más definido.",
      "Sin cirugía ni tiempo de recuperación.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: ["Cada tratamiento es personalizado y adaptado a las necesidades específicas de cada persona."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
];

export function getCorporalTreatment(slug: string) {
  return corporalTreatments.find((t) => t.slug === slug);
}
