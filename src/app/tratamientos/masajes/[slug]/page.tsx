import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeafTreatmentDetail } from "@/components/treatments/leaf-treatment-detail";
import { masajesTreatments, getMasajeTreatment } from "@/data/tratamientos-masajes";

export function generateStaticParams() {
  return masajesTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getMasajeTreatment(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} en Santander`,
    description: treatment.intro[0],
  };
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getMasajeTreatment(slug);
  if (!treatment) notFound();

  return (
    <LeafTreatmentDetail
      active="tratamientos"
      parent={{ label: "Masajes", href: "/tratamientos/masajes" }}
      eyebrow="Tratamientos de cabina · Masajes"
      treatment={treatment}
    />
  );
}
