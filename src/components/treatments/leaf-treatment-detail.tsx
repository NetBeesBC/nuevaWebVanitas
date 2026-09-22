import type { ComponentProps } from "react";
import { TreatmentDetail } from "@/components/treatments/treatment-detail";
import { LeafTreatment } from "@/data/treatment-types";

type LeafTreatmentDetailProps = {
  active: "tratamientos" | "laser" | "medicina" | "bienestar";
  parent: { label: string; href: string };
  eyebrow: string;
  treatment: LeafTreatment;
};

export function LeafTreatmentDetail({ active, parent, eyebrow, treatment }: LeafTreatmentDetailProps) {
  const sections: ComponentProps<typeof TreatmentDetail>["sections"] = [];

  if (treatment.benefits?.length) {
    sections.push({
      type: "benefits",
      heading: treatment.benefitsHeading ?? "Sus beneficios",
      items: treatment.benefits,
    });
  }

  if (treatment.audience?.length) {
    sections.push({
      type: "text",
      heading: treatment.audienceHeading ?? "¿Para quién está recomendado?",
      paragraphs: treatment.audience,
    });
  }

  return (
    <TreatmentDetail
      active={active}
      parent={parent}
      eyebrow={eyebrow}
      title={treatment.title}
      intro={treatment.intro}
      image={treatment.image}
      imageAlt={treatment.imageAlt}
      sections={sections}
      ctaText={treatment.ctaText}
      ctaHref={treatment.ctaHref}
    />
  );
}
