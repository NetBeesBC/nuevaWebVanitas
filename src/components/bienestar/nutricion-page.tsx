import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function NutricionPage() {
  return (
    <TreatmentDetail
      active="bienestar"
      parent={{ label: "Cuerpo y mente", href: "/bienestar" }}
      eyebrow="Cuerpo y mente"
      title="Nutrición"
      intro={[
        "La belleza comienza en el interior. Mejora la protección y el aspecto de la piel cuidando tu interior: la alimentación es el pilar fundamental para la armonía del cuerpo. Déjanos asesorarte en lo mejor para ti.",
      ]}
      image="/bienestar/nutricion.jpg"
      imageAlt="Asesoramiento nutricional en Vanitas Vanitatis"
      sections={[
        {
          type: "text",
          heading: "¿Qué son los nutricosméticos?",
          paragraphs: [
            "La hidratación y los niveles de vitaminas pueden ser una clave principal para mejorar la salud de tu piel. La nutrición ayuda a la protección de las células ante el estrés oxidativo, que puede estar causado por influencias ambientales cotidianas o un estilo de vida ajetreado o estresante.",
            "Son complementos dietéticos que ayudan a mejorar la función y estructura de la piel: una nueva categoría de productos de belleza que trabajan de dentro afuera, en un segmento de alto potencial entre los complementos de cuidado de la piel y los complementos alimenticios.",
          ],
        },
        {
          type: "benefits",
          heading: "¿Para quién?",
          items: [
            "Hombres y mujeres de 25 años en adelante.",
            "Quienes quieren definir el aspecto de su piel según su estilo de vida y personalidad.",
            "Quienes aspiran a una belleza cuidada que refuerce su confianza.",
            "Quienes buscan nuevas formas de proteger y mejorar su belleza.",
          ],
        },
      ]}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20nutrici%C3%B3n"
    />
  );
}
