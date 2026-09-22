import type { Metadata } from "next";
import { MedicinaCorporalPage } from "@/components/medicina/medicina-corporal-page";

export const metadata: Metadata = {
  title: "Medicina Estética Corporal en Santander",
  description: "Carboxiterapia y mesoterapia corporal en Vanitas Vanitatis, Santander.",
};

export default function MedicinaCorporalRoute() {
  return <MedicinaCorporalPage />;
}
