import { TreatmentIndex } from "@/components/treatments/treatment-index";
import { facialTreatments } from "@/data/tratamientos-facial";

const ICONS: Record<string, string> = {
  "cejas-con-hilo": "content_cut",
  "eyecon-mesoestetic": "visibility",
  "lifting-pestanas": "auto_awesome",
  "plasma-pen": "bolt",
};

export function TratamientosFacialMiradaPage() {
  const items = facialTreatments
    .filter((t) => t.group === "mirada")
    .map((t) => ({ icon: ICONS[t.slug] ?? "visibility", name: t.title, href: `/tratamientos/facial/${t.slug}` }));

  return (
    <TreatmentIndex
      active="tratamientos"
      parent={{ label: "Facial", href: "/tratamientos/facial" }}
      eyebrow="Tratamientos de cabina · Facial"
      title="Estética de la mirada"
      intro="Tratamientos para realzar y rejuvenecer la zona de los ojos y las cejas."
      items={items}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20est%C3%A9tica%20de%20la%20mirada"
    />
  );
}
