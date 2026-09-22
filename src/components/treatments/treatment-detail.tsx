import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

type MechanismItem = { title: string; text: string };

type Section =
  | { type: "mechanism"; heading: string; items: MechanismItem[] }
  | { type: "benefits"; heading: string; items: string[] }
  | { type: "text"; heading: string; paragraphs: string[] };

type TreatmentDetailProps = {
  active: "tratamientos" | "laser" | "medicina" | "bienestar";
  parent: { label: string; href: string };
  eyebrow: string;
  title: string;
  intro: string[];
  image: string;
  imageAlt: string;
  sections: Section[];
  ctaText: string;
  ctaHref: string;
};

export function TreatmentDetail({
  active,
  parent,
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  sections,
  ctaText,
  ctaHref,
}: TreatmentDetailProps) {
  return (
    <main className="font-display bg-white text-vanitas-black antialiased">
      <SiteHeader active={active} />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{eyebrow}</p>
              <h1 className="serif-title text-4xl md:text-5xl text-vanitas-black leading-[1.1] mb-6">{title}</h1>
              <div className="space-y-4 text-vanitas-black/70 leading-relaxed">
                {intro.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-clinical overflow-hidden bg-primary/8">
                <Image
                  alt={imageAlt}
                  className="object-cover"
                  src={image}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, i) => (
        <SectionBlock key={i} section={section} />
      ))}

      <section className="py-20 px-6">
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

function SectionBlock({ section }: { section: Section }) {
  if (section.type === "mechanism") {
    return (
      <section className="py-16 px-6 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl serif-title mb-10">{section.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item) => (
              <div key={item.title} className="bg-white p-7 rounded-clinical border border-black/5">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">{item.title}</h3>
                <p className="text-vanitas-black/70 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "benefits") {
    return (
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl serif-title mb-10">{section.heading}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-vanitas-black/75 leading-relaxed">
                <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-background-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl serif-title mb-6">{section.heading}</h2>
        <div className="space-y-4 text-vanitas-black/70 leading-relaxed">
          {section.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
