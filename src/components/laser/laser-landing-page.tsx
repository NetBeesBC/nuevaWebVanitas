import { CategoryLanding } from "@/components/treatments/category-landing";

export function LaserLandingPage() {
  return (
    <CategoryLanding
      active="laser"
      eyebrow="Depilación láser"
      title="Depilación láser en Santander"
      intro="Tecnología de depilación de grado médico para una eliminación del vello segura, eficaz y duradera, adaptada a cada tipo de piel."
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBRLCTCmjcw04PWeEJ-vG6Fs9wLyDj3Q82D52BUmAZmRtogS3ym7MPO1UVb173LrCb_bOsCsKk7rdRQi7_RD1XXLpGm3eLj_aUTDg26IAdZ6gBMKWNGPk77Y7gvoq0IBHy2oC1jPAHjFqymA39glg7no1hjfh1rEav15-Tg7r_qr7lvB5doFS_FHSubBu0sL75dQ0XptsYpXEBNhVTrEWdviom-Fyzkz_U_zdyx2G2ki7rkdXji_TZUR8hIcTbC--JMEWagWUujjyo"
      heroImageAlt="Interior de la clínica Vanitas Vanitatis en Santander"
      cards={[
        {
          title: "IPL (Luz Pulsada Intensa)",
          text: "Luz de alta intensidad que estimula la producción de colágeno y trata la piel dañada por el sol, además de reducir la aparición del vello.",
          image: "/laser/ipl.jpg",
          href: "/laser/luz-pulsada-intensa",
          tag: "Fototerapia",
        },
        {
          title: "Láser de Diodo",
          text: "Sistema de depilación definitiva con más de diez años de eficacia probada, capaz de tratar prácticamente todo tipo de piel y de pelo.",
          image: "/laser/diodo.jpg",
          href: "/laser/laser-diodo",
          tag: "Depilación definitiva",
        },
        {
          title: "Explotación Compartida",
          text: "Modelo para profesionales del sector: aportamos técnico y aparatología para realizar tratamientos de estética avanzada en tu propio centro.",
          image: "/laser/explotacioncompartida.jpg",
          href: "/laser/explotacion-compartida",
          tag: "Para profesionales",
        },
      ]}
    />
  );
}
