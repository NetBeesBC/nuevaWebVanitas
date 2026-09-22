import { CategoryLanding } from "@/components/treatments/category-landing";

export function BienestarLandingPage() {
  return (
    <CategoryLanding
      active="bienestar"
      eyebrow="Cuerpo y mente"
      title="Cuerpo y mente en Santander"
      intro="Un enfoque holístico de salud preventiva y equilibrio interno, más allá del resultado estético."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBRLCTCmjcw04PWeEJ-vG6Fs9wLyDj3Q82D52BUmAZmRtogS3ym7MPO1UVb173LrCb_bOsCsKk7rdRQi7_RD1XXLpGm3eLj_aUTDg26IAdZ6gBMKWNGPk77Y7gvoq0IBHy2oC1jPAHjFqymA39glg7no1hjfh1rEav15-Tg7r_qr7lvB5doFS_FHSubBu0sL75dQ0XptsYpXEBNhVTrEWdviom-Fyzkz_U_zdyx2G2ki7rkdXji_TZUR8hIcTbC--JMEWagWUujjyo"
      heroImageAlt="Ambiente de bienestar en la clínica Vanitas Vanitatis"
      cards={[
        {
          title: "Bienestar",
          text: "Psicoterapia con Javier Iglesias para encontrar el equilibrio mental y físico, identificando los focos de estrés y ansiedad.",
          image: "/bienestar/bienestar.jpg",
          href: "/bienestar/psicoterapia",
          tag: "Psicoterapia",
        },
        {
          title: "Nutrición",
          text: "La belleza comienza en el interior: asesoramiento nutricional y nutricosmética para cuidar la piel desde dentro.",
          image: "/bienestar/nutricion.jpg",
          href: "/bienestar/nutricion",
          tag: "Nutrición",
        },
      ]}
    />
  );
}
