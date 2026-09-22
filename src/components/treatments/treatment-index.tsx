import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

type IndexItem = { icon: string; name: string; href?: string };

type TreatmentIndexProps = {
  active: "tratamientos" | "laser" | "medicina" | "bienestar";
  parent: { label: string; href: string };
  eyebrow: string;
  title: string;
  intro?: string;
  items: IndexItem[];
  ctaText: string;
  ctaHref: string;
};

export function TreatmentIndex({ active, parent, eyebrow, title, intro, items, ctaText, ctaHref }: TreatmentIndexProps) {
  return (
    <main className="font-display bg-white text-vanitas-black antialiased">
      <SiteHeader active={active} />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-vanitas-black/50 mb-6">
            <Link className="hover:text-primary transition-colors" href="/">
              Inicio
            </Link>
            <span>/</span>
            <Link className="hover:text-primary transition-colors" href={parent.href}>
              {parent.label}
            </Link>
            <span>/</span>
            <span className="text-vanitas-black font-medium">{title}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{eyebrow}</p>
          <h1 className="serif-title text-4xl md:text-5xl text-vanitas-black leading-[1.1] mb-6">{title}</h1>
          {intro && <p className="text-lg text-vanitas-black/60 leading-relaxed max-w-2xl">{intro}</p>}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item) => {
            const tileContent = (
              <>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold flex-grow">{item.name}</h3>
                {item.href && (
                  <span className="material-symbols-outlined text-vanitas-black/30 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                )}
              </>
            );
            return item.href ? (
              <Link
                key={item.name}
                href={item.href}
                className="clinical-card bg-white p-6 flex items-center gap-4 group"
              >
                {tileContent}
              </Link>
            ) : (
              <div key={item.name} className="clinical-card bg-white p-6 flex items-center gap-4">
                {tileContent}
              </div>
            );
          })}
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-secondary-turq rounded-clinical px-8 py-14 md:py-16 text-center text-white">
          <h2 className="serif-title text-3xl md:text-4xl mb-6">¿Empezamos?</h2>
          <p className="text-white/90 max-w-xl mx-auto mb-10">
            Escríbenos y te asesoramos sin compromiso para encontrar el tratamiento que mejor se adapta a ti.
          </p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-vanitas-black hover:text-white transition-all"
          >
            {ctaText}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
