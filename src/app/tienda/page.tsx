import type { Metadata } from "next";
import { TiendaPage } from "@/components/tienda/tienda-page";

export const metadata: Metadata = {
  title: "Tienda Online",
  description: "Dermocosmética profesional Mesoestetics para continuar tu tratamiento en casa: Vanitas Vanitatis.",
};

export default function TiendaRoute() {
  return <TiendaPage />;
}
