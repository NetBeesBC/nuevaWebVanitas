export type LeafTreatment = {
  slug: string;
  title: string;
  group?: string;
  intro: string[];
  image: string;
  imageAlt: string;
  benefitsHeading?: string;
  benefits?: string[];
  audienceHeading?: string;
  audience?: string[];
  ctaText: string;
  ctaHref: string;
};

export const DEFAULT_CTA_TEXT = "Pide cita para tu primer diagnóstico gratuito";
export const DEFAULT_CTA_HREF =
  "https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20haceros%20una%20consulta";

export const GENERIC_CLINIC_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAhAoy5ftmy2GSei5DNeRbOnLg6m7W6rIMPn-fTj4vKQMkP8w9GVOa8-Di-gjPbHSEkh8EwcmlujrVxzgH6-kNZecEOopq6Fe_NVhzK1xWSj3klca48BcocJlA33PqYRrnnvw0-tQBFZV6IzlnmaTyNMbn8GJvcz-ALdwQZT5d-rR43DTTO54Juhez0VZRg2N4LXfo6X4P96fnnEYNeWXU9c60yRvLAzxYONNbPjX6ww4YjGikuq9eX9DGndDT31CyoMF1q3JgBrrs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBRLCTCmjcw04PWeEJ-vG6Fs9wLyDj3Q82D52BUmAZmRtogS3ym7MPO1UVb173LrCb_bOsCsKk7rdRQi7_RD1XXLpGm3eLj_aUTDg26IAdZ6gBMKWNGPk77Y7gvoq0IBHy2oC1jPAHjFqymA39glg7no1hjfh1rEav15-Tg7r_qr7lvB5doFS_FHSubBu0sL75dQ0XptsYpXEBNhVTrEWdviom-Fyzkz_U_zdyx2G2ki7rkdXji_TZUR8hIcTbC--JMEWagWUujjyo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBsDC1mTM3CwWmUjoMkq77Z20sc9xAMbfmYSrBkHKB1OszWaltzj9C6puM9WEMQs6AocyUDxOUIgCI_bvVHgSef8RQUBGTFIYNjVsaabxYI1F33EjMnfEC1twp27U9Dv0pxJJji4BoFzoyJyOafERcdRfY1x5PxRdyajxQiUuZkc8TizfKM7Z5o5ATL1pnjLP2-qN-YhWX9z8QcZKcd1R8Wb64NjXFGjEhBmPl1_ViMMAxWK8-QIBxu_GfpUbnjmMjSN6CHJV2n0UQ",
];
