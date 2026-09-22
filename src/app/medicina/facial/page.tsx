import type { Metadata } from "next";
import { MedicinaFacialPage } from "@/components/medicina/medicina-facial-page";

export const metadata: Metadata = {
  title: "Medicina Estética Facial en Santander",
  description: "Ácido hialurónico, toxina botulínica, bioregeneración cutánea y más tratamientos faciales en Vanitas Vanitatis.",
};

export default function MedicinaFacialRoute() {
  return <MedicinaFacialPage />;
}
