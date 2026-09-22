import type { Metadata } from "next";
import { LaserLandingPage } from "@/components/laser/laser-landing-page";

export const metadata: Metadata = {
  title: "Depilación Láser en Santander",
  description:
    "IPL, láser de diodo y explotación compartida en Vanitas Vanitatis: depilación láser de grado médico en Santander.",
};

export default function LaserRoute() {
  return <LaserLandingPage />;
}
