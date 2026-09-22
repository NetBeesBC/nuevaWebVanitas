import type { Metadata } from "next";
import { IplPage } from "@/components/laser/ipl-page";

export const metadata: Metadata = {
  title: "IPL (Luz Pulsada Intensa) en Santander",
  description:
    "Tratamiento de luz pulsada intensa (IPL) en Vanitas Vanitatis: depilación, rejuvenecimiento cutáneo y tratamiento de manchas en Santander.",
};

export default function IplRoute() {
  return <IplPage />;
}
