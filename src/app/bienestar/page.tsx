import type { Metadata } from "next";
import { BienestarLandingPage } from "@/components/bienestar/bienestar-landing-page";

export const metadata: Metadata = {
  title: "Cuerpo y Mente en Santander",
  description: "Psicoterapia y nutrición en Vanitas Vanitatis: un enfoque holístico de salud preventiva y bienestar en Santander.",
};

export default function BienestarRoute() {
  return <BienestarLandingPage />;
}
