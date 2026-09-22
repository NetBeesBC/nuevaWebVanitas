import { CategoryLanding } from "@/components/treatments/category-landing";

export function MedicinaLandingPage() {
  return (
    <CategoryLanding
      active="medicina"
      eyebrow="Medicina estética"
      title="Medicina estética en Santander"
      intro="Procedimientos mínimamente invasivos bajo estricta supervisión facultativa, con resultados naturales para rostro, cuerpo y cabello."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuD25uqlIApgZCWDLqg5vOJH6qyg84UeeKFI7VatvAQ5UyvRuwvNzHZzd8sSIBE_go9F3B49kEwLATyGeVwH3912vLr4SoJtvA8Q2vqzZsRXBObPwhlE8K5DLpuY93Naui_qXrqFb-er7Qqk1pyYyZZlcWSL8bKEo7gneNrKr0RADAu954El2NPdmOY_B9afNtoyXoxYwxW-um8AahnxAEZGIKMC2aHCGSMUe25ThzpQeoHDzstevcCClUVDvxPTYKAFhjl2FOYcrv0"
      heroImageAlt="Tratamiento de medicina estética inyectable"
      cards={[
        {
          title: "Medicina estética facial",
          text: "Ácido hialurónico, toxina botulínica, bioestimuladores de colágeno, peeling químico y más: tratamientos de precisión para el rostro.",
          image: "/medicina_estetica/facial.jpg",
          href: "/medicina/facial",
          tag: "Rostro",
        },
        {
          title: "Medicina estética corporal",
          text: "Carboxiterapia y mesoterapia corporal para remodelar la silueta y mejorar la firmeza y textura de la piel.",
          image: "/medicina_estetica/corporal.jpg",
          href: "/medicina/corporal",
          tag: "Cuerpo",
        },
        {
          title: "Medicina estética capilar",
          text: "PRP (plasma rico en plaquetas) y exosomas para estimular la salud y densidad capilar de forma natural.",
          image: "/medicina_estetica/capilar.jpg",
          href: "/medicina/capilar",
          tag: "Cabello",
        },
      ]}
    />
  );
}
