import { TreatmentIndex } from "@/components/treatments/treatment-index";
import { corporalTreatments } from "@/data/tratamientos-corporal";

const ICONS: Record<string, string> = {
  "cavitacion-ultrasonica": "graphic_eq",
  bodymetrix: "straighten",
  "presoterapia-cocoon": "compress",
  lpg: "vibration",
  "dermapen-corporal": "vaccines",
  "indiba-corporal": "bolt",
  "peeling-corporal": "layers",
  "storz-corporal": "biotech",
};

export function TratamientosCorporalPage() {
  const items = corporalTreatments.map((t) => ({
    icon: ICONS[t.slug] ?? "spa",
    name: t.title,
    href: `/tratamientos/corporal/${t.slug}`,
  }));

  return (
    <TreatmentIndex
      active="tratamientos"
      parent={{ label: "Tratamientos", href: "/tratamientos" }}
      eyebrow="Tratamientos de cabina"
      title="Tratamientos corporales"
      intro="Protocolos reductores, anticelulíticos y reafirmantes para remodelar y tonificar el cuerpo."
      items={items}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20tratamientos%20corporales"
    />
  );
}
