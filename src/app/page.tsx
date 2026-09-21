import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";

export const metadata: Metadata = {
  title: "Vanitas Vanitatis | Medicina Estetica de Precision Santander",
  description:
    "Clinica de medicina estetica avanzada en Santander con tecnologia medica, diagnostico personalizado y protocolos de alta gama.",
};

export default function HomeRoute() {
  return <HomePage />;
}
