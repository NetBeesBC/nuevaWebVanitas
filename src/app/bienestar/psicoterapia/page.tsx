import type { Metadata } from "next";
import { PsicoterapiaPage } from "@/components/bienestar/psicoterapia-page";

export const metadata: Metadata = {
  title: "Bienestar y Psicoterapia en Santander",
  description: "Psicoterapia con Javier Iglesias en Vanitas Vanitatis: equilibrio mental y físico en Santander.",
};

export default function PsicoterapiaRoute() {
  return <PsicoterapiaPage />;
}
