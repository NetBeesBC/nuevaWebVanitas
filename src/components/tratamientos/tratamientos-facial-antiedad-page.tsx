import { TreatmentIndex } from "@/components/treatments/treatment-index";
import { facialTreatments } from "@/data/tratamientos-facial";

const ICONS: Record<string, string> = {
  dermapen: "vaccines",
  "fototerapia-led": "flare",
  "indiba-facial": "bolt",
  "ipl-de-gsd": "flash_on",
  "mesoterapia-facial": "vaccines",
  "storz-medical-facial": "graphic_eq",
  hifu: "biotech",
};

export function TratamientosFacialAntiedadPage() {
  const items = facialTreatments
    .filter((t) => t.group === "antiedad")
    .map((t) => ({ icon: ICONS[t.slug] ?? "auto_awesome", name: t.title, href: `/tratamientos/facial/${t.slug}` }));

  return (
    <TreatmentIndex
      active="tratamientos"
      parent={{ label: "Facial", href: "/tratamientos/facial" }}
      eyebrow="Tratamientos de cabina · Facial"
      title="Antiedad"
      intro="Tratamientos faciales para prevenir y corregir los signos del envejecimiento."
      items={items}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20tratamientos%20antiedad"
    />
  );
}
