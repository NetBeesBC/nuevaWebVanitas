import { TreatmentIndex } from "@/components/treatments/treatment-index";
import { electroestimulacionTreatments } from "@/data/tratamientos-electroestimulacion";

const ICONS: Record<string, string> = {
  "electroestimulacion-activa": "bolt",
  "electroestimulacion-pasiva": "battery_charging_full",
};

export function TratamientosElectroestimulacionPage() {
  const items = electroestimulacionTreatments.map((t) => ({
    icon: ICONS[t.slug] ?? "bolt",
    name: t.title,
    href: `/tratamientos/electroestimulacion/${t.slug}`,
  }));

  return (
    <TreatmentIndex
      active="tratamientos"
      parent={{ label: "Tratamientos", href: "/tratamientos" }}
      eyebrow="Tratamientos de cabina"
      title="Electroestimulación"
      intro="Tecnología de electroestimulación para el tono muscular y la firmeza corporal."
      items={items}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20electroestimulaci%C3%B3n"
    />
  );
}
