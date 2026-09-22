import type { Metadata } from "next";
import { TratamientosFacialPage } from "@/components/tratamientos/tratamientos-facial-page";

export const metadata: Metadata = {
  title: "Tratamientos Faciales en Santander",
  description: "Antiedad, hidratación, limpieza facial, pigmentación y diagnóstico facial 3D en Vanitas Vanitatis.",
};

export default function TratamientosFacialRoute() {
  return <TratamientosFacialPage />;
}
