import type { Metadata } from "next";
import { TratamientosFacialAntiedadPage } from "@/components/tratamientos/tratamientos-facial-antiedad-page";

export const metadata: Metadata = {
  title: "Tratamientos Antiedad en Santander",
  description: "Dermapen, HIFU, Indiba facial, IPL de GSD y más tratamientos antiedad en Vanitas Vanitatis.",
};

export default function Route() {
  return <TratamientosFacialAntiedadPage />;
}
