import type { Metadata } from "next";
import { NutricionPage } from "@/components/bienestar/nutricion-page";

export const metadata: Metadata = {
  title: "Nutrición en Santander",
  description: "Asesoramiento nutricional y nutricosmética en Vanitas Vanitatis, Santander.",
};

export default function NutricionRoute() {
  return <NutricionPage />;
}
