import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeafTreatmentDetail } from "@/components/treatments/leaf-treatment-detail";
import { facialTreatments, getFacialTreatment } from "@/data/tratamientos-facial";

export function generateStaticParams() {
  return facialTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getFacialTreatment(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} en Santander`,
    description: treatment.intro[0],
  };
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getFacialTreatment(slug);
  if (!treatment) notFound();

  return (
    <LeafTreatmentDetail
      active="tratamientos"
      parent={{ label: "Facial", href: "/tratamientos/facial" }}
      eyebrow="Tratamientos de cabina · Facial"
      treatment={treatment}
    />
  );
}
