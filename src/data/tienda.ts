export type Product = {
  slug: string;
  name: string;
  price?: string;
  category: "facial" | "corporal" | "suplementos";
  brand: string;
  image: string;
};

export const CATEGORIES: { key: Product["category"] | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "facial", label: "Facial" },
  { key: "corporal", label: "Corporal" },
  { key: "suplementos", label: "Suplementos" },
];

const UPLOADS = "https://vanitasvanitatis.es/wp-content/uploads/2021/06";

export const products: Product[] = [
  {
    slug: "bodyshock-night-reducer",
    name: "Bodyshock® Night Reducer",
    price: "69,90 €",
    category: "corporal",
    brand: "Mesoestetics",
    image: `${UPLOADS}/1551ebfb-df2c-4034-b1e6-385f38559798.png`,
  },
  {
    slug: "bodyshock-tratamiento-estetico-corporal",
    name: "Bodyshock® Tratamiento estético corporal",
    category: "corporal",
    brand: "Mesoestetics",
    image: `${UPLOADS}/bodyshock_bodegon_professional_300ppp.png`,
  },
  {
    slug: "bodyshock-push-up",
    name: "Bodyshock® Push-up",
    price: "68,06 €",
    category: "corporal",
    brand: "Mesoestetics",
    image: `${UPLOADS}/t-dbod0006-bodyshock-push-up-ps_1.png`,
  },
  {
    slug: "bodyshock-slim-up-reducer",
    name: "Bodyshock® Slim-up! Reducer",
    price: "32,00 €",
    category: "corporal",
    brand: "Mesoestetics",
    image: `${UPLOADS}/t-dbod0005-bodyshock-slim-up-reducer-ps_1.png`,
  },
  {
    slug: "melan-tran3x-daily-depigmenting-gel-cream",
    name: "Melan tran3x® Gel Cream",
    price: "79,90 €",
    category: "facial",
    brand: "Mesoestetics",
    image: `${UPLOADS}/t-dskn0035-tran3x-daily-depigmenting-gel-cream-ps.png`,
  },
  {
    slug: "melan-tran3x-intensive-depigmenting-concentrate",
    name: "Melan tran3x® Intensive Depigmenting Concentrate",
    price: "104,00 €",
    category: "facial",
    brand: "Mesoestetics",
    image: `${UPLOADS}/t-dskn0034-tran3x-intensive-depigmenting-concentrate_ps_2.png`,
  },
  {
    slug: "mesoprotech-light-water-antiaging-veil",
    name: "Mesoprotech® Light Water Antiaging Veil",
    price: "36,00 €",
    category: "facial",
    brand: "Mesoestetics",
    image: `${UPLOADS}/t-dsun0005-mesoprotech-light-water-antiaging-veil-p_1.png`,
  },
  {
    slug: "mesoprotech-mineral-matt-antiaging",
    name: "Mesoprotech® Mineral Matt Antiaging",
    price: "36,00 €",
    category: "facial",
    brand: "Mesoestetics",
    image: `${UPLOADS}/t-dsun0006-mesoprotech-mineral-matt-antiaging-fluid-ps_1.png`,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
