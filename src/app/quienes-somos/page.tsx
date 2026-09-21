import type { Metadata } from "next";
import { QuienesSomosPage } from "@/components/about/quienes-somos-page";

export const metadata: Metadata = {
  title: "Quiénes Somos | Vanitas Vanitatis",
  description:
    "Conoce al equipo de Vanitas Vanitatis en Santander: trayectoria clínica, filosofía médica estética y compromiso con la excelencia.",
};

export default function QuienesSomosRoute() {
  return <QuienesSomosPage />;
}
