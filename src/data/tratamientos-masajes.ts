import { DEFAULT_CTA_HREF, DEFAULT_CTA_TEXT, GENERIC_CLINIC_IMAGES, LeafTreatment } from "./treatment-types";

export const masajesTreatments: LeafTreatment[] = [
  {
    slug: "maderoterapia",
    title: "Maderoterapia",
    intro: [
      "En Vanitas te ofrecemos la maderoterapia, una técnica de masaje que utilizamos para mejorar la circulación, reducir la celulitis, aliviar dolores musculares y proporcionarte una profunda relajación, de forma natural y no invasiva.",
    ],
    image: "/media/Presoterapia.jpg",
    imageAlt: "Sesión de maderoterapia",
    benefitsHeading: "Problemas que resolvemos",
    benefits: ["Mala circulación.", "Celulitis persistente.", "Dolores musculares.", "Estrés y ansiedad."],
    audienceHeading: "Sus beneficios",
    audience: [
      "Mejora la circulación estimulando el flujo sanguíneo, reduce la celulitis movilizando el tejido graso, alivia los músculos tensos, ayuda a reducir el estrés y la ansiedad, y tonifica la piel y los músculos.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "masaje-relajante",
    title: "Masaje relajante",
    intro: [
      "El masaje relajante es una técnica terapéutica suave y armoniosa que se enfoca en liberar la tensión acumulada en el cuerpo y la mente. Combinamos movimientos lentos, presión moderada y un ambiente de calma para una experiencia sensorial única que alivia el estrés y mejora tu bienestar general.",
    ],
    image: GENERIC_CLINIC_IMAGES[0],
    imageAlt: "Sesión de masaje relajante",
    benefits: [
      "Libera tensiones musculares acumuladas en cuello, espalda y hombros.",
      "Reduce significativamente el estrés, la ansiedad y la fatiga mental.",
      "Mejora la calidad del sueño y favorece el descanso profundo.",
      "Estimula la circulación sanguínea y linfática.",
      "Aporta una sensación de paz, equilibrio y bienestar duradero.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [
      "Para personas de cualquier edad que buscan desconectar del estrés diario, aliviar molestias físicas leves o regalarse un momento de autocuidado: ideal para quienes sufren insomnio, ansiedad, fatiga crónica o sedentarismo.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "masaje-drenante-brasileno",
    title: "Masaje drenante brasileño",
    intro: [
      "Técnica especial que combina movimientos firmes y suaves, aplicados con presión específica, para estimular el sistema linfático y eliminar toxinas de tu cuerpo. Favorece el drenaje de líquidos retenidos, reduce la celulitis y mejora el contorno corporal.",
    ],
    image: GENERIC_CLINIC_IMAGES[1],
    imageAlt: "Sesión de masaje drenante brasileño",
    benefits: [
      "Elimina la retención de líquidos, reduciendo la sensación de hinchazón.",
      "Reduce la celulitis y mejora la textura de la piel.",
      "Favorece el drenaje linfático, eliminando toxinas y mejorando la circulación.",
      "Reafirma y tonifica el cuerpo, aportando un aspecto más definido.",
      "Mejora la circulación sanguínea y la oxigenación de la piel.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [
      "Para quienes llevan un estilo de vida sedentario, sufren hinchazón, tienen acumulación de toxinas o desean esculpir su figura de manera natural.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
];

export function getMasajeTreatment(slug: string) {
  return masajesTreatments.find((t) => t.slug === slug);
}
