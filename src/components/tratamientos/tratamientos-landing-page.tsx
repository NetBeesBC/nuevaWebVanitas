import { CategoryLanding } from "@/components/treatments/category-landing";

export function TratamientosLandingPage() {
  return (
    <CategoryLanding
      active="tratamientos"
      eyebrow="Tratamientos de cabina"
      title="Tratamientos en Santander"
      intro="Tratamientos de belleza y estética en cabina: rostro, cuerpo, masajes y electroestimulación con la máxima calidad y confort."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAhAoy5ftmy2GSei5DNeRbOnLg6m7W6rIMPn-fTj4vKQMkP8w9GVOa8-Di-gjPbHSEkh8EwcmlujrVxzgH6-kNZecEOopq6Fe_NVhzK1xWSj3klca48BcocJlA33PqYRrnnvw0-tQBFZV6IzlnmaTyNMbn8GJvcz-ALdwQZT5d-rR43DTTO54Juhez0VZRg2N4LXfo6X4P96fnnEYNeWXU9c60yRvLAzxYONNbPjX6ww4YjGikuq9eX9DGndDT31CyoMF1q3JgBrrs"
      heroImageAlt="Cabina de tratamientos de Vanitas Vanitatis"
      cards={[
        {
          title: "Facial",
          text: "Antiedad, estética de la mirada, hidratación, limpieza facial, pigmentación y diagnóstico facial 3D.",
          image: "/tratamientos/faciales.jpg",
          href: "/tratamientos/facial",
          tag: "Rostro",
        },
        {
          title: "Corporal",
          text: "Tratamientos reductores, anticelulíticos y reafirmantes para remodelar y tonificar el cuerpo.",
          image: "/tratamientos/corporales.jpg",
          href: "/tratamientos/corporal",
          tag: "Cuerpo",
        },
        {
          title: "Masajes",
          text: "Maderoterapia, masaje relajante y drenante brasileño para el bienestar y la recuperación corporal.",
          image: "/tratamientos/masaje.jpg",
          href: "/tratamientos/masajes",
          tag: "Relax",
        },
        {
          title: "Electroestimulación",
          text: "Electroestimulación activa y corporal pasiva para el tono muscular y la firmeza.",
          image: "/tratamientos/electroestimulacion.jpg",
          href: "/tratamientos/electroestimulacion",
          tag: "Tono muscular",
        },
      ]}
    />
  );
}
