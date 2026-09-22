import { TreatmentIndex } from "@/components/treatments/treatment-index";
import { medicinaFacialTreatments } from "@/data/medicina-facial";

const ICONS: Record<string, string> = {
  "acido-hialuronico": "water_drop",
  "inductores-colageno-radiesse": "auto_awesome",
  neuromoduladores: "vaccines",
  "bioregeneracion-cutanea": "spa",
  "relleno-ojeras": "visibility",
  "carboxiterapia-facial": "bubble_chart",
  "peeling-quimico": "layers",
};

export function MedicinaFacialPage() {
  const items = medicinaFacialTreatments.map((t) => ({
    icon: ICONS[t.slug] ?? "health_and_safety",
    name: t.title,
    href: `/medicina/facial/${t.slug}`,
  }));

  return (
    <TreatmentIndex
      active="medicina"
      parent={{ label: "Medicina estética", href: "/medicina" }}
      eyebrow="Medicina estética"
      title="Medicina estética facial"
      intro="Tratamientos de precisión para rejuvenecer, hidratar y remodelar el rostro con la máxima seguridad clínica."
      items={items}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20medicina%20est%C3%A9tica%20facial"
    />
  );
}
