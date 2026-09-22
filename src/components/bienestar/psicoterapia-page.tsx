import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function PsicoterapiaPage() {
  return (
    <TreatmentDetail
      active="bienestar"
      parent={{ label: "Cuerpo y mente", href: "/bienestar" }}
      eyebrow="Cuerpo y mente"
      title="Bienestar: Psicoterapia"
      intro={[
        "El estrés del día a día puede afectar negativamente a nuestra armonía interior y al funcionamiento de nuestro cuerpo. Muchos estudios corroboran cómo nuestra salud mental condiciona el bienestar de nuestro cuerpo.",
        "Javier Iglesias, psicoterapeuta, te ayuda a encontrar tu equilibrio mental y físico, identificando los principales focos de estrés y ansiedad. De esta manera podrás aprender a tratar y manejar situaciones de forma que exista una armonía completa en tu interior.",
      ]}
      image="/bienestar/bienestar.jpg"
      imageAlt="Espacio de bienestar y relajación en la clínica"
      sections={[
        {
          type: "text",
          heading: "Imagen corporal y bienestar emocional",
          paragraphs: [
            "Las personas se preocupan por verse bien y frenar el deterioro. Podemos mejorar nuestra apariencia personal, pero no hay que olvidar que, más allá del resultado y de cómo nos vean los demás, lo que prima es cómo me veo yo.",
            "Según la Psicología de la Apariencia, todos tenemos una imagen corporal interna y personal que puede no coincidir con la apariencia física externa. La investigación ha hallado relación entre la insatisfacción corporal y la distorsión sobre cómo uno se ve. Estas distorsiones se pueden corregir mediante tratamiento psicológico hasta llegar a tener una imagen corporal más realista, lo que también ayuda a obtener resultados más satisfactorios con las técnicas estéticas.",
          ],
        },
      ]}
      ctaText="Pide cita para tu primera consulta"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%2C%20deseo%20un%20poco%20mas%20de%20informaci%C3%B3n%20sobre%20psicoterapia"
    />
  );
}
