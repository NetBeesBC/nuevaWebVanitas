import type { Metadata } from "next";
import { TratamientosLandingPage } from "@/components/tratamientos/tratamientos-landing-page";

export const metadata: Metadata = {
  title: "Tratamientos de Cabina en Santander",
  description:
    "Tratamientos faciales, corporales, masajes y electroestimulación en cabina en Vanitas Vanitatis, Santander.",
};

export default function TratamientosRoute() {
  return <TratamientosLandingPage />;
}
