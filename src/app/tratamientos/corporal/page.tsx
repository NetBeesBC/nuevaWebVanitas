import type { Metadata } from "next";
import { TratamientosCorporalPage } from "@/components/tratamientos/tratamientos-corporal-page";

export const metadata: Metadata = {
  title: "Tratamientos Corporales en Santander",
  description: "Cavitación, presoterapia, LPG, dermapen corporal y más en Vanitas Vanitatis, Santander.",
};

export default function TratamientosCorporalRoute() {
  return <TratamientosCorporalPage />;
}
