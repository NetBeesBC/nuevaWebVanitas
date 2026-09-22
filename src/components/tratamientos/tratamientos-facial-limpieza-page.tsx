import { TreatmentIndex } from "@/components/treatments/treatment-index";
import { facialTreatments } from "@/data/tratamientos-facial";

const ICONS: Record<string, string> = {
  "acido-glicolico": "bubble_chart",
  "green-peel": "eco",
  "peeling-ultrasonico": "graphic_eq",
  "punta-de-diamante": "diamond",
};

export function TratamientosFacialLimpiezaPage() {
  const items = facialTreatments
    .filter((t) => t.group === "limpieza")
    .map((t) => ({ icon: ICONS[t.slug] ?? "bubble_chart", name: t.title, href: `/tratamientos/facial/${t.slug}` }));

  return (
    <TreatmentIndex
      active="tratamientos"
      parent={{ label: "Facial", href: "/tratamientos/facial" }}
      eyebrow="Tratamientos de cabina · Facial"
      title="Limpieza facial"
      intro="Exfoliación y limpieza profunda para una piel más luminosa y uniforme."
      items={items}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20limpieza%20facial"
    />
  );
}
