import { DEFAULT_CTA_HREF, DEFAULT_CTA_TEXT, GENERIC_CLINIC_IMAGES, LeafTreatment } from "./treatment-types";

export const electroestimulacionTreatments: LeafTreatment[] = [
  {
    slug: "electroestimulacion-activa",
    title: "Electroestimulación activa",
    intro: [
      "Nuestro método más eficaz de entrenamiento para todo el cuerpo, que te permite ahorrar mucho tiempo con un sistema EMS de alta calidad. La corriente eléctrica de baja intensidad activa los nervios, permitiendo a las fibras musculares trabajar a partir de contracciones musculares, simulando el estímulo del sistema nervioso.",
    ],
    image: GENERIC_CLINIC_IMAGES[2],
    imageAlt: "Sesión de electroestimulación activa",
    benefits: [
      "Rápido: puedes quemar hasta 2000 kcal en una sesión.",
      "Eficaz: solo 20 minutos equivalen a 5 horas de gimnasio.",
      "Entrena de forma totalmente segura, con seguimiento personalizado.",
      "Resultados inmediatos: ejercita 350 músculos a la vez.",
    ],
    audienceHeading: "Recomendaciones y sesiones",
    audience: [
      "Las sesiones son de 20 minutos, suficientes para lograr resultados visibles en unas semanas. Solo hace falta ropa cómoda y zapatillas deportivas. Contraindicado para portadores de marcapasos, embarazadas y personas con artritis.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "electroestimulacion-pasiva",
    title: "Electroestimulación corporal pasiva",
    intro: [
      "Tratamiento no invasivo que utiliza impulsos eléctricos suaves para activar tus músculos sin necesidad de esfuerzo físico. Es como hacer ejercicio, pero mientras estás recostado y relajado.",
    ],
    image: GENERIC_CLINIC_IMAGES[0],
    imageAlt: "Sesión de electroestimulación pasiva",
    benefits: [
      "Tonificación muscular: abdomen, glúteos, muslos y brazos más firmes.",
      "Reducción de grasa localizada y celulitis.",
      "Estimula el metabolismo, ayudando en procesos de pérdida de peso.",
      "Activa la circulación, mejora la oxigenación y elimina toxinas.",
      "Ideal en postoperatorios y recuperación muscular.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [
      "Ideal para quienes desean mejorar su figura, tonificar zonas específicas o complementar sus rutinas fitness de forma segura.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
];

export function getElectroestimulacionTreatment(slug: string) {
  return electroestimulacionTreatments.find((t) => t.slug === slug);
}
