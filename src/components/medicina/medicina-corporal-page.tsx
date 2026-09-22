import { TreatmentIndex } from "@/components/treatments/treatment-index";
import { medicinaCorporalTreatments } from "@/data/medicina-corporal";

const ICONS: Record<string, string> = {
  "carboxiterapia-corporal": "bubble_chart",
  "mesoterapia-corporal": "vaccines",
};

export function MedicinaCorporalPage() {
  const items = medicinaCorporalTreatments.map((t) => ({
    icon: ICONS[t.slug] ?? "health_and_safety",
    name: t.title,
    href: `/medicina/corporal/${t.slug}`,
  }));

  return (
    <TreatmentIndex
      active="medicina"
      parent={{ label: "Medicina estética", href: "/medicina" }}
      eyebrow="Medicina estética"
      title="Medicina estética corporal"
      intro="Protocolos corporales para remodelar la silueta, mejorar la firmeza y activar la circulación."
      items={items}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20medicina%20est%C3%A9tica%20corporal"
    />
  );
}
