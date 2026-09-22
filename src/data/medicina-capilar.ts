import { DEFAULT_CTA_HREF, DEFAULT_CTA_TEXT, GENERIC_CLINIC_IMAGES, LeafTreatment } from "./treatment-types";

export const medicinaCapilarTreatments: LeafTreatment[] = [
  {
    slug: "prp",
    title: "PRP (Plasma Rico en Plaquetas)",
    intro: [
      "La caída del cabello es un problema común que afecta a muchas personas, ya sea por herencia genética, estrés, alteraciones hormonales o deficiencias nutricionales. El PRP utiliza tus propias plaquetas sanguíneas para estimular el crecimiento del cabello, fortalecer los folículos capilares y mejorar la calidad del cabello existente, con resultados naturales.",
    ],
    image: GENERIC_CLINIC_IMAGES[0],
    imageAlt: "Tratamiento capilar PRP",
    benefits: [
      "Estimula el crecimiento de nuevos folículos capilares.",
      "Fortalece el cabello existente, haciéndolo más grueso y saludable.",
      "Tratamiento natural, sin necesidad de medicamentos ni cirugía.",
    ],
    audienceHeading: "¿Por qué elegir PRP en Vanitas?",
    audience: ["Un equipo especializado personaliza el tratamiento según tus necesidades para recuperar un cabello más fuerte y saludable."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "exosomas",
    title: "Exosomas",
    intro: [
      "Aplicamos la última biotecnología en regeneración capilar: los exosomas. Estas diminutas vesículas celulares activan los folículos pilosos desde el interior, estimulando el crecimiento de nuevo cabello, fortaleciendo el existente y frenando la caída de forma efectiva y natural.",
    ],
    image: GENERIC_CLINIC_IMAGES[1],
    imageAlt: "Tratamiento capilar con exosomas",
    benefits: [
      "Estimulan el crecimiento de cabello nuevo.",
      "Fortalecen el pelo fino y debilitado.",
      "Frenan la caída capilar.",
      "Mejoran la densidad, grosor y salud del cuero cabelludo.",
      "Potencian resultados cuando se combinan con otras terapias capilares.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [
      "Mujeres y hombres que notan disminución de densidad o entradas incipientes, sufren caída capilar estacional o crónica, quieren prevenir la alopecia o potenciar un injerto capilar, o buscan un tratamiento innovador sin cirugía.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
];

export function getMedicinaCapilarTreatment(slug: string) {
  return medicinaCapilarTreatments.find((t) => t.slug === slug);
}
