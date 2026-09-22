import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeafTreatmentDetail } from "@/components/treatments/leaf-treatment-detail";
import { medicinaCapilarTreatments, getMedicinaCapilarTreatment } from "@/data/medicina-capilar";

export function generateStaticParams() {
  return medicinaCapilarTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getMedicinaCapilarTreatment(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} en Santander`,
    description: treatment.intro[0],
  };
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getMedicinaCapilarTreatment(slug);
  if (!treatment) notFound();

  return (
    <LeafTreatmentDetail
      active="medicina"
      parent={{ label: "Medicina estética capilar", href: "/medicina/capilar" }}
      eyebrow="Medicina estética · Capilar"
      treatment={treatment}
    />
  );
}
