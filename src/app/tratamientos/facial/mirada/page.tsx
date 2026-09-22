import type { Metadata } from "next";
import { TratamientosFacialMiradaPage } from "@/components/tratamientos/tratamientos-facial-mirada-page";

export const metadata: Metadata = {
  title: "Estética de la Mirada en Santander",
  description: "Diseño de cejas con hilo, Eyecon de Mesoestetic, lifting de pestañas y Plasma Pen en Vanitas Vanitatis.",
};

export default function Route() {
  return <TratamientosFacialMiradaPage />;
}
