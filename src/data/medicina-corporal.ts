import { DEFAULT_CTA_HREF, DEFAULT_CTA_TEXT, GENERIC_CLINIC_IMAGES, LeafTreatment } from "./treatment-types";

const RECOMENDADO_CELULITIS =
  "Es un tratamiento aplicable con resultados eficaces en todo tipo de celulitis y acumulación de grasa. Fomenta el drenaje venoso y linfático de la grasa, evitando la retención de líquidos y reafirmando la piel.";

export const medicinaCorporalTreatments: LeafTreatment[] = [
  {
    slug: "carboxiterapia-corporal",
    title: "Carboxiterapia Corporal",
    intro: [
      "El CO2 tiene propiedades increíbles frente a la celulitis, las estrías, la grasa localizada y la flacidez de la piel. Este tratamiento mínimamente invasivo, aplicado por vía subcutánea, estimula la circulación celular, lo que conlleva mayor oxigenación de los tejidos y formación de nuevas fibras de colágeno.",
    ],
    image: GENERIC_CLINIC_IMAGES[1],
    imageAlt: "Tratamiento de carboxiterapia corporal",
    benefits: [
      "Mejora la calidad de la piel, con un aspecto exterior notable al instante.",
      "Mejora la circulación sanguínea, reduciendo la grasa localizada y la sensación de pesadez.",
      "Recuperación prácticamente inmediata.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [RECOMENDADO_CELULITIS],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "mesoterapia-corporal",
    title: "Mesoterapia Corporal",
    intro: [
      "Tratamiento que permite la pérdida de grasa localizada y la reducción de volumen en zonas que se resisten a un estilo de vida saludable. Su secreto reside en reducir el volumen en zonas con grasa localizada, tonificar la piel, aportar tersura y combatir la celulitis.",
    ],
    image: GENERIC_CLINIC_IMAGES[2],
    imageAlt: "Tratamiento de mesoterapia corporal",
    benefits: [
      "Reduce la grasa localizada y la celulitis o piel de naranja.",
      "Mejora la circulación periférica y el retorno venoso.",
      "Revitaliza el aspecto de la piel y mejora la oxigenación de los tejidos.",
      "Excelente para tratar afecciones de manera localizada.",
      "Buena tolerancia por parte del paciente.",
      "Utiliza principios extraídos de sustancias naturales.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [RECOMENDADO_CELULITIS],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
];

export function getMedicinaCorporalTreatment(slug: string) {
  return medicinaCorporalTreatments.find((t) => t.slug === slug);
}
