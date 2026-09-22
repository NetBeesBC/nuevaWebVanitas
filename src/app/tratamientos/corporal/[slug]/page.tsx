import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeafTreatmentDetail } from "@/components/treatments/leaf-treatment-detail";
import { corporalTreatments, getCorporalTreatment } from "@/data/tratamientos-corporal";

export function generateStaticParams() {
  return corporalTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getCorporalTreatment(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} en Santander`,
    description: treatment.intro[0],
  };
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getCorporalTreatment(slug);
  if (!treatment) notFound();

  return (
    <LeafTreatmentDetail
      active="tratamientos"
      parent={{ label: "Corporal", href: "/tratamientos/corporal" }}
      eyebrow="Tratamientos de cabina · Corporal"
      treatment={treatment}
    />
  );
}
