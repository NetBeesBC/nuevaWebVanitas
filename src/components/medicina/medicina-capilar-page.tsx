import { TreatmentIndex } from "@/components/treatments/treatment-index";
import { medicinaCapilarTreatments } from "@/data/medicina-capilar";

const ICONS: Record<string, string> = {
  prp: "biotech",
  exosomas: "science",
};

export function MedicinaCapilarPage() {
  const items = medicinaCapilarTreatments.map((t) => ({
    icon: ICONS[t.slug] ?? "health_and_safety",
    name: t.title,
    href: `/medicina/capilar/${t.slug}`,
  }));

  return (
    <TreatmentIndex
      active="medicina"
      parent={{ label: "Medicina estética", href: "/medicina" }}
      eyebrow="Medicina estética"
      title="Medicina estética capilar"
      intro="Tratamientos regenerativos para estimular la salud y densidad capilar de forma natural."
      items={items}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20medicina%20est%C3%A9tica%20capilar"
    />
  );
}
