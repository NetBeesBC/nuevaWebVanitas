import type { Metadata } from "next";
import { MedicinaCapilarPage } from "@/components/medicina/medicina-capilar-page";

export const metadata: Metadata = {
  title: "Medicina Estética Capilar en Santander",
  description: "PRP y exosomas para la salud capilar en Vanitas Vanitatis, Santander.",
};

export default function MedicinaCapilarRoute() {
  return <MedicinaCapilarPage />;
}
