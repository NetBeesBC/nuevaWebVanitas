import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeafTreatmentDetail } from "@/components/treatments/leaf-treatment-detail";
import { medicinaCorporalTreatments, getMedicinaCorporalTreatment } from "@/data/medicina-corporal";

export function generateStaticParams() {
  return medicinaCorporalTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getMedicinaCorporalTreatment(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} en Santander`,
    description: treatment.intro[0],
  };
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getMedicinaCorporalTreatment(slug);
  if (!treatment) notFound();

  return (
    <LeafTreatmentDetail
      active="medicina"
      parent={{ label: "Medicina estética corporal", href: "/medicina/corporal" }}
      eyebrow="Medicina estética · Corporal"
      treatment={treatment}
    />
  );
}
