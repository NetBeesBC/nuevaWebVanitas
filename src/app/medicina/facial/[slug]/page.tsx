import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeafTreatmentDetail } from "@/components/treatments/leaf-treatment-detail";
import { medicinaFacialTreatments, getMedicinaFacialTreatment } from "@/data/medicina-facial";

export function generateStaticParams() {
  return medicinaFacialTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getMedicinaFacialTreatment(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} en Santander`,
    description: treatment.intro[0],
  };
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getMedicinaFacialTreatment(slug);
  if (!treatment) notFound();

  return (
    <LeafTreatmentDetail
      active="medicina"
      parent={{ label: "Medicina estética facial", href: "/medicina/facial" }}
      eyebrow="Medicina estética · Facial"
      treatment={treatment}
    />
  );
}
