import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function LaserDiodoPage() {
  return (
    <TreatmentDetail
      active="laser"
      parent={{ label: "Depilación láser", href: "/laser" }}
      eyebrow="Depilación láser"
      title="Láser de Diodo"
      intro={[
        "El láser de diodo es un sistema de depilación definitiva que lleva ya en el mercado más de diez años. Se trata de un sistema eficaz de eliminación del vello, capaz de tratar prácticamente todo tipo de piel y de pelo, sin riesgos y en cualquier época del año.",
        "Consiste básicamente en un dispositivo que emite luz monocromática y unidireccional, cuya longitud de onda logra destruir el folículo piloso. Esta alta potencia reduce la duración del tiempo de pulso, consiguiendo la cantidad de energía necesaria para lograr su objetivo (entre 10 ms y 400 ms).",
        "Photobiologics permite una depilación eficaz e indolora que protege las propiedades de tu piel: el máximo confort y cuidado de la piel para la eliminación del vello.",
      ]}
      image="/laser/diodo.jpg"
      imageAlt="Equipo Coolite Evo de láser de diodo"
      sections={[
        {
          type: "benefits",
          heading: "Sus beneficios",
          items: [
            "Mejora del estado de la piel durante todo el tratamiento.",
            "Elimina las barreras al paso de la luz, mejorando la transmisión de toda la energía láser.",
            "Prepara la piel para protocolos de finalización de tratamiento con altas energías de emisión láser, llevándolos a cabo de forma segura.",
            "Dispone de un potente sistema de refrigeración y gran velocidad de tratamiento.",
          ],
        },
        {
          type: "text",
          heading: "¿Para quién está recomendado?",
          paragraphs: [
            "Gracias a la innovadora tecnología del Coolite EVO unida a la eficacia de Photobiologics, somos capaces de alcanzar todos los tipos de piel y de vello.",
          ],
        },
      ]}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20l%C3%A1ser%20de%20diodo"
    />
  );
}
