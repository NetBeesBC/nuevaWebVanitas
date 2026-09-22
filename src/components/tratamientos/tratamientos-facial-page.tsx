import { TreatmentIndex } from "@/components/treatments/treatment-index";

export function TratamientosFacialPage() {
  return (
    <TreatmentIndex
      active="tratamientos"
      parent={{ label: "Tratamientos", href: "/tratamientos" }}
      eyebrow="Tratamientos de cabina"
      title="Tratamientos faciales"
      intro="Protocolos en cabina para el cuidado y rejuvenecimiento del rostro, adaptados a cada tipo de piel."
      items={[
        { icon: "auto_awesome", name: "Antiedad", href: "/tratamientos/facial/antiedad" },
        { icon: "visibility", name: "Estética de la mirada", href: "/tratamientos/facial/mirada" },
        { icon: "water_drop", name: "Hidratación facial", href: "/tratamientos/facial/vitamina-c" },
        { icon: "bubble_chart", name: "Limpieza facial", href: "/tratamientos/facial/limpieza" },
        { icon: "flare", name: "Pigmentación", href: "/tratamientos/facial/ipl-de-gsd" },
        { icon: "view_in_ar", name: "Diagnóstico facial 3D", href: "/tratamientos/facial/diagnostico-3d" },
      ]}
      ctaText="Pide cita para tu primer diagnóstico gratuito"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta%20sobre%20tratamientos%20faciales"
    />
  );
}
