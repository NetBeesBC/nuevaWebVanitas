import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

type CategoryHeaderActive = "tratamientos" | "laser" | "medicina" | "bienestar";

export type CategoryCardItem = {
  title: string;
  text: string;
  image: string;
  href: string;
  tag?: string;
};

type CategoryLandingProps = {
  active: CategoryHeaderActive;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  cards: CategoryCardItem[];
};

export function CategoryLanding({ active, eyebrow, title, intro, heroImage, heroImageAlt, cards }: CategoryLandingProps) {
  return (
    <main className="font-display bg-white text-vanitas-black antialiased">
      <SiteHeader active={active} />

      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image className="object-cover" alt={heroImageAlt} src={heroImage} fill priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 py-28">
          <nav className="flex items-center gap-2 text-xs text-vanitas-black/50 mb-6">
            <Link className="hover:text-primary transition-colors" href="/">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-vanitas-black font-medium">{title}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{eyebrow}</p>
          <h1 className="serif-title text-4xl md:text-6xl text-vanitas-black leading-[1.1] mb-6 max-w-2xl">
            {title}
          </h1>
          <p className="text-lg text-vanitas-black/60 leading-relaxed max-w-xl">{intro}</p>
        </div>
      </section>

      <section className="py-20 px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid grid-cols-1 gap-8 ${
              cards.length >= 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : cards.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2 max-w-4xl mx-auto"
            }`}
          >
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="clinical-card bg-white overflow-hidden group flex flex-col"
              >
                <div className="h-56 bg-gray-100 overflow-hidden relative">
                  <Image
                    alt={card.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    src={card.image}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  {card.tag && (
                    <div className="absolute top-4 left-4 bg-white/95 text-vanitas-black text-xs font-semibold px-3 py-1 rounded-full">
                      {card.tag}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-vanitas-black/60 text-sm leading-relaxed mb-6 flex-grow">{card.text}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Ver tratamiento
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
