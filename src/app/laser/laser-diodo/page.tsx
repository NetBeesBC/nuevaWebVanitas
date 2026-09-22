import type { Metadata } from "next";
import { LaserDiodoPage } from "@/components/laser/laser-diodo-page";

export const metadata: Metadata = {
  title: "Láser de Diodo en Santander",
  description:
    "Depilación definitiva con láser de diodo Coolite Evo en Vanitas Vanitatis, Santander: eficaz en todo tipo de piel y vello.",
};

export default function LaserDiodoRoute() {
  return <LaserDiodoPage />;
}
