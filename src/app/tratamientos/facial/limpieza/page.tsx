import type { Metadata } from "next";
import { TratamientosFacialLimpiezaPage } from "@/components/tratamientos/tratamientos-facial-limpieza-page";

export const metadata: Metadata = {
  title: "Limpieza Facial en Santander",
  description: "Ácido glicólico, Green Peel, peeling ultrasónico y punta de diamante en Vanitas Vanitatis.",
};

export default function Route() {
  return <TratamientosFacialLimpiezaPage />;
}
