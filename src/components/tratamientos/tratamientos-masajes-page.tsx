import { TreatmentIndex } from "@/components/treatments/treatment-index";
import { masajesTreatments } from "@/data/tratamientos-masajes";

const ICONS: Record<string, string> = {
  maderoterapia: "spa",
  "masaje-relajante": "self_care",
  "masaje-drenante-brasileno": "waves",
};

export function TratamientosMasajesPage() {
  const items = masajesTreatments.map((t) => ({
    icon: ICONS[t.slug] ?? "spa",
    name: t.title,
    href: `/tratamientos/masajes/${t.slug}`,
  }));

  return (
    <TreatmentIndex
      active="tratamientos"
      parent={{ label: "Tratamientos", href: "/tratamientos" }}
      eyebrow="Tratamientos de cabina"
      title="Masajes"
      intro="Terapias manuales para el bienestar, la recuperación y la activación circulatoria del cuerpo."
      items={items}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20masajes"
    />
  );
}
