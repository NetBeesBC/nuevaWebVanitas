import type { Metadata } from "next";
import { MedicinaLandingPage } from "@/components/medicina/medicina-landing-page";

export const metadata: Metadata = {
  title: "Medicina Estética en Santander",
  description:
    "Medicina estética facial, corporal y capilar en Vanitas Vanitatis: procedimientos mínimamente invasivos con resultados naturales.",
};

export default function MedicinaRoute() {
  return <MedicinaLandingPage />;
}
