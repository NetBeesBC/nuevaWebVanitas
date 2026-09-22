import { DEFAULT_CTA_HREF, DEFAULT_CTA_TEXT, GENERIC_CLINIC_IMAGES, LeafTreatment } from "./treatment-types";

export const medicinaFacialTreatments: LeafTreatment[] = [
  {
    slug: "acido-hialuronico",
    title: "Ácido Hialurónico",
    intro: [
      "El paso de los años provoca que nuestro organismo reduzca el nivel de producción de ácido hialurónico, lo que conlleva una pérdida de elasticidad y firmeza en la piel, dando origen a las arrugas y signos de envejecimiento. Es una de las sustancias más utilizadas para reducir los signos de la edad.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD25uqlIApgZCWDLqg5vOJH6qyg84UeeKFI7VatvAQ5UyvRuwvNzHZzd8sSIBE_go9F3B49kEwLATyGeVwH3912vLr4SoJtvA8Q2vqzZsRXBObPwhlE8K5DLpuY93Naui_qXrqFb-er7Qqk1pyYyZZlcWSL8bKEo7gneNrKr0RADAu954El2NPdmOY_B9afNtoyXoxYwxW-um8AahnxAEZGIKMC2aHCGSMUe25ThzpQeoHDzstevcCClUVDvxPTYKAFhjl2FOYcrv0",
    imageAlt: "Tratamiento de ácido hialurónico",
    benefits: [
      "Mejora los niveles de hidratación de la piel.",
      "Rejuvenece la piel y reduce las arrugas.",
      "Material biocompatible, sin reacciones alérgicas en la piel.",
      "Mejora la producción de colágeno, favoreciendo la textura de la piel.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [
      "Para rostros que buscan difuminar arrugas profundas, recuperar volúmenes faciales y corregir asimetrías, con un efecto inmediato.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "inductores-colageno-radiesse",
    title: "Inductores de colágeno (Radiesse)",
    intro: [
      "Tratamiento ideal para corregir pequeñas imperfecciones que transforman la composición de nuestro rostro. Funciona aumentando la producción de colágeno, mejorando la tersura de la piel y moldeando el contorno del rostro, eliminando la flacidez y logrando un efecto lifting.",
    ],
    image: GENERIC_CLINIC_IMAGES[1],
    imageAlt: "Tratamiento con inductores de colágeno Radiesse",
    benefits: [
      "Reafirma diferentes zonas: contorno, mandíbula, mejillas, pómulos, cejas y cuello.",
      "Resultados muy naturales, inmediatos y duraderos.",
      "Efecto rejuvenecedor y revitalizante.",
      "Procedimiento no invasivo.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [
      "Indicado en personas con volúmenes perdidos que quieran corregir pequeñas deficiencias óseas del rostro: nariz, mentón, pómulos, entre otras.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "neuromoduladores",
    title: "Neuromoduladores",
    intro: [
      "El tratamiento a través de los neuromoduladores permite bloquear determinadas señales nerviosas responsables de la contracción del músculo. Al eliminar esta contracción, conseguimos la relajación de los músculos y la reducción de arrugas. Elimina arrugas mediante la relajación muscular, sin rellenar, con un efecto rehabilitador. Su duración es de entre 3 y 6 meses.",
    ],
    image: GENERIC_CLINIC_IMAGES[2],
    imageAlt: "Tratamiento con neuromoduladores",
    audienceHeading: "¿Para quién está recomendado?",
    audience: ["Su popularización se debe a su eficacia frente a las arrugas de expresión."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "bioregeneracion-cutanea",
    title: "Bioregeneración cutánea",
    intro: [
      "Método médico estético que permite mejorar el aspecto de tu piel mediante la renovación y reparación cutánea no agresiva y no fotosensibilizante, gracias a su componente bioregenerador PRX-T33, que neutraliza los ácidos sin desnaturalizar el equilibrio de la piel.",
    ],
    image: GENERIC_CLINIC_IMAGES[0],
    imageAlt: "Tratamiento de bioregeneración cutánea",
    benefits: [
      "Tratamiento indoloro, con un ligero escozor que desaparece en pocos minutos.",
      "Resultados visibles desde la primera sesión, duraderos en el tiempo.",
      "Tratamiento menos agresivo, ya que protege el equilibrio de la piel.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: ["Pieles envejecidas por el sol y el paso del tiempo: arrugas, manchas, cicatrices, estrías y otras lesiones cutáneas."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "relleno-ojeras",
    title: "Relleno de ojeras",
    intro: [
      "El relleno de ojeras con ácido hialurónico elimina esas marcas oscuras y hundidas que te hacen lucir fatigado. Consiste en inyectar ácido hialurónico en la zona de las ojeras, proporcionando hidratación, volumen y un acabado natural, recuperando la juventud de tu mirada.",
    ],
    image: GENERIC_CLINIC_IMAGES[1],
    imageAlt: "Tratamiento de relleno de ojeras",
    benefits: [
      "Elimina ojeras profundas y oscuras.",
      "Mejora la hidratación y elasticidad de la piel.",
      "Resultados naturales y duraderos.",
      "Procedimiento rápido, seguro y mínimamente invasivo.",
    ],
    audienceHeading: "Objetivo",
    audience: ["Recuperar una mirada fresca, descansada y rejuvenecida."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "carboxiterapia-facial",
    title: "Carboxiterapia facial",
    intro: [
      "Tratamiento enfocado en reducir eficazmente las ojeras, mejorando la circulación sanguínea y la hidratación en la zona del contorno de los ojos mediante una combinación de técnicas con CO2.",
    ],
    image: GENERIC_CLINIC_IMAGES[2],
    imageAlt: "Tratamiento de carboxiterapia facial",
    benefits: [
      "Reduce la apariencia de ojeras profundas y oscuras.",
      "Mejora la circulación y revitaliza la zona ocular.",
      "Aporta hidratación y luminosidad al contorno de los ojos.",
      "Tratamiento no invasivo y sin tiempo de recuperación.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: [
      "Para quienes buscan una solución no invasiva, sin necesidad de cirugía, con resultados visibles y duraderos frente a la pigmentación oscura del contorno de ojos.",
    ],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
  {
    slug: "peeling-quimico",
    title: "Peeling Químico",
    intro: [
      "Un regenerador cutáneo a través de la exfoliación natural de la piel y la activación de mecanismos regenerativos cutáneos. Para unos resultados óptimos, se realiza un estudio previo del estado de la piel de cada persona y se determina la mejor opción personalizada.",
    ],
    image: GENERIC_CLINIC_IMAGES[0],
    imageAlt: "Tratamiento de peeling químico",
    benefits: [
      "Exfoliación natural de la piel y activación de mecanismos regenerativos.",
      "Elimina las células muertas y corrige irregularidades de la piel.",
      "Aumenta la producción de colágeno y elastina, mejorando la textura de la piel.",
    ],
    audienceHeading: "¿Para quién está recomendado?",
    audience: ["Según la afección cutánea de cada persona se aplica un tipo de peeling u otro, tras un diagnóstico previo."],
    ctaText: DEFAULT_CTA_TEXT,
    ctaHref: DEFAULT_CTA_HREF,
  },
];

export function getMedicinaFacialTreatment(slug: string) {
  return medicinaFacialTreatments.find((t) => t.slug === slug);
}
