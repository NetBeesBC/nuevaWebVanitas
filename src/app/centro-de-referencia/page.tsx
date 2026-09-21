import type { Metadata } from "next";
import { CentroDeReferenciaPage } from "@/components/reference/centro-de-referencia-page";

export const metadata: Metadata = {
  title: "Centro de Referencia | Vanitas Vanitatis",
  description:
    "Descubre el centro de referencia de Vanitas Vanitatis y su enfoque de medicina estética avanzada en Santander.",
};

export default function CentroDeReferenciaRoute() {
  return <CentroDeReferenciaPage />;
}
