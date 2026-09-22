import type { Metadata } from "next";
import { TratamientosMasajesPage } from "@/components/tratamientos/tratamientos-masajes-page";

export const metadata: Metadata = {
  title: "Masajes en Santander",
  description: "Maderoterapia, masaje relajante y masaje drenante brasileño en Vanitas Vanitatis, Santander.",
};

export default function TratamientosMasajesRoute() {
  return <TratamientosMasajesPage />;
}
