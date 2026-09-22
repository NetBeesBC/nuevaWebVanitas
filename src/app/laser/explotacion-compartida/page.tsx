import type { Metadata } from "next";
import { ExplotacionCompartidaPage } from "@/components/laser/explotacion-compartida-page";

export const metadata: Metadata = {
  title: "Explotación Compartida en Santander",
  description:
    "Modelo de explotación compartida de Vanitas Vanitatis para profesionales del sector estético en Santander.",
};

export default function ExplotacionCompartidaRoute() {
  return <ExplotacionCompartidaPage />;
}
