import type { Metadata } from "next";
import { TratamientosElectroestimulacionPage } from "@/components/tratamientos/tratamientos-electroestimulacion-page";

export const metadata: Metadata = {
  title: "Electroestimulación en Santander",
  description: "Electroestimulación activa y corporal pasiva en Vanitas Vanitatis, Santander.",
};

export default function TratamientosElectroestimulacionRoute() {
  return <TratamientosElectroestimulacionPage />;
}
