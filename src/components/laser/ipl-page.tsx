import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function IplPage() {
  return (
    <TreatmentDetail
      active="laser"
      parent={{ label: "Depilación láser", href: "/laser" }}
      eyebrow="Depilación láser"
      title="IPL (Luz Pulsada Intensa)"
      intro={[
        "Vanitas Vanitatis ha sido reconocida como principal centro de referencia en España por diferentes instituciones gracias a su formación y técnica utilizada en tratamientos de Luz Pulsada Intensa.",
        "La Luz Intensa Pulsada (IPL) es un tratamiento estético que estimula la producción de colágeno al mismo tiempo que elimina la piel dañada y envejecida por el sol. Consiste en una luz de alta intensidad que, cuando entra en la piel, determinados pigmentos naturales la absorben y la convierten en calor.",
      ]}
      image="/laser/ipl.jpg"
      imageAlt="Equipo ULTRALIGHT SPE de luz pulsada intensa"
      sections={[
        {
          type: "mechanism",
          heading: "¿Cómo actúa la IPL?",
          items: [
            {
              title: "Depilación definitiva",
              text: "A través de la producción de colágeno de la piel, su luz estimula el poro y permite reducir la aparición del vello.",
            },
            {
              title: "Producción de colágeno y elasticidad",
              text: "Estimula la producción de colágeno promoviendo el rejuvenecimiento de la piel.",
            },
            {
              title: "Lesiones pigmentarias y vasculares",
              text: "Los pulsos de luz son absorbidos por la melanina de la piel, cuyo calor permite destruir el queratinocito donde se almacena el exceso de melanina.",
            },
            {
              title: "Producción de sebo y acné",
              text: "La luz pulsada permite reducir el suministro de sangre, ralentizar la producción de sebo y curar las heridas de acné.",
            },
          ],
        },
        {
          type: "benefits",
          heading: "Ventajas",
          items: [
            "Rápida: resultados visibles en pocas sesiones, normalmente entre 3 y 5.",
            "Indolora y no invasiva, con resultados muy similares a las intervenciones quirúrgicas.",
            "Trata múltiples afecciones y mejora notablemente la calidad y uniformidad de la piel.",
            "Versátil: se puede combinar con radiofrecuencia, ácido hialurónico, carboxiterapia, mesoterapia y otros tratamientos.",
            "Mejora los niveles de hidratación de la piel.",
            "Rejuveneces la piel y reduce las arrugas.",
            "Material biocompatible, sin reacciones alérgicas en la piel.",
            "Mejora la producción de colágeno, favoreciendo la textura de la piel.",
          ],
        },
        {
          type: "text",
          heading: "¿Para quién está recomendado?",
          paragraphs: [
            "Permite depilar grandes extensiones de piel, lo que hace que sea una técnica especialmente indicada para los hombres, que además de tener una mayor densidad de vello, este cubre mayores superficies. Es una técnica indolora: la IPL no produce dolor.",
          ],
        },
      ]}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20IPL"
    />
  );
}
